//the functions.js file will contain functions and variables for them to be called withing the firebase.js file
//create variables for jQuery selectors for convenience
var emailId = $("#emailId");
var passwordId = $("#passwordId");
var signInButton = $("#signInButton");
var createAccountButton = $("#createAccountButton");
var hide = $("#hide");
var userInterface = $("#userInterface");
var signOutButton = $("#signOutButton");
var pTag = $("<p>");
// Password requirement is 8 characters minimum, 12 max. 1 character must be a capital letter,1 a lower case numner, and 1 has to be a number
function validatePasswordInput(input) {
    var passRequire = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/.test(input);
    if (passRequire) {
        return true;
    }

    return false;
}

//get the email and password submitted by user
function getUserInput() {
    var email = emailId.val();
    var password = passwordId.val();
    if (validatePasswordInput(password)) {
        var user = {
            "email": email,
            "password": password
        };
        console.log(user);
        return user;

    }
    return undefined;

}


//function to clear registration input fields
function resetUserInput() {
    emailId.val('');
    passwordId.val('');
}





