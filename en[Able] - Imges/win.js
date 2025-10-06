
mgraphics.init();
mgraphics.relative_coords = 0; 
mgraphics.autofill = 1; 

var isPressed = false; 
var buttonText = "Win"; 
var buttonColor = [1.0, 0.694, 0.0, 0]; 
var textColor = [1.0, 0.694, 0.0, 1];

function paint() {
    var width = box.rect[2] - box.rect[0]; 
    var height = box.rect[3] - box.rect[1]; 

    mgraphics.set_source_rgba(buttonColor);
    mgraphics.rectangle(0, 0, width, height); 
    mgraphics.fill();

    mgraphics.select_font_face("Lucida Console", "normal", "bold");
    mgraphics.set_font_size(7); 
    mgraphics.set_source_rgba(textColor); 

    var textDims = mgraphics.text_measure(buttonText);
    var textWidth = textDims[0];
    var textHeight = textDims[1];

    mgraphics.move_to(
        (width - textWidth) / 2,  
        (height + textHeight) / 2 
    );
    mgraphics.show_text(buttonText);

    mgraphics.stroke();
}

function onclick(x, y, but, cmd, shift, capslock, option, ctrl) {
    toggleState();
}

function toggleState() {
    isPressed = !isPressed; 
    updateVisuals();
    bang(); 
}

function updateVisuals() {
    if (isPressed) {
        buttonText = "Win";
        buttonColor = [1.0, 0.694, 0.0, 1];
        textColor = [0, 0, 0, 1];
    } else {
        buttonText = "Win";
        buttonColor = [1.0, 0.694, 0.0, 0];
        textColor = [1.0, 0.694, 0.0, 1];
    }
    refresh(); 
}

function bang() {
    outlet(0, isPressed ? 1 : 0);
}

function msg_int(value) {
    if ((value === 0 && isPressed) || (value === 1 && !isPressed)) {
        toggleState();
    }
}

function loadbang() {
    updateVisuals();
    bang(); 
}
