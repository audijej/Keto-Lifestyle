import { Link, useParams } from "react-router-dom";
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




    class ContactForm extends Component {
        constructor(props) {
          super(props);
          this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
          };
        }
      
        handleChange = (e) => {
          e.preventDefault();
          const { name, value } = e.target;
          this.setState({ [name]: value });
        };
          
        render() {

    return (
        
        <Container>
        <div className='ContactForm'>
          <form id='contact-form' noValidate>
            <div className='row'>
              <div className='col-6'>
                <input
                  type='text'
                  name='name'
                  value={this.state.name}
                  className='form-control formInput'
                  onChange={this.handleChange}
                  placeholder='Name'
                  noValidate
                ></input>
              </div>
  
              <div className='col-6'>
                <input
                  type='email'
                  name='email'
                  value={this.state.email}
                  className='form-control formInput'
                  onChange={this.handleChange}
                  placeholder='Email'
                  noValidate
                ></input>
              </div>
            </div>
  
            <div className='row'>
              <div className='col-6'>
                <input
                  type='subject'
                  name='subject'
                  value={this.state.subject}
                  className='form-control formInput'
                  onChange={this.handleChange}
                  placeholder='Subject'
                  noValidate
                ></input>
              </div>
  
              <div className='col-6'>
                <textarea
                  rows='5'
                  name='message'
                  value={this.state.message}
                  className='form-control formInput'
                  onChange={this.handleChange}
                  placeholder='Message'
                  noValidate
                ></textarea>
              </div>
            </div>
            <button className='submit-btn' type='submit'>
              Submit
            </button>
          </form>
        </div>
        </Container>
      );
    }
}


export default ContactForm