import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Style/Buytickets.css"

class Buytickets extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            adultTickets : 2,
            kidsTickets: 1,
            adultPrice:15,
            kidsPrice:10,
            adultTotal: 30,
            kidsTotal:10,
            subTotal: 0
        }
        this.addCounterAdult = this.addCounterAdult.bind(this);
        this.removeCounterAdult = this.removeCounterAdult.bind(this);
        this.addCounterKids= this.addCounterKids.bind(this);
        this.removeCounterKids = this.removeCounterKids.bind(this);
    }


    addCounterAdult() {
        this.setState({
            adultTickets: this.state.adultTickets + 1,
            adultTotal: this.state.adultTickets * this.state.adultPrice + 15,
            subTotal: this.state.adultTotal + this.state.kidsTotam,
        });
      }

    removeCounterAdult() {
        this.setState({adultTickets: 
            this.state.adultTickets - 1,
            adultTotal: this.state.adultTickets * this.state.adultPrice - 15,
        });
        
      }

    addCounterKids() {
        this.setState({kidsTickets: 
            this.state.kidsTickets + 1,
            kidsTotal: this.state.kidsTickets * this.state.kidsPrice + 10,
        });
      }

    removeCounterKids() {
        this.setState({kidsTickets:
             this.state.kidsTickets - 1,
             kidsTotal: this.state.kidsTickets * this.state.kidsPrice - 10,
            });
      }

  

    render() {
        return (
            <div className="tiltePageBuyTicket">
                <h2 className="titleBuy" >Buy Tickets</h2>
            <div className="globalContainer">
            <div className="buyContainer">
                <div className='productSection'>
                    <div className="labelContainer">
                        <div className="labelProduit">
                            Produit
                        </div>
                        <div className="label">
                            Price
                        </div>
                        <div className="label">
                            Quantity
                        </div>
                        <div className="label">
                            Total
                        </div>
                    </div>
                <div className="adultsTiketsContainer">
                    <div className="valueTicket">
                        <img className="ticketPicture" src="https://zupimages.net/up/20/30/q78i.png" alt="" />
                    </div>
                    <div className="valuePrice">
                            {this.state.adultPrice} €
                    </div>
                    <div className="valueQty">
                        <button onClick={this.removeCounterAdult} className="removeTickets">
                            -
                        </button>
                        <p className="adultQty">{this.state.adultTickets}</p>
                        <button  onClick={this.addCounterAdult} className="addTickets">
                            +
                        </button>
                    </div>
                    <div className="valueTotal">
                            {this.state.adultTotal} €
                    </div>
                </div>
                <br />
                <br />
                <div className="kidsTiketsContainer">
                    <div className="valueTicket">
                        <img className="ticketPicture" src="https://zupimages.net/up/20/30/tpo1.png" alt="" />
                    </div>
                    <div className="valuePrice">
                        {this.state.kidsPrice}€
                    </div>
                    <div className="valueQty">
                        <button onClick={this.removeCounterKids} className="removeTickets">
                            -
                        </button>
                        <p className="adultQty">{this.state.kidsTickets}</p>
                        <button onClick={this.addCounterKids} className="addTickets">
                            +
                        </button>
                    </div>
                    <div className="valueTotal">
                        {this.state.kidsTotal} €
                    </div>
                </div>
                

                </div>
                <div className='subtotalSection'>
                    <p className="subTitle">Subtotal:</p>
                    <p className='subTotalEuros'>{this.state.kidsTotal + this.state.adultTotal} €</p> 
                    <button className="checkoutCTA">Checkout</button>           
                </div>
            </div>
            <br />
            </div>
            </div>
        )
    }
}
  
  export default Buytickets;