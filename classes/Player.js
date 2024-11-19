export default class Player {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;  
    }

    // Getters
    getX() { return this.x; }
    getY() { return this.y; }
    getWidth() { return this.width; }
    getHeight() { return this.height; }
    getColor() { return this.color; }  

    // Setters
    setX(x) { this.x = x; }
    setY(y) { this.y = y; }
    setWidth(width) { this.width = width; }
    setHeight(height) { this.height = height; }
    setColor(color) { this.color = color; }  

    // Méthode draw dessiner
    draw(context) {
        context.fillStyle = this.color;  
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}
