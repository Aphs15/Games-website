
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('review-form');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const name = document.getElementById('reviewer-name').value;
        const reviewText = document.getElementById('review-text').value;

        // Simulate a successful insertion 
        setTimeout(() => {
            formResponse.textContent = `Thank you, ${name}! Your review has been submitted successfully.`;
            formResponse.style.color = 'green';

            // Clear the form fields
            form.reset();
        }, 500); // Simulate a delay
    });
});

// JavaScript to handle YouTube video switching
const videoPlayer = document.getElementById('videoPlayer');
const youtubeVideos = [
    'https://www.youtube.com/embed/N91EB85mq4E', // FC 24
    'https://www.youtube.com/embed/Id2EaldBaWw', // Resident Evil 4
    'https://www.youtube.com/embed/E3Huy2cdih0', // Elden Ring
    'https://www.youtube.com/embed/RtZ8LsbFNIk', // Call of Duty: Modern Warfare 3
    'https://www.youtube.com/embed/hvoD7ehZPcM', // Grand Theft Auto V
    'https://www.youtube.com/embed/SRc9jIO1mCI', // Goat Simulator: Goaty Edition
    'https://www.youtube.com/embed/JSRtYpNRoN0', // The Elder Scrolls V: Skyrim(Special Edition)
    'https://www.youtube.com/embed/EE-4GvjKcfs', // God of War: Ragnarok
    'https://www.youtube.com/embed/U-1cn1yOKYc', // Marvel’s Spider-Man: Miles Morales
    'https://www.youtube.com/embed/3lIgJpHxVeM' // The Witcher 3: Wild Hunt Complete Edition
];
let currentVideoIndex = 0;

// Function to load videos onto page
function loadVideo(index) {
    videoPlayer.src = youtubeVideos[index];
}

// Event listeners for next/prev buttons
document.querySelector('.prev-button').addEventListener('click', function () {
    currentVideoIndex = (currentVideoIndex === 0) ? youtubeVideos.length - 1 : currentVideoIndex - 1;
    loadVideo(currentVideoIndex);
});

document.querySelector('.next-button').addEventListener('click', function () {
    currentVideoIndex = (currentVideoIndex === youtubeVideos.length - 1) ? 0 : currentVideoIndex + 1;
    loadVideo(currentVideoIndex);
});

// Get the modal and form elements
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");
var signInForm = document.getElementById("sign-in-form");
var signUpForm = document.getElementById("sign-up-form");
var showSignUp = document.getElementById("show-sign-up");
var showSignIn = document.getElementById("show-sign-in");

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Switch to Sign-Up form
showSignUp.onclick = function () {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
}

// Switch to Sign-In form
showSignIn.onclick = function () {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
}
