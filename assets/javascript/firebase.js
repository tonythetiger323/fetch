// Initialize Firebase
var config = {
    apiKey: "AIzaSyA5X6ZpK5EnX9kFoHiRJuToB7u7blQDMq4",
    authDomain: "groupproject-fetch.firebaseapp.com",
    databaseURL: "https://groupproject-fetch.firebaseio.com",
    projectId: "groupproject-fetch",
    storageBucket: "groupproject-fetch.appspot.com",
    messagingSenderId: "823895897115"
};
firebase.initializeApp(config);

var database = firebase.database();

//create a variable referenicing firebase auth reference for convenience
var fireAuth = firebase.auth();

//function for account creation
firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function (error) {

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

//function for login
fireAuth.signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

//function for logout
//important FYI, per firebase documenation the user account doens't actualy get pushed to the database until they sign out for the first time
fireAuth.signOut().then(function () {
    // Sign-out successful.
}).catch(function (error) {
    // An error happened.
});