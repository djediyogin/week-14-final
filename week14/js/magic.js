function createShootingStar() {
    // Create a new star element
    var star = document.createElement('div');
    star.className = 'star';

    // Set the star's initial position
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * window.innerHeight + 'px';

    // Add the star to the body
    document.body.appendChild(star);

    // Remove the star after the animation ends
    setTimeout(function() {
        document.body.removeChild(star);
    }, 2000);
}

// Create a new shooting star every second
setInterval(createShootingStar, 250);