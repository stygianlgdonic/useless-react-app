import React, {useState} from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import './sign.css'
import { useNavigate } from "react-router-dom";
// import "./Login.css";

export default function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    function validateForm() {

        return email.length > 0 && password.length > 0;

    }
    const navigate= useNavigate()
    function handleSubmit(event) {

        event.preventDefault();

    }
    const handleClick=()=>{
        navigate('/items')
    }
    return (
        <div className="Login">
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="text" placeholder="Enter Email" name="email" required/>

                <label htmlFor="psw">
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <label htmlFor="psw-repeat">
                    <b>Repeat Password</b>
                </label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

                <label>
                    <input type="checkbox" checked="checked" name="remember" />
                    Remember me
                </label>

                <p>By creating an account you agree to our
                    <a href="#">Terms & Privacy</a>.</p>

                <div className="clearfix">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button onClick={handleClick} className="signupbtn">Sign Up</button>
                </div>
            </div>
        </div>

    );

};
