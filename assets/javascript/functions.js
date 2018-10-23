//the functions.js file will contain functions and variables for them to be called withing the firebase.js file
//create variables for jQuery selectors for convenience
var emailId = $("#inputEmail4");
var passwordId = $("#inputPassword4");
var registerButton = $("#register-button");
var signInEmail = $("#signInEmail");
var signInPassword = $("#signInPassword");
var signInButton = $("#signInButton");
//validate password before submiting to the database
//While the browser handles email validation still want javascript validation so the script will dynamicaly dispaly or remove error messages
emailId.on("input", function (event) {
    // with every character entry script checks to see if email is not yet valid or it is
    if (email.validity.valid) {
        error.innerHTML = '';
        error.emailId = 'error';
    }
}, false);

// Password requirement is 8 characters minimum, 12 max. 1 character must be a capital letter,1 a lower case numner, and 1 has to be a number
function validatePasswordInput(input) {
    var passRequire = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/.test(input);
    if (passRequire) {
        return true;
    }
    return false;
}

//get the email and password submitted by user for registration
function getUserRegisterInput() {
    var userEmail = emailId.val().trim();
    var userPassword = passwordId.val().trim();
    if (validatePasswordInput(userPassword)) {
        var newUser = {
            "userEmail": userEmail,
            "userPassword": userPassword
        };
        console.log(newUser);
        return newUser;

    }
    return undefined;

}

//function to clear registration input fields
function resetUserRegisterInput() {
    emailId.val('');
    passwordId.val('');
}

//function to get sign in input
function getSignInInput() {
    var email = signInEmail.val().trim();
    var password = signInPassword.val().trim();
    var signInUser = {
        "email": email,
        "password": password
    };
    console.log(signInUser);
    return signInUser;

}

//function to reset sign in input
function resetSignInInput() {
    signInEmail.val('');
    signInPassword.val('');

}



