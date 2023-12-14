// Get the music element
var spaceMusic = document.getElementById('spaceMusic');
// Get the volume slider element
var volumeSlider = document.getElementById('volumeSlider');
// Get the play/pause button element
var playPauseButton = document.getElementById('playPauseButton');

// Add event listener for the play/pause button
playPauseButton.addEventListener('click', function() {
    // If the music is paused, play it and change the button text to 'Pause'
    if (spaceMusic.paused) {
        spaceMusic.play();
        playPauseButton.textContent = 'Pause';
    } else {
        // If the music is playing, pause it and change the button text to 'Play'
        spaceMusic.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Add event listener for the volume slider
volumeSlider.addEventListener('input', function() {
    // Change the volume of the music according to the value of the slider
    spaceMusic.volume = volumeSlider.value;
});