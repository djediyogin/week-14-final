document.addEventListener('DOMContentLoaded', function() {
    // Log when the DOM is fully loaded and parsed
    console.log('DOM fully loaded and parsed');

    // Fetch and load the content of header.html into the header-placeholder div
    fetch('elements/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Fetch and load the content of footer.html into the footer-placeholder div
    fetch('elements/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
