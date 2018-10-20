

//keys for the APIS
//Pet Finder API: 
// API Key
// 977bb0c4a15623aed66ba3e238ac26bc

// API Secret
// b03023686e2d4d26134af4694ac41b01

// API Status
// Active

//Food API Key: l7xxc75c28da1f164896adcd222d338aa71c


var apiKey = '977bb0c4a15623aed66ba3e238ac26bc'; // assign our key to a variable, easier to read
var foodApiKey = "l7xxc75c28da1f164896adcd222d338aa71c"
// the next line and function set up the button in our html to be clickable and reactive 
$("button").on("click", bindButtons());

function bindButtons() {
    document.getElementById('submitZip').addEventListener('click', function (event) {
        event.preventDefault();
        var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
        var url = 'http://api.petfinder.com/pet.getRandom';
        var foodURL = 'https://api.shop.com:8443/AffiliatePublisherNetwork/v1/products?publisherID=TEST&locale=en_US&perPage=10&term=dog food'

        // Within $.ajax{...} is where we fill out our query 

        $.ajax({
            url: url,
            jsonp: "callback",
            dataType: "jsonp",
            data: {
                key: apiKey,
                animal: 'dog',
                'location': zip,
                output: 'basic',
                format: 'json'
            },
            // Here is where we handle the response we got back from Petfinder
            success: function (response) {
                console.log(response); // debugging
                var dogName = response.petfinder.pet.name.$t;
                var img = response.petfinder.pet.media.photos.photo[0].$t;
                var id = response.petfinder.pet.id.$t;

                var newName = document.createElement('a');
                var newDiv = document.createElement('div');
                newName.textContent = dogName;
                newName.href = 'https://www.petfinder.com/petdetail/' + id;

                var newImg = document.createElement('img');
                newImg.src = img;

                var list = document.createElement("div");
                list.setAttribute("id", "List");
                document.body.appendChild(list);

                newDiv.appendChild(newName);
                list.appendChild(newDiv);
                list.appendChild(newImg);
            }
        });


    });

}

var foodUrl = 'https://api.shop.com:8443/AffiliatePublisherNetwork/v1/products';
var queryParams = '?' + encodeURIComponent('publisherID') + '=' + encodeURIComponent('TEST') + '&' + encodeURIComponent('locale') + '=' + encodeURIComponent('en_US') + '&' + encodeURIComponent('perPage') + '=' + encodeURIComponent('15') + '&' + encodeURIComponent('apikey') + '=' + encodeURIComponent('l7xxc75c28da1f164896adcd222d338aa71c');

var queryURL = foodUrl + queryParams;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    console.log(response);
});

$("#test").on("click", function () {

    // Storing our giphy API URL for a random cat image

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data from the AJAX request comes back
        .then(function (response) {

            console.log(response);
        });
});



// GET https://api.shop.com:8443/AffiliatePublisherNetwork/v1/products?publisherID=TEST&locale=en_US&perPage=10&term=dog food
