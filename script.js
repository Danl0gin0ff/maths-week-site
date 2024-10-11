const correctCodes = ["0321", "3245709618", "5631094827"]; // Add your codes here

function enterNumber(number) {
    const codeInput = document.getElementById('codeInput');
    if (codeInput.value.length < 10) {
        codeInput.value += number;
    }
}

function clearCode() {
    document.getElementById('codeInput').value = '';
    document.getElementById('resultMessage').innerHTML = '';
}

function checkCode() {
    const codeInput = document.getElementById('codeInput').value;
    const resultMessage = document.getElementById('resultMessage');
    const successSound = document.getElementById('successSound');
    const failureSound = document.getElementById('failureSound');
    
    if (correctCodes.includes(codeInput)) {
        showResultMessage("Well Done!", "success")
        resultMessage.className = 'message success';
        successSound.play(); // Play success sound
    } else {
        showResultMessage("Try Again")
        resultMessage.className = 'message failure';
        failureSound.play(); // Play failure sound
    }
}

function addToInput(digit) {
    const codeInput = document.getElementById('codeInput');
    const codeDots = document.getElementById('codeDots');

    if (codeInput.value.length < 4) {
        codeInput.value += digit; // Add digit to input
        updateDots(); // Update the dots display
    }
}

// Function to update dots based on the current input
function updateDots() {
    const codeInput = document.getElementById('codeInput');
    const codeDots = document.getElementById('codeDots');

    // Clear existing dots
    codeDots.innerHTML = '';

    // Create dots based on the current input length
    for (let i = 0; i < codeInput.value.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        codeDots.appendChild(dot);
    }
}

function showResultMessage(message, type) {
    const resultMessage = document.getElementById('resultMessage');
    
    // If the message is "Well Done!" (success), apply styles
    if (type === "success") {
        resultMessage.textContent = message;
        resultMessage.style.fontSize = "32px"; // Bigger font for "Well Done"
        resultMessage.style.color = 'transparent';
        resultMessage.style.background = 'green'; // Solid green background
        resultMessage.style.webkitBackgroundClip = 'text';
        resultMessage.style.backgroundClip = 'text';
        resultMessage.style.textAlign = 'center'; // Center the text
        resultMessage.style.padding = '10px'; // Add padding for better spacing
    } else {
        // For "Try Again!", make the text small and near the code box
        resultMessage.textContent = message;
        resultMessage.style.fontSize = "32px"; // Smaller font for "Try Again"
        resultMessage.style.color = 'red'; // Red for "Try Again!"
        resultMessage.style.background = 'none'; // No background for "Try Again!"

    }

    // Remove the message after 5 seconds
    setTimeout(() => {
        resultMessage.textContent = ''; // Clears the message
        clearCode()
    }, 3000);
}

function deleteLastCharacter() {
    const codeInput = document.getElementById('codeInput');
    // Remove the last character from the current value
    codeInput.value = codeInput.value.slice(0, -1);
    updateDots(); // Update the dots display
}
