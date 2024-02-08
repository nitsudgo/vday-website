const gifImageAsking = document.getElementById('gif-image-asking');
const gifImageYes = document.getElementById('gif-image-yes');
const gifImageNo = document.getElementById('gif-image-no');
const promptText = document.getElementById('prompt-text');
const buttonContainer = document.getElementById('button-container');
const mapListing = document.getElementById('hidden-dinner-suggestions')

let followupPromptChoices = [
    "Oh, having second thoughts? Was it something I said. Maybe take another look",
    "Are you playing hard to get with that 'No' button? Let's give it another whirl",
    "No? Are you sure you didn’t just slip and click by mistake. Try clicking again",
    "Whoa, plot twist! Didn’t see that 'No' coming. Time for a second opinion",
    "Did the 'No' button look more fun to click? Be honest! Here's another chance",
    "Hmm, playing it cool, I see. How about flirting with 'Yes' for a bit",
    "Is this your way of asking for more options? Because that's all I got. Give it another go",
    "You clicked 'No'! Was it the pressure? Let's pretend it never happened",
    "Are we doing a 'No' streak? Should I start to worry. Maybe try something different",
    "That 'No' felt personal. Want to talk about it? Or just hit 'Yes' to move on"
  ];

followupPromptChoices.sort(() => Math.random() - 0.5);

const maxHardNo = followupPromptChoices.length - 1;
let hardNoCounter = 0;

// If YES
document.getElementById('yes').addEventListener('click', function() {
    buttonContainer.innerHTML = ""; // Hide buttons

    // Change image
    gifImageAsking.style.display = 'none';
    gifImageNo.style.display = 'none';
    gifImageYes.style.display = 'inline';

    // Change text to success message
    promptText.innerHTML = "GOOD CHOICE!!!!!<br />🤩🤩🤩🤩🤩🤩🤩🤩<br />"
    promptText.innerHTML += "Here are some ideas for lunch/dinner dates~"

    // Un-hide maps
    mapListing.style.display = 'block';
});


// If NO
document.getElementById('no').addEventListener('click', function() {
    // Change image
    gifImageAsking.style.display = 'none';
    gifImageNo.style.display = 'inline';

    // Change text to a random choice from a predefined list
    let newPrompt = followupPromptChoices.pop();
    promptText.innerText = newPrompt + "- will you be my Valentine now?";

    // If we still have less than 10 "no" clicks...
    if (hardNoCounter < maxHardNo) {
        // Make YES button larger
        const yesButton = document.getElementById('yes');
        let currentWidth = yesButton.offsetWidth;
        let currentHeight = yesButton.offsetHeight;

        var style = window.getComputedStyle(yesButton, null).getPropertyValue('font-size');
        var currentFontSize = parseFloat(style); 

        // Increase size by a specific value or percentage
        let newWidth = currentWidth + 10; // Increase width by 10px
        let newHeight = currentHeight + 10; // Increase height by 10px
        let newFontSize = currentFontSize + 2;

        // Apply the new size to the element
        yesButton.style.width = newWidth + 'px';
        yesButton.style.height = newHeight + 'px';
        yesButton.style.fontSize = newFontSize + 'px';

        hardNoCounter += 1;
    } else {
        // Once we have been rejected too many times, we remove the option to say no entirely. Not cool!
        const noButton = document.getElementById('no');
        noButton.remove();
    }
    

});