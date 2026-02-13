let input = document.querySelector("input"); // Select the first <input> element in the document

/**
 * @type {NodeListOf<Element>} button - Selects all elements with the class "btn" in the document.
 */
let button = document.querySelectorAll(".btn"); // Select all elements with the class "btn" and store them in a NodeList

let changeBtnArray = Array.from(button); // Convert the NodeList of buttons into an array
let string = ""; // Initialize an empty string to store user input

changeBtnArray.forEach(arg => { // Loop through each button in the array
    arg.addEventListener("click", (e) => { // Add a click event listener to each button
        if (e.target.innerHTML == "DEL") { // If the button clicked is "DEL"
            string = string.substring(0, string.length - 1); // Remove the last character from the string
            input.value = string; // Update the input field with the modified string
        } else if (e.target.innerHTML == "C") { // If the button clicked is "C"
            string = ""; // Clear the string
            input.value = string; // Update the input field to be empty
        } else if (e.target.innerHTML == "=") { // If the button clicked is "="
            string = eval(string); // Evaluate the string as a mathematical expression
            input.value = string; // Update the input field with the result
        } else { // For any other button
            string = string + e.target.innerHTML; // Append the button's text to the string
            input.value = string; // Update the input field with the new string
        }
    });
});

