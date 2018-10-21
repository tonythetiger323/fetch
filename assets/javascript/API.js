

//keys for the APIS
//Pet Finder API: 
// API Key
// 977bb0c4a15623aed66ba3e238ac26bc

// API Secret
// b03023686e2d4d26134af4694ac41b01

// API Status
// Active

var apiKey = '977bb0c4a15623aed66ba3e238ac26bc'; // assign our key to a variable, easier to read

// the next line and function set up the button in our html to be clickable and reactive 
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
    document.getElementById('submitZip').addEventListener('click', function (event) {
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