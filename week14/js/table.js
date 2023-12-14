document.addEventListener('DOMContentLoaded', function() {
    // Log when the DOM is fully loaded
    console.log('DOM fully loaded and parsed');

    // Create a new table element
    var table = document.createElement('table');

    // Create the table header
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    // Define the headers for the table
    var headers = ["Dragon Name", "Type", "Color", "Origin"];
    // For each header, create a new table header cell and append it to the header row
    headers.forEach(function(headerText) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    });
    // Append the header row to the table header
    thead.appendChild(headerRow);
    // Append the table header to the table
    table.appendChild(thead);

    // Create the table body
    var tbody = document.createElement('tbody');
    // Define the data for the table
    var dragons = [
        {name: "Smaug", type: "Fire Drake", color: "Red", origin: "Middle Earth"},
        {name: "Toothless", type: "Night Fury", color: "Black", origin: "Berk"},
        {name: "Viserion", type: "Ice Dragon", color: "White", origin: "Westeros"},
        {name: "Puff", type: "Magic Dragon", color: "Green", origin: "Honalee"},
        {name: "Mushu", type: "Guardian Spirit", color: "Red", origin: "China"}
    ];
    // For each dragon, create a new table row
    dragons.forEach(function(dragon) {
        var tr = document.createElement('tr');
        // For each property of the dragon, create a new table data cell and append it to the row
        Object.values(dragon).forEach(function(value) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(value));
            tr.appendChild(td);
        });
        // Append the row to the table body
        tbody.appendChild(tr);
    });
    // Append the table body to the table
    table.appendChild(tbody);

    // Append the table to the table container in the DOM
    document.getElementById('tableContainer').appendChild(table);
});