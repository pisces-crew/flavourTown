// A dropdown menu that allows the user to select a flavor of cannabis which has been pulled from the API
// Listen for the user's click on the 'submit' button that will confirm their selection
// Capture the value of the user's selection & store the user's selection in a variable
// On submission, make an AJAX call to retrieve cannabis strains that match the user's selection 
// Loop through the strains returned by the API 
// Limit the return to maximum 5 strains
// Display the recommended strain results from the API on the page by manipulating the DOM - include the strain name, description, and a visual aspect (picture or GIF)
// Listen for a 'click' event on a reset button

// App object
const flavourTown = {};

// API call
flavourTown.getStrains = (flavour) => {
    flavourTown.apiUrl = `https://strainapi.evanbusse.com/rpCJEMW/strains/search/flavor/${flavour}`;
    fetch(flavourTown.apiUrl)
        .then((response) => {
            return response.json();
        })
            .then((jsonResponse) => {
                flavourTown.displayStrains(jsonResponse);
            });
};

// Method to loop through strains and display on the page
flavourTown.displayStrains = (jsonResults) => {
    console.log(jsonResults.length);
    jsonResults.forEach(item => {
        console.log(`${item.name}, ${item.race}`);
        // Get title and race and display on page
        // Display hard-coded GIF relating to flavour
        // Filter results down to 6-12 options
    });
};

// Get the user choice from the dropdown menu
flavourTown.getSelectedValue = () => {
    const form = document.querySelector('form');
    const selection = document.getElementById('flavours');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        flavourTown.getStrains(selection.value);
    });
};

// Inti function
flavourTown.init = () => {
    flavourTown.getSelectedValue();
};

flavourTown.init();
