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

//registration event when user clicks register button
createAccountButton.on("click", function (event) {
    event.preventDefault();
    var user = getUserInput();
    console.log(user);
    if (user) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
        resetUserInput();
    }
    event.stopPropagation();
});

//sign in event
signInButton.on("click", function (event) {
    event.preventDefault();
    var user = getUserInput();
    console.log(user);
    if (user) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
    console.log("You are signed in");
    resetUserInput();
    var currentUser = fireAuth.currentUser;
    console.log(currentUser);

    var signedInAs = $("<p>").text("You are currently signed in as " + currentUser.email);

    userInterface.prepend(signedInAs);
});



