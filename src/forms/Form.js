import React, { Component } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

class Form extends Component {
    constructor () {
        super();        
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            comments: '',
            sent: false
        };
        this.handleChange = this.handleChange.bind(this);  
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit (e) {
        e.preventDefault();

        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            comments: this.state.comments
        }

        axios.post('https://nodejs-express-git-zeit.emurray1.now.sh/', data)
        .then ( res => {
            alert('A name was submitted: ' + this.state.firstName);
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
            console.log('Message not sent')
        })
    }

    resetForm = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            comments: ''
        })
    }

    render() {
        return (
            <form noValidate>
                <TextField 
                    className="w-100"
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                /> 
                <TextField 
                    className="w-100"
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                /> 
                <TextField 
                    className="w-100"
                    id="email"
                    label="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField 
                    className="w-100"
                    id="comments"
                    label="Comments"
                    name="comments"
                    multiline
                    rows="3"
                    value={this.state.comments}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <Button type="submit" variant="outlined" size="large" className="text-primary float-right">
                    Submit
                </Button>
            </form>
        )
    }    
}

export default Form;