function playCraps() {
    // Start the game
    console.log("playCraps() started");

    // Generate two random numbers between 1 and 6 for the dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    // Display the result of each die roll
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;

    // Calculate the sum of the dice rolls
    var sum = die1 + die2;
    // Display the sum
    document.getElementById("sumRes").innerHTML = sum;

    // Determine the game outcome based on the sum and the dice rolls
    if (sum == 7 || sum == 11) {
        // If the sum is 7 or 11, the player loses
        document.getElementById("finRes").innerHTML = "You lose! Shoot again.";
    } else if (die1 == die2 && die1 % 2 == 0) {
        // If the dice rolls are even and the same, the player wins
        document.getElementById("finRes").innerHTML = "You win! The Force is with you today.";
    } else {
        // In all other cases, it's a draw
        document.getElementById("finRes").innerHTML = "You have a draw. Try again.";
    }
}