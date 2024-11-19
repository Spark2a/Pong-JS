import Ball from '../classes/ball.js';
import Player from '../classes/Player.js';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Instance de ball
const ball = new Ball(320, 240, 10, 2, 2, "red");  // x, y, rayon, vitesse X, vitesse Y, couleur

// Instances de player
const player1 = new Player(10, 240, 5, 80, "blue");  //  X, Y, largeur, hauteur, couleur
const player2 = new Player(630, 240, 5, 80, "blue");  // X, Y, largeur, hauteur, couleur

// Boucle d'anim
function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Dessiner 
    ball.draw(context);
    player1.draw(context);
    player2.draw(context);

    
    ball.update();

    requestAnimationFrame(gameLoop);
}


gameLoop();
