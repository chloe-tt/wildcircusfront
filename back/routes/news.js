const express = require("express");
const router = express.Router();
const connection = require("../config");

//GET ALL NEWS

router.get("/", (req, res) => {
    const sql = "SELECT * FROM new";
    connection.query(sql, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des news");
      } else {
        res.json(results);
      }
    });
  });


  //CREATE NEWS

  router.post('/', (req,res) => {
    const formBody = req.body;
    connection.query('INSERT INTO new SET ?', [formBody], (err, results) => {
      if(err) {
        console.log(err);
        res.status(500).send("Erreur lors de la création de la news");
      } else {
          res.sendStatus(200);
      }
    });
  }); 


  //DELETE NEWS

  router.delete('/:id', (req, res) => {
    const idNew= req.params.id
    connection.query('DELETE FROM new WHERE id = ?', [idNew], err => {
      if (err) {
        res.status(500).send('Erreur lors de la suppression de la news');
      } else {
        res.sendStatus(200);
      }
    });
  });


  //MODIFY A NEWS

  router.put('/:id', (req, res) => {
    const idNew= req.params.id
    const formData= req.body
    connection.query('UPDATE new SET ? WHERE id = ?', [formData, idNew], err => {
      if (err) {
        res.status(500).send("Erreur lors de la modification de la news")
      }
      else{
        res.sendStatus(200)
      }
    });
  });

  //GET A NEWS DEPENDING ON ITS ID

  router.get('/:id', (req, res) => {
    const idNew = req.params.id
    connection.query("SELECT * FROM new WHERE id = ?", [idNew], (err, results) => {
      if (err) {
        console.log(err);
        res.status(404).send("Cette news n'existe pas");
      } else {
        res.status(200).json(results);
      }
    })
});





module.exports = router;
