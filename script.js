let code = '';
let correctCode = '1234'; // Example correct code
let balloonContainer = document.getElementById('balloon-container');

// Function to enter a number
function enterNumber(num) {
    code += num;
    document.getElementById('display').innerText = code;
    playBeep();
    createBalloon(num);
}

function checkCode() {
    const code = document.getElementById('display').innerText; // Get the entered code

    if (code === correctCode) {
        deleteAll(); // Clear the display for next input
        playSuccessAnimation();
        createSparkles(); // Create sparkles

    } else {
        playIncorrectSound(); // Play incorrect sound
        deleteAll(); // Clear the display on incorrect attempt
    }
}

function deleteAll() {
    code = ''; // Reset code variable
    document.getElementById('display').innerText = ''; // Clear the display area
}




// Function to delete the last entered number
function deleteLast() {
    code = code.slice(0, -1);
    document.getElementById('display').innerText = code;
}

// Function to create the balloon effect with random positions
function createBalloon(num) {
    let balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Random colors for each balloon
    const colors = ['red','pink','purple','lightblue','lightgreen', 'green', 'blue'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.backgroundColor = randomColor;

    // Set the number inside the balloon
    balloon.innerText = num;

    // Random positions within the container
    let randomX = Math.floor(Math.random() * (balloonContainer.offsetWidth - 200)); // Adjust 200 based on balloon size
    let randomY = Math.floor(Math.random() * (balloonContainer.offsetHeight - 200)); // Adjust 200 based on balloon size
    balloon.style.left = randomX + 'px';
    balloon.style.top = randomY + 'px';

    balloonContainer.appendChild(balloon);

    // Remove the balloon after the animation
    setTimeout(() => {
        balloon.remove();
    }, 1000); // Balloon stays for 1 second
}

// Function to play a beep sound
function playBeep() {
    let beep = document.getElementById('beep-sound');
    beep.play();
}

function createSparkles() {
    const container = document.getElementById('balloon-container'); // or any other container you prefer

    for (let i = 0; i < 20; i++) { // Create 20 sparkles
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        sparkle.style.animationDuration = Math.random() * 2 + 1 + 's'; // Random duration for each sparkle
        container.appendChild(sparkle);

        // Remove the sparkle after the animation ends
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }
}

function playSuccessAnimation() {
    // Clear the display area
    const display = document.getElementById('display');
    display.innerHTML = '';

    // Create a new div for the "Well Done" message
    const wellDone = document.createElement('div');
    wellDone.textContent = 'Well Done!';
    wellDone.style.position = 'absolute';
    wellDone.style.top = '50%';
    wellDone.style.left = '50%';
    wellDone.style.transform = 'translate(-50%, -50%)';
    wellDone.style.fontSize = '48px';
    wellDone.style.fontWeight = 'bold';
    document.body.appendChild(wellDone);

    // Change colors and animate
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    let index = 0;

    const interval = setInterval(() => {
        wellDone.style.color = colors[index % colors.length];
        index++;

        // Stop the animation after a set time
        if (index > 20) {
            clearInterval(interval);
            document.body.removeChild(wellDone); // Remove the message after finishing
            setTimeout(() => {
                // Show the keypad after a delay
                display.innerHTML = ' '; // Optional: Show a message if needed
                showKeypad(); // Function to display the keypad again
            }, 2000); // Delay before showing the keypad (2000 ms = 2 seconds)
        }
    }, 200); // Change color every 200ms

    // Play success sound
    const hooraySound = document.getElementById('hooray-sound');
    hooraySound.currentTime = 0; // Reset the sound
    hooraySound.play(); // Play sound
}

// Function to show the keypad again
function showKeypad() {
    document.getElementById('keypad').style.display = 'block'; // Make keypad visible again
}













