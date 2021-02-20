// A dropdown menu that allows the user to select a flavor of cannabis which has been pulled from the API
// Listen for the user's click on the 'submit' button that will confirm their selection
// Capture the value of the user's selection & store the user's selection in a variable
// On submission, make an AJAX call to retrieve cannabis strains that match the user's selection 
// Loop through the strains returned by the API 
// Limit the return to maximum 5 strains
// Display the recommended strain results from the API on the page by manipulating the DOM - include the strain name, description, and a visual aspect (picture or GIF)
// Listen for a 'click' event on a reset button

// Create app object
const flavourTown = {};

// Save API info
flavourTown.apiUrl = 'https://strainapi.evanbusse.com/rpCJEMW/strains/search/flavor/FLAVOR';

// Create method to request info from API
flavourTown.getFlavours = () => {
    fetch(flavourTown.apiUrl)
        .then((response) => {
            // Parse the response into JSON, return it so it can be used in the next function
            return response.json();
        })
            // First then returns a Promise, parse the JSON response and log readable data
            .then((jsonResponse) => {
                console.log(jsonResponse);
            });
};

// Call the getFlavours method
flavourTown.getFlavours();