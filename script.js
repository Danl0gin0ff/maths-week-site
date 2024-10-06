let enteredCode = '';

function enterNumber(num) {
    enteredCode += num; // Add the number to the entered code
    document.getElementById('display').innerText = ` ${enteredCode}`; // Show entered code
}

function deleteLast() {
    enteredCode = enteredCode.slice(0, -1); // Remove the last character
    document.getElementById('display').innerText = ` ${enteredCode}`; // Update displayed code
}

function checkCode() {
    // Define the correct code here
    const correctCode = '1234';
    
    if (enteredCode === correctCode) {
        alert('Access Granted!');
    } else {
        alert('Access Denied!');
    }
    enteredCode = ''; // Reset code after checking
    document.getElementById('display').innerText = ` `; // Reset display
}
