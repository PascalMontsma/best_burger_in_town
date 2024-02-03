// Get the button to show the overlay
var showOverlayButton = document.getElementById('showOverlayButton');

// Get the blue button
var blueButton = document.querySelector('.round-button');

// Add a click event listener to show the overlay when clicked
showOverlayButton.addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    blueButton.style.display = 'none'; // Hide the blue button
});

// Get the close button
var closeButton = document.getElementById('closeButton');

// Add a click event listener to hide the overlay when clicked
closeButton.addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    blueButton.style.display = 'flex'; // Show the blue button
});
