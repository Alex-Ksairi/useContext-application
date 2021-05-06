import React from "react";
import { database } from "../data/database";
import { Context } from "../store/Context.jsx";

let Provider = (props) => {
    // useState
    let [email, setEmail] = React.useState();
    let [password, setPassword] = React.useState();
    let [isValidEmail, setIsValidEmail] = React.useState();
    let [isValidPassword, setIsValidPassword] = React.useState();

    // validator
    let validator = (params) => {
        let isValid = false;

        let index = database.findIndex((user) => user.email === email);
        // console.log("user ==> ", index);

        database.forEach((user, i) => {
            if (index === i) {
                if (params === 'email' && user.email === email) {
                    isValid = true;
                    setIsValidEmail(true);
                }
                if (params === 'password' && user.password === password) {
                    isValid = true;
                    setIsValidPassword(true);
                }
            }
        });
        return isValid;
    };

    // onEmailHandler
    let onEmailHandler = (event) => {
        let value = event.target.value.trim().toLowerCase();
        setEmail(value);
    }

    // onCheckEmailHandler
    let onCheckEmailHandler = () => {
        let isValid = validator('email');
        console.log('onCheckEmailHandler -->', isValid);
        if (isValid) return;
        setIsValidEmail(isValid);
    };

    // onPasswordHandler
    let onPasswordHandler = (e) => {
        let value = e.target.value.trim();
        setPassword(value);
    }

    // onPasswordCheckHandler
    let onPasswordCheckHandler = () => {
        let isValid = validator('password');
        console.log('onPasswordCheckHandler -->', isValid);
        if (isValid) return;
        setIsValidPassword(isValid);
    }

    // sign in function
    let onSignInHandler = () => {
        if (!isValidEmail) {
            alert('Check your input. Either the email or password is not valid');
        }
        if (!isValidPassword) {
            alert('Check your input. Either the email or password is not valid');
        }
        else {
            localStorage.setItem('token', true);
            window.location.reload();
        }
    }

    return (
        <Context.Provider value={{ onSignInHandler, onEmailHandler, onCheckEmailHandler, onPasswordHandler, onPasswordCheckHandler }}>
            { props.children }
        </Context.Provider>
    )
};

export { Context, Provider };