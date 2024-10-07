body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #808080; /* Light background for contrast */
}

h1 {
    margin-bottom: 20px;
}

#display {
    background-color: #ccc; /* Light grey background for the display */
    border: 2px solid #999; /* Darker border for the display */
    border-radius: 8px; /* Rounded corners for the display */
    padding: 10px;
    height: 20px;
    width: 200px; /* Set width for the display */
    text-align: center;
    font-size: 20px; /* Larger font size for better visibility */
    margin-bottom: 20px; /* Space between display and keypad */
}

#displays {
    background-color: #ccc; /* Light grey background for the display */
    border: 2px solid #999; /* Darker border for the display */
    border-radius: 8px; /* Rounded corners for the display */
    padding: 10px;
    height: 20px;
    width: 500px; /* Set width for the display */
    text-align: center;
    font-size: 20px; /* Larger font size for better visibility */
    margin-bottom: 20px; /* Space between display and keypad */
}

#keypad {
    display: inline-block;
    background-color: #ddd; /* Light grey background for the keypad */
    padding: 20px;
    border-radius: 10px; /* Rounded corners for the keypad */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Soft shadow for 3D effect */
}

.row {
    display: flex;
    justify-content: center; /* Center buttons in the row */
    margin: 5px 0; /* Space between rows */
}

button {
    background-color: #aaa; /* Grey background for buttons */
    border: none; /* No border */
    border-radius: 5px; /* Rounded corners for buttons */
    color: white; /* White text color */
    font-size: 20px; /* Larger font size for buttons */
    margin: 5px; /* Space between buttons */
    padding: 15px 20px; /* Padding for buttons */
    cursor: pointer; /* Pointer cursor on hover */
    width:50px;
}


}

button:hover {
    background-color: #888; /* Darker grey on hover */
}
#balloon-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
}

.balloon {
    position: absolute;
    bottom: 0;
    font-size: 24px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    padding: 10px;
    animation: fly 4s linear forwards;
}

@keyframes fly {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
}

