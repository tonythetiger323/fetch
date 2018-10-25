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
        fireAuth.createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
        resetUserInput();

    }
    var currentUser = fireAuth.currentUser;
    console.log(currentUser);

    var signedInAs = pTag.html('You are currently signed in as ' + currentUser.email + ' ' + '<button type="submit" class="btn btn-danger text-secondary" id="signOutButton">Sign Out</button>');

    userInterface.append(signedInAs);
    hide.hide();
    event.stopPropagation();
});

//sign in event
signInButton.on("click", function (event) {
    event.preventDefault();
    var user = getUserInput();
    console.log(user);
    if (user) {
        fireAuth.signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
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

    var signedInAs = pTag.html('You are currently signed in as ' + currentUser.email + ' ' + '<button type="submit" class="btn btn-danger text-secondary" id="signOutButton">Sign Out</button>');

    userInterface.append(signedInAs);
    hide.hide();
    event.stopPropagation();
});

//sign out event
$("#userInterface").on("click", signOutButton, function (event) {
    console.log("button clicked");
    event.preventDefault();
    fireAuth.signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
    console.log("You have been signed out");
    hide.show();
    userInterface.html("");
});


// tried to get this to work, its working in that the button runs and captures something but i dont think im pulling the div data. Currently im trying to pull everything that is in the #dogImage div to push into firebase. but im not able to capture that data. not sure if its because i have the content being created dynamically so there is nothing to pull from. Or if having our functions sepereated is causing problems. 
$(document).ready(function () {
    $("#zipCodeButton").on("click", function () {
        var dogsave = $("#dogDiv").val();
        console.log(dogsave);
        console.log();
        database.ref().push("#dogImage");
    })
})

