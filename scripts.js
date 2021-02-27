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
            }).catch (() => {
                alert('Oops, we must be out smoking. Come back later!');
            })
};

// Method to loop through strains and display on the page
flavourTown.displayStrains = (jsonResults) => {
  document.querySelector('.strainGrid').innerHTML = '';
  document.querySelector('.descHolder').innerHTML = '';
  const randomResults = jsonResults.sort(() => 0.5 - Math.random());
  const sliceResults = randomResults.slice(0,15);
  sliceResults.forEach(item => {
      // Create button element to store title & race
      const btnEl = document.createElement('button');
      btnEl.classList.add('btn');
      // Create h4 to hold title 
      const strainTitle = document.createElement('h4');
      strainTitle.textContent = item.name;
      // Create p to hold race
      const race = document.createElement('p');
      race.textContent = item.race;
      document.querySelector('.strainGrid').appendChild(btnEl);
      btnEl.append(strainTitle, race);
  });
  document.querySelector('.instructions').innerHTML = '';
  const clickInstructions = document.createElement('h3');
  clickInstructions.textContent = 'Click the strain for more info';
  document.querySelector('.instructions').appendChild(clickInstructions);
  flavourTown.activeState();
  document.querySelector('.resultSection').scrollIntoView({behavior: 'smooth'});
};

// Get the user choice from the dropdown menu
flavourTown.getSelectedValue = () => {
    const form = document.querySelector('form');
    const selection = document.getElementById('flavours');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        document.querySelector('.resultSection').classList.add('showSection');
        flavourTown.getStrains(selection.value);
        // We used inline styles here to alter the embedded GIPHY code for a consistent GIF height, which required a background image
        if (selection.value === 'sweet') {
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/sPj7I5949U2oo/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>`;
        } else if (selection.value === 'earthy') {
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/RrU8f9lImvJja/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        } else if (selection.value === 'vanilla') {
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/48QFl1W2eOzi8/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        } else if (selection.value === 'citrus') {
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/zfnExdbtdTMmQ/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        } else if (selection.value === 'nutty') {
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/zV9xqOc03a7Ju/giphy.gif'); height: 600px; background-size: cover; background-position: 50% 10%;"></div>` 
        } else if (selection.value === 'coffee') {
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/xULW8tFJvm5JJYnZkc/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        } else if (selection.value === 'woody') {
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/l0HUbCY5FyDDTCire/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        } else if (selection.value === 'flowery') {
            const gifHolder = document.querySelector('.gifHolder');
            gifHolder.innerHTML = `<div style="background-image: url('https://media.giphy.com/media/1n7cAiGBT299fcRg1r/giphy.gif'); height: 600px; background-size: cover; background-position: center;"></div>` 
        }
      });
};

// Make a second API call to get strain description
flavourTown.getDescriptions = (description) => {
    flavourTown.descriptionUrl = `https://strainapi.evanbusse.com/rpCJEMW/strains/search/name/${description}`;
    fetch(flavourTown.descriptionUrl)
        .then((response) => {
            return response.json();
        })
            .then((jsonResponse) => {
                // console.log(jsonResponse[0].desc);
                flavourTown.displayDescription(jsonResponse[0].desc);
            }).catch (() => {
                alert('Oops, we must be out smoking. Come back later!');
            })
};

// Function to display strain descriptions on page
flavourTown.displayDescription = (clickResults) => {
    document.querySelector('.descHolder').innerHTML = '';
    document.querySelector('.descSection').classList.add('showSection');
    const strainDesc = document.createElement('p');
    strainDesc.textContent = clickResults;
    if (strainDesc.textContent == ""){
        strainDesc.textContent = `Oh No! No description available. Looks like you'll need to smoke it and find out`;
    }
    document.querySelector('.descHolder').appendChild(strainDesc);
    document.querySelector('.descSection').scrollIntoView({behavior: 'smooth'});
}

// Function to capture user click action on page
flavourTown.getClick = () => {
  // Create an event listener on the div (which exists on the page) to watch for click
  const selectedTitle = document.querySelector('.strainGrid');
  selectedTitle.addEventListener('click', function(event) {
      // If statement - if clicking on div, h4, p - then get the text
      // Use that value to query the new API for the correct description
      if (event.target.tagName === 'BUTTON') {
          const btnClick = event.target.childNodes[0].innerText;
          flavourTown.getDescriptions(btnClick);
      } if (event.target.tagName === 'H4') {
          const h4Click = event.target.innerText;
          flavourTown.getDescriptions(h4Click);
      } if (event.target.tagName === 'P') {
          const pClick = event.target.parentNode.firstChild.innerText;
          flavourTown.getDescriptions(pClick);
      }
    })
};

// Function to listen for active state on clicked buttons
flavourTown.activeState = () => {
    const btns = document.querySelectorAll('.btn');
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
}

// Initialize function
flavourTown.init = () => {
    flavourTown.getSelectedValue();
    flavourTown.getClick();
};

// Run initialize function
flavourTown.init();
