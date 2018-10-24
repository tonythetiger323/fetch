

//keys for the APIS
//Pet Finder API: 
// API Key
// 977bb0c4a15623aed66ba3e238ac26bc

// API Secret
// b03023686e2d4d26134af4694ac41b01

// API Status
// Active

//dog logic Below currently it is set up to display 



var apiKey = '977bb0c4a15623aed66ba3e238ac26bc'; // assign our key to a variable, easier to read

// the next line and function set up the button in our html to be clickable and reactive 
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
    document.getElementById('zipCodeButton').addEventListener('click', function (event) {
        event.preventDefault();
        var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
        var url = 'http://api.petfinder.com/pet.getRandom';

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
                console.log(dogName);
                var newDiv = $("<div>");
                var newName = $("<a>");
                newName.text(dogName);
                newName.attr("id", "name");
                newName.attr("href", "https://www.petfinder.com/petdetail/" + id)

                var newImg = $("<img>");
                newImg.attr("src", img);
                newImg.attr("alt", "dog image");

                $("#dogImage").append(newDiv);
                newDiv.append(newImg);
                newDiv.append(newName);
            }
        });
    });

}

//Dog Food Logic below
// Event listener for our cat-button
$("#zipCodeButton").on("click", function () {

    // Storing our Shopt.com API URL for a random dog food image
    var food = "dog food";
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.shop.com/AffiliatePublisherNetwork/v1/products?publisherID=erithr&locale=en_US&perPage=4&term=dogfood&apikey=l7xxc75c28da1f164896adcd222d338aa71c"

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data from the AJAX request comes backe
        .then(function (response) {
            console.log(response);
            // Saving the image_original_url property
            var imageUrl = response.products[2].imageUrl;
            var price = response.products[2].maximumPrice;
            console.log(price);
            // Creating and storing an image tag
            var dogImage = $("<img>");
            var priceTag = $("<h1>")
            // Setting the dogImage src attribute to imageUrl
            dogImage.attr("src", imageUrl);
            dogImage.attr("alt", "dog image");
            priceTag.attr("id", "price")
            // Prepending the dogImage to the images div
            $("td").prepend(priceTag);
            $("td").prepend(price);
            $("td").prepend(dogImage);
        });
});

