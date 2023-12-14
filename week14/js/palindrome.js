function checkPalindrome() {
    // Get the input value
    var input = document.getElementById('palindrome-input').value;

    // Remove all non-alphanumeric characters and convert to lowercase
    var formattedInput = input.replace(/[\W_]/g, '').toLowerCase();

    // Reverse the formatted input
    var reversedInput = formattedInput.split('').reverse().join('');

    // Check if the formatted input is a palindrome
    if (formattedInput === reversedInput) {
        document.getElementById('palindrome-result').innerHTML = '"' + input + '" is a palindrome.';
    } else {
        document.getElementById('palindrome-result').innerHTML = '"' + input + '" is not a palindrome.';
    }
}
