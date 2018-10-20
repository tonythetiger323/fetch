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

//create a variable referenicing firebase auth reference for convienence
var fireAuth = firebase.auth();
//function for account creation
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});
