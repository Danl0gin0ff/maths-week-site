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
    const correctCode = "1234"; // Change this to your actual correct code

    if (code === correctCode) {
        deleteAll();
        playHooraySound(); // Play hooray sound
        showWellDoneImage(); // Show a "Well Done" image
        createSparkles();
    } else {
        deleteAll(); // Clear the display on incorrect attempt
        playIncorrectSound(); // Play incorrect sound
        // Optionally, show sparks or other feedback here
    }
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

function deleteAll() {
    document.getElementById('display').innerText = ''; // Clear the display area
    // Optionally, you can play a sound here if needed
}


function playHooraySound() {
    const hooraySound = document.getElementById('hooray-sound');
    hooraySound.currentTime = 0; // Reset to start
    hooraySound.play(); // Play the hooray sound
}

function playIncorrectSound() {
    const incorrectSound = document.getElementById('incorrect-sound');
    incorrectSound.currentTime = 0; // Reset to start
    incorrectSound.play(); // Play the incorrect sound
}





