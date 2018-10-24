

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
        var url = 'https://api.petfinder.com/pet.getRandom';

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
                newName.attr("href", "https://www.petfinder.com/petdetail/" + id);
                newName.attr("target", "_blank");

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
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.shop.com/AffiliatePublisherNetwork/v1/products?publisherID=erithr&locale=en_US&perPage=10&term=dogfood&apikey=l7xxc75c28da1f164896adcd222d338aa71c"

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data from the AJAX request comes backe
        .then(function (response) {
            console.log(response);
            // Saving the image_original_url property
            var imageUrl1 = response.products[1].imageUrl;
            var itemURL1 = response.products[1].referralUrl;
            var price1 = response.products[1].maximumPrice;
            var brand1 = response.products[1].brand;
            //second image url properties
            var imageUrl2 = response.products[5].imageUrl;
            var itemURL2 = response.products[5].referralUrl;
            var price2 = response.products[5].maximumPrice;
            var brand2 = response.products[5].brand;
            //third image url properties
            var imageUrl3 = response.products[4].imageUrl;
            var itemURL3 = response.products[4].referralUrl;
            var price3 = response.products[4].maximumPrice;
            var brand3 = response.products[4].brand;
            console.log(price1);
            console.log(itemURL1);
            // Creating and storing an image tag
            var dogImage1 = $("<img>");
            var priceTag1 = $("<h1>");
            //second item tags
            var dogImage2 = $("<img>");
            var priceTag2 = $("<h1>");
            //third item tags
            var dogImage3 = $("<img>");
            var priceTag3 = $("<h1>");
            // Setting the dogImage src attribute to imageUrl
            dogImage1.attr("src", imageUrl1);
            dogImage1.attr("alt", "dog image");
            priceTag1.attr("id", "price");
            priceTag1.attr("href", itemURL1);
            //repeat dogImage for second image
            dogImage2.attr("src", imageUrl2);
            dogImage2.attr("alt", "dog image");
            priceTag2.attr("id", "price");
            priceTag2.attr("href", itemURL2);
            //repear dogImage for third image
            dogImage3.attr("src", imageUrl3);
            dogImage3.attr("alt", "dog image");
            priceTag3.attr("id", "price");
            priceTag3.attr("href", itemURL3);

            // Prepending the dogImage to the images div
            $("#test1").append(price1);
            $("#test1").append(priceTag1);
            $("#test2").append(brand1);
            $("#test0").append(dogImage1);
            $("#test3").append("<a href=" + itemURL1 + " target='_blank'>Buy HERE!</a>")
            //2nd row of food 
            $("#price2").append(price2);
            $("#price2").append(priceTag2);
            $("#brand2").append(brand2);
            $("#image2").append(dogImage2);
            $("#link2").append("<a href=" + itemURL2 + " target='_blank'>Buy HERE!</a>")
            //3rd row of food
            $("#price3").append(price3);
            $("#price3").append(priceTag3);
            $("#brand3").append(brand3);
            $("#image3").append(dogImage3);
            $("#link3").append("<a href=" + itemURL3 + " target='_blank'>Buy HERE!</a>")
        });
});


    // var result = str.link(itemURL1);
    // document.getElementById("test3").innerHTML = result;