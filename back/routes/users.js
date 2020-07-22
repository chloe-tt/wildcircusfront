const express = require('express')
const router = express.Router()
const connection = require('../config')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

// GET ALL NEWS CREATED BY A SPECIFIC USER

router.get('/:id', (req, res) => {
  const idParams = req.params.id
  connection.query(
    'SELECT * FROM new WHERE user_id = ?',
    idParams,
    (err, results) => {
      if (err) {
        res
          .status(500)
          .send(
            "Erreur lors la récupération des news crées par l'utilisateur demandé"
          )
      } else {
        res.json(results)
      }
    }
  )
})


//GET ALL users

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM user'
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des utilisateurs')
    } else {
      res.json(results)
    }
  })
})

//Créer un user et hasher le mot de passe

router.post('/', (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10)

  const formData = {
    email: req.body.email,
    password: hash
    //rajouter tte les infos lors d'une création d'utilisateur (firstname, lastname etc.)
  }
  connection.query('INSERT INTO user SET ?', [formData], (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.sendStatus(200)
    }
  })
})

// Login d'un user. Vérfication si c'est le bon email et password puis creationd e token si email et password son validvalide

router.post('/login', (req, res) => {
  const formData = {
    email: req.body.email,
    password: req.body.password
  };
  connection.query('SELECT * FROM user WHERE email = ?', [formData.email], (err, user) => {
      if(err){
        res.status(500).send('Erreur mauvais utilisateur'); // pas d'utilisateur trouvé avec cet email
      }
      else{
        const isSamePass = bcrypt.compareSync(formData.password, user[0].password);
    
        if(!isSamePass){
          res.status(500).send('Mot de passe incorrect');
        }
        else{
          // 'secretKey' sera une variable d'environnement process.env.TOKEN_SECRET_KEY
          jwt.sign({ user }, 'secretKey', (err, token) => {
            if(err){
              res.status(500).send('Token non crée');
            }
            else{
              res.json({ token });
            }
          })
        }
      }
    });
   });

   //Acceder au profil d'un user (verifier token et connection)

   router.post('/profil', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretKey', (err, user) => {
        if (err) {
            res.status(500).send(err) 
        } else {
            res.json ({
                message: "super utilisateur",
                user
            })
        }
    })
});
//fonction pour vérifier le token
function verifyToken(req, res, next) {
    //recupération du header et de l'authorisation
    const BearerHeader = req.headers["authorization"];
    //si il y a une authorisation
    if(typeof BearerHeader !== "undefined") {
        //spliter l'array
        const bearer = BearerHeader.split(" ");
        // Récupération du token dans le header
        const bearerToken = bearer[1]
        //Définition du token sur le middlewear suivant
        req.token = bearerToken
        // suivant
        next()
    }
}
   



module.exports = router
