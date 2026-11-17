
const factButton = document.getElementById("factButton");
const factText = document.getElementById("fact");


// Get a new cat fact when the button is clicked
factButton.addEventListener("click", function() {

    factText.textContent = "Loading...";

    // Get data from the public API
    fetch("https://catfact.ninja/fact")

        // Convert the response into JSON
        .then(function(response) {
            return response.json();
        })

        // Display the cat fact on the webpage
        .then(function(data) {

            factText.textContent = data.fact;

        })

        // Handle errors
        .catch(function(error) {

            factText.textContent =
                "Something went wrong. Please try again.";

            console.log(error);

        });

});
