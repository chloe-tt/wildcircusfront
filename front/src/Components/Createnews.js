import React, { Component } from 'react';
import axios from 'axios';
import "react-responsive-modal/styles.css";
import "./Style/Createnews.css"
import { Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


class Createnews extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        text: '',
        picture: '',
        date: '',
        user_name: '',
        user_id: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.onChange = this.onChange.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      axios({
        method: 'POST',
        url: 'http://localhost:3000/api/news',
        data: this.state,
      }).then((response) => {
        if (response.data.status === 'success') {
          return response.data.status
          this.resetForm();
        } else if (response.data.status === 'fail') {
          return response.data.status;
        }
        
      }
     
      );
     
      
    }
  
    resetForm() {
      this.setState({
        title: '',
        text: '',
        picture: '',
        date: '',
        user_name: '',
        user_id: '',
      });
    }
  
    handleChange(value) {
      this.setState((prevState) => ({
        ...prevState,
        value,
      }));
    }
  
    onChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
  
  
    render() {
      
      const { make1 } = this.state;
      return (
        <div className="AdminPageContainer">
          
          
          <div className="TitleCreateUser">
            <h2 className="titleCreateUserForm">Create News</h2>
          </div>
         <div className="containerForm">
          <div className="CreateUserFormContainer">
            <form
              id="user-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            
            >
              <br />
              <label htmlFor="Title">Title</label>
              <div className="TitleField">
                
                <input className="style"
                  type="text"
                  required
                  name="title"
                  id="Title"
                  placeholder="Check out our new show..."
                  value={this.state.title}
                  onChange={this.onChange.bind(this)}
                />
                 <br />
                <br />
              </div>
              <label htmlFor="Text">Text</label>
              <div className="TextField">
                <input className="style"
                  type="text"
                  required
                  name="text"
                  id="Text"
                  placeholder="We are proud to annouce our..."
                  value={this.state.text}
                  onChange={this.onChange.bind(this)}
                />
                <br />
                <br />
              </div>
              <label htmlFor="Picture">Picture</label>
              <div className="PictureField">
                <input className="style"
                  type="text"
                  required
                  name="picture"
                  id="Picture"
                  placeholder="https://www.zupimages/dssd.com"
                  value={this.state.picture}
                  onChange={this.onChange.bind(this)}
                />
                
                <br />
                <br />
              </div>
              <label htmlFor="Date">Date</label>
              <div className="DateField">
                <input className="style"
                  type="text"
                  required
                  name="date"
                  id="Date"
                  placeholder="DD/MM/YYYY"
                  value={this.state.date}
                  onChange={this.onChange.bind(this)}
                />
                <br />
                <br />
              </div>
              <label htmlFor="Created by">Created by</label>
              <div className="CreatedByField">
                <input className="style"
                  type="text"
                  required
                  name="user_name"
                  id="User_name"
                  placeholder="Chloe"
                  value={this.state.user_name}
                  onChange={this.onChange.bind(this)}
                />
                <br />
                <br />
              </div>
              <label htmlFor="UserId">User Id</label>
              <div className="UserId">
                <input className="style"
                  type="text"
                  required
                  name="user_id"
                  id="User_id"
                  placeholder=""
                  value={this.state.user_id}
                  onChange={this.onChange.bind(this)}
                />
                 
                <br />
                <br />
              </div>
              
              
              <div className="submitCTAContainer" >
              <button className="submitCTA" type="submit"  className="btn-primary">
                Publish
              </button>
              </div>
              <br/>
            </form>
          </div>
          </div>
          <NavLink className="backtoManageCTA" to="/manage-news">Back to manage news </NavLink>
          <br/>
          <br />

          
        </div>
      );
    }
  }
  
  export default Createnews;