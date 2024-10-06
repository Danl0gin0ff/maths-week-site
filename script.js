let enteredCode = ''; // Initialize an empty string to hold the entered code

function enterNumber(num) {
    enteredCode += num; // Add the number to the entered code
    document.getElementById('display').innerText = enteredCode; // Show the entered code
}

function deleteLast() {
    enteredCode = enteredCode.slice(0, -1); // Remove the last character
    document.getElementById('display').innerText = enteredCode; // Update displayed code
}

function checkCode() {
    const correctCode = '1234'; // Define the correct code here
    
    if (enteredCode === correctCode) {
        alert('Access Granted!'); // Alert if the code is correct
    } else {
        alert('Access Denied!'); // Alert if the code is incorrect
    }
    enteredCode = ''; // Reset code after checking
    document.getElementById('display').innerText = ''; // Reset display
}
