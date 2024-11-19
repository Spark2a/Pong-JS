export default class Ball {
    constructor(x, y, radius, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;  
    }

    // Getters
    getX() { return this.x; }
    getY() { return this.y; }
    getRadius() { return this.radius; }
    getSpeedX() { return this.speedX; }
    getSpeedY() { return this.speedY; }
    getColor() { return this.color; }  

    // Setters
    setX(x) { this.x = x; }
    setY(y) { this.y = y; }
    setRadius(radius) { this.radius = radius; }
    setSpeedX(speedX) { this.speedX = speedX; }
    setSpeedY(speedY) { this.speedY = speedY; }
    setColor(color) { this.color = color; }  

    // Méthode draw dessiner la balle
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

     // Position de la balle
     update() {
        this.x += this.speedX;  // Déplace la balle horizontalement
        this.y += this.speedY;  // Déplace la balle verticalement

        // Condition bord gauche ou droit
        if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
            this.speedX = -this.speedX;
        }

        // Condition bord haut et bas
        if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
            this.speedY = -this.speedY;
        }
    }
}
