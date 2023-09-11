 // Function to handle the button click event
 function handleButtonClick() {
    const outputElement = document.getElementById('output');
    outputElement.textContent = 'Button clicked! changed the text';
    
    // Show an alert message
    alert('Button clicked! This is an alert message.');
}

// Add an event listener to the button
const buttonElement = document.getElementById('myButton');
buttonElement.addEventListener('click', handleButtonClick);