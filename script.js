
function toggleText() {

    // Get all the elements from the page
    var points =
        document.getElementById("points");

    var showMoreText =
        document.getElementById("moreText");

    var buttonText =
        document.getElementById("textButton");

    // If the display property of the dots
    // to be displayed is already set to
    // 'none' (that is hidden) then this
    // section of code triggers
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to
        // 'Show More'
        buttonText.innerHTML = 'Read more <img src="arrow.svg" alt="Arrow-icon" class="smallbutton">';
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = 'Read less <img src="arrow.svg" alt="Arrow-icon" class="smallbutton">';
    }
}

//This event makes a message pop up on the screen when you reach the end of the page
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
      alert('You\'ve reached the bottom');
    }
});
