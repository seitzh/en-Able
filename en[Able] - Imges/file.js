mgraphics.init();
mgraphics.relative_coords = 0; 
mgraphics.autofill = 1; 

var buttonText = "Read";
var buttonColor = [0.333, 0.871, 0.965, 1]; 
var textColor = [0, 0, 0, 1];

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
    triggerRead();
}

function triggerRead() {
    outlet(0, "read"); 
}
