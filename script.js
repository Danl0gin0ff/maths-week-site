let enteredCode = "";

// Function to handle number entry and display balloons
function enterNumber(num) {
    enteredCode += num;
    document.getElementById('display').innerText = enteredCode;

    // Play beep sound on button press
    document.getElementById('beep-sound').play();

    // Create and animate a balloon for each number
    let balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.innerText = num;

    // Randomize the horizontal position of the balloon
    balloon.style.left = Math.random() * 80 + '%';

    // Add the balloon to the balloon container
    document.getElementById('balloon-container').appendChild(balloon);

    // Remove the balloon after it floats up
    setTimeout(() => {
        balloon.remove();
    }, 3000); // Animation duration
}

// Function to check the code
function checkCode() {
    // Example correct code is '1234'
    if (enteredCode === "1234") {
        alert("Code correct!");
    } else {
        alert("Code incorrect.");
    }
}

// Function to delete the last entered number
function deleteLast() {
    enteredCode = enteredCode.slice(0, -1);
    document.getElementById('display').innerText = enteredCode;
}





