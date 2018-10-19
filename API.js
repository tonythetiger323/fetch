var smallDog = [

]

// var queryURL = "http://api.petfinder.com/my.method?key=977bb0c4a15623aed66ba3e238ac26bc&arg1=foo";


$.getJSON('http://api.petfinder.com/pet.getRandom?format=json&key=977bb0c4a15623aed66ba3e238ac26bc&callback=?')
    .then(function (petApiData) {
        alert('Data retrieved!');
        console.log(petApiData);
    })
    .catch(function (err) {
        alert('Error retrieving data!');
        console.log(err);
    });
function petApiData(data) {
    console.log(data);
}
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);
// });

//keys for the APIS
//Pet Finder API: 
// API Key
// 977bb0c4a15623aed66ba3e238ac26bc

// API Secret
// b03023686e2d4d26134af4694ac41b01

// API Status
// Active