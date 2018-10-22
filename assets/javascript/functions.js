//the functions.js file will contain functions and variables for them to be called withing the firebase.js file
//create variables for jQuery selectors for convenience
var emailId = $("#inputEmail4");
var passwordId = $("#inputPassword4");
var zipCodeId = $("#inputZip");

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
    var passRequire = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
    if ((!input) || (input.value.match(passRequire))) {
        return false;
    }
    return true;
}

//fucntion to validate zipcode input, per the usps the lowest number a zipcoe is is 00501 and the highest is 99950 https://facts.usps.com/size-and-scope/
function validateZipCodeInput(input) {
    var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(input);
    if (isValid){
    //this was a function made by usps, need to edit to not be an alert 
        alert('Valid ZipCode');
        return true,
   } else {
        alert('Invalid ZipCode');
        return false;
    }
    //get the email and password submitted by user
    function getUserRegisterInput() {
        var userEmail = emailId.val().trim();
        var userPassword = passwordId.val().trim();
        //Even though it isn't required for account creation, we collected zip code as we ill need it later anyways.
        var userZipCode = zipCodeId.val().trim();
        if (validatePasswordInput(userPassword) && validateZipCodeInput) {
            var newUser = {
                userEmail,
                userPassword,
                userZipCode
            };
            console.log(newUser);
            return newUser;
            
        }
        return undefined;
    }

    //function to clear input fields
    function resetUserRegisterInput() {
        emailId.val('');
        passwordId.val('');
    }
}