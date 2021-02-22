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
    const randomResults = jsonResults.sort(() => 0.5 - Math.random());
    const sliceResults = randomResults.slice(0,13);
    sliceResults.forEach(item => {
        //create list element to store title & race
        const listEl = document.createElement('li');
        //create h4 to hold title 
        const strainTitle = document.createElement('h4');
        strainTitle.textContent = item.name;
        //create p to hold race
        const race = document.createElement('p');
        race.textContent = item.race;
        document.querySelector('ul').appendChild(listEl);
        listEl.append(strainTitle, race);
    });
};

// // Make a second API call to get strain description
// flavourTown.getDescriptions = (description) => {
//     flavourTown.descriptionUrl = `https://strainapi.evanbusse.com/rpCJEMW/strains/search/name/${description}`;
//     fetch(flavourTown.descriptionUrl)
//         .then((response) => {
//             return response.json();
//         })
//             .then((jsonResponse) => {
//                 // console.log(jsonResponse);
//                 flavourTown.displayDescription(jsonResponse);
//             });
// };

// flavourTown.displayDescription = () => {
//     // Create an event listener on the h4 to watch for click
//     const selectedTitle = document.querySelectorAll('h4');
//     selectedTitle.addEventListener('click', function() {
//         // Capture the text of the selected h4
//         console.log('clicked!');
//     })
//     // Use that value to query the new API for the correct description
//     // flavourTown.getDescriptions();
// };

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

// Initialize function
flavourTown.init = () => {
    flavourTown.getSelectedValue();
    // flavourTown.displayDescription();
};

flavourTown.init();
