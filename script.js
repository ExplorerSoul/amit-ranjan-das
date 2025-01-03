const words = ["Programmer...", "Developer..."]; // Add your words here
let currentIndex = 0;

const animatedText = document.getElementById("animatedText");

function updateText() {
    currentIndex = (currentIndex + 1) % words.length; // Cycle through words
    animatedText.setAttribute("data-text", words[currentIndex]);
    animatedText.textContent = words[currentIndex]; // Update displayed text
}

// Set a timeout to change the text after the animation duration
setInterval(updateText, 3000); // Adjust timing based on your animation duration
