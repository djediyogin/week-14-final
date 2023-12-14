function createGlow() {
    // Create a new glow element
    var glow = document.createElement('div');
    glow.className = 'glow';

    // Set the glow's initial position
    glow.style.left = Math.random() * window.innerWidth + 'px';
    glow.style.top = Math.random() * window.innerHeight + 'px';

    // Randomize the direction of the animation
    var offsetX = Math.random() * 500 - 250;
    var offsetY = Math.random() * 500 - 250;
    glow.style.animationName = 'glow' + offsetX + offsetY;

    // Create a new animation rule
    var style = document.createElement('style');
    style.innerHTML = `
        @keyframes glow${offsetX}${offsetY} {
            0% {
                opacity: 0;
            }
            30% {
                opacity: 1;
            }
            100% {
                transform: translate(${offsetX}px, ${offsetY}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add the glow to the body
    document.body.appendChild(glow);

    // Remove the glow and the animation rule after the animation ends
    setTimeout(function() {
        document.body.removeChild(glow);
        document.head.removeChild(style);
    }, 2000);
}

// Create a new glow every 100 milliseconds
setInterval(createGlow, 100);
