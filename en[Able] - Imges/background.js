mgraphics.init();
mgraphics.relative_coords = 0; 
mgraphics.autofill = 1; 

var backgroundColor = [0.098, 0.098, 0.098, 1]; 
var cornerRadius = 10; 

function paint() {
    var width = box.rect[2] - box.rect[0]; 
    var height = box.rect[3] - box.rect[1]; 

    mgraphics.set_source_rgba(backgroundColor);

    draw_rounded_rectangle(0, 0, width, height, cornerRadius);
    mgraphics.fill();
}

function draw_rounded_rectangle(x, y, width, height, radius) {
    mgraphics.move_to(x + radius, y); 
    mgraphics.line_to(x + width - radius, y); 
    mgraphics.arc(x + width - radius, y + radius, radius, -Math.PI / 2, 0); 
    mgraphics.line_to(x + width, y + height - radius); 
    mgraphics.arc(x + width - radius, y + height - radius, radius, 0, Math.PI / 2); 
    mgraphics.line_to(x + radius, y + height); 
    mgraphics.arc(x + radius, y + height - radius, radius, Math.PI / 2, Math.PI); 
    mgraphics.line_to(x, y + radius);
    mgraphics.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5);
    mgraphics.close_path();
}
