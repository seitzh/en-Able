mgraphics.init();
mgraphics.relative_coords = 0; 
mgraphics.autofill = 0; 

var borderColor = [1.0, 0.694, 0.0, 1]; 
var borderWidth = 1;

function paint() {
    var width = box.rect[2] - box.rect[0]; 
    var height = box.rect[3] - box.rect[1]; 

    mgraphics.set_source_rgba(borderColor);
    mgraphics.set_line_width(borderWidth); 

    mgraphics.rectangle(
        borderWidth / 2, 
        borderWidth / 2, 
        width - borderWidth, 
        height - borderWidth
    ); 
    mgraphics.stroke(); 
}
