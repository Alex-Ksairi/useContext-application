import React from "react";

export let Context = React.createContext({ 
    email: '',
    isValidEmail: false,
    password: '',
    isValidPassword: false,

    // onEmailHandler
    onEmailHandler: () => {},

    // onCheckEmailHandler
    onCheckEmailHandler: () => {},

    // onPasswordHandler
    onPasswordHandler: () => {},

    // onPasswordCheckHandler
    onPasswordCheckHandler: () => {},

    // sign in function
    onSignInHandler: () => {},
});