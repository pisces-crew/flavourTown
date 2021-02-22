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

    document.querySelector('ul').innerHTML = '';

    const randomResults = jsonResults.sort((a,b) => 0.5 - Math.random());

    const sliceResults = randomResults.slice(0,13);

    sliceResults.forEach(item => {
        // console.log(`${item.name}, ${item.race}`);
        //create list element to store title & race
        const listEl = document.createElement('li');

        //create h4 to hold title 
        const strainTitle = document.createElement('h4');
        strainTitle.textContent = item.name

        //create p to hold race
        const race = document.createElement('p');
        race.textContent = item.race;

        document.querySelector('ul').appendChild(listEl);
        listEl.append(strainTitle, race);

    });
};

// Get the user choice from the dropdown menu
flavourTown.getSelectedValue = () => {
    const form = document.querySelector('form');
    const selection = document.getElementById('flavours');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        flavourTown.getStrains(selection.value);
        if (selection.value === 'sweet'){
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/sPj7I5949U2oo/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>`;
        }else if(selection.value === 'earthy'){
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/RrU8f9lImvJja/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        }else if(selection.value === 'vanilla'){
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/48QFl1W2eOzi8/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        }else if(selection.value === 'citrus'){
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/zfnExdbtdTMmQ/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        }else if(selection.value === 'nutty'){
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/zV9xqOc03a7Ju/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        }else if(selection.value === 'coffee'){
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/xULW8tFJvm5JJYnZkc/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        }else if(selection.value === 'woody'){
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/l0HUbCY5FyDDTCire/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        }else if(selection.value === 'flowery'){
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/1n7cAiGBT299fcRg1r/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        }
    });
};

// Inti function
flavourTown.init = () => {
    flavourTown.getSelectedValue();
};

flavourTown.init();
