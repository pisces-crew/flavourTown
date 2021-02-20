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
flavourTown.apiUrl = `https://strainapi.evanbusse.com/rpCJEMW/strains/search/flavor/sweet`;

// Create method to request info from API
flavourTown.getStrains = () => {
    fetch(flavourTown.apiUrl)
        .then((response) => {
            return response.json();
        })
            .then((jsonResponse) => {
                console.log(jsonResponse);
            });
};

// Create method to loop through strains and filter based on flavour property
flavourTown.displayStrains = () => {
}

// Get the user choice from the dropdown menu
flavourTown.getSelectedValue = () => {
    const form = document.querySelector('form');
    const selection = document.getElementById('flavours');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        console.log(selection.value);
        return selection.value;
    });
};

// const matchingFlavours = dataFromApi.filter((result) => {
//     return result.flavors === selection.value;

flavourTown.init = () => {
    flavourTown.getStrains();
    flavourTown.getSelectedValue();
};

flavourTown.init();
