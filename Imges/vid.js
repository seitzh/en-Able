// Define global variables
mgraphics.init();
mgraphics.relative_coords = 0; // Use absolute coordinates
mgraphics.autofill = 1; // Automatically close shapes

var isPressed = false; // Toggle state
var buttonText = "Vid"; // Default button text
var buttonColor = [1.0, 0.694, 0.0, 0]; // Yellow color for the button background
var textColor = [1.0, 0.694, 0.0, 1];

// Function to draw the toggle button
function paint() {
    var width = box.rect[2] - box.rect[0]; // Get the width of the button
    var height = box.rect[3] - box.rect[1]; // Get the height of the button

    // Draw the button background
    mgraphics.set_source_rgba(buttonColor);
    mgraphics.rectangle(0, 0, width, height); // Fill the entire jsui object
    mgraphics.fill();

    // Draw the button text
    mgraphics.select_font_face("Lucida Console", "normal", "bold");
    mgraphics.set_font_size(7); // Adjust font size if needed
    mgraphics.set_source_rgba(textColor); // Set text color

    // Measure text dimensions for centering
    var textDims = mgraphics.text_measure(buttonText);
    var textWidth = textDims[0];
    var textHeight = textDims[1];

    // Position text to center
    mgraphics.move_to(
        (width - textWidth) / 2,  // Center horizontally
        (height + textHeight) / 2 // Center vertically
    );
    mgraphics.show_text(buttonText);

    mgraphics.stroke();
}

// Respond to mouse clicks
function onclick(x, y, but, cmd, shift, capslock, option, ctrl) {
    toggleState();
}

// Toggle the button state
function toggleState() {
    isPressed = !isPressed; // Toggle the button state
    updateVisuals();
    bang(); // Trigger a bang
}

// Update visuals based on the state
function updateVisuals() {
    if (isPressed) {
        buttonText = "Vid";
        buttonColor = [1.0, 0.694, 0.0, 1];
        textColor = [0, 0, 0, 1];
    } else {
        buttonText = "Vid";
        buttonColor = [1.0, 0.694, 0.0, 0];
        textColor = [1.0, 0.694, 0.0, 1];
    }
    refresh(); // Redraw the button
}

// Output a bang when the button is pressed
function bang() {
    outlet(0, isPressed ? 1 : 0); // Output 1 if pressed, 0 otherwise
}

// Respond to incoming messages
function msg_int(value) {
    if ((value === 0 && isPressed) || (value === 1 && !isPressed)) {
        toggleState();
    }
}

// Initialize with the default state
function loadbang() {
    updateVisuals();
    bang(); // Output the initial state
}
