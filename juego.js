const canvas = document.getElementById('juegoCanvas');
const ctx = canvas.getContext('2d');

// Variables del juego
let nave, asteroides, juegoActivo, vidas;
let teclas = {};  // Guardará el estado de las teclas presionadas

// Cargar imágenes
const imagenAsteroide = new Image();
imagenAsteroide.src = 'goomba2.gif';  // Asegúrate de que el archivo "asteroide.png" esté en el mismo directorio
const imagenNave = new Image();
imagenNave.src = 'megaman.gif';  // Asegúrate de que el archivo "nave.png" esté en el mismo directorio

// Inicializar el juego
function inicializarJuego() {
    nave = {
        x: canvas.width / 2,
        y: canvas.height - 50,
        width: 40,
        height: 40,
        velocidad: 5,
        disparos: [],
    };
    asteroides = [];
    juegoActivo = true;
    vidas = 3;  // Reiniciar vidas
    actualizarJuego();
}

// Función para dibujar la nave con imagen
function dibujarNave() {
    ctx.drawImage(imagenNave, nave.x, nave.y, nave.width, nave.height);
}

// Mostrar las vidas en pantalla
function mostrarVidas() {
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Vidas: ${vidas}`, 10, 30);
}

// Movimiento de la nave
function moverNave() {
    if (teclas['ArrowLeft'] && nave.x > 0) nave.x -= nave.velocidad;
    if (teclas['ArrowRight'] && nave.x + nave.width < canvas.width) nave.x += nave.velocidad;
}

// Crear un disparo
function crearDisparo() {
    nave.disparos.push({ x: nave.x + nave.width / 2, y: nave.y, velocidad: 7 });
}

// Mover y dibujar disparos
function manejarDisparos() {
    nave.disparos.forEach((disparo, index) => {
        disparo.y -= disparo.velocidad;
        if (disparo.y < 0) nave.disparos.splice(index, 1);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(disparo.x, disparo.y, 5, 10);
    });
}

// Crear y mover asteroides
function crearAsteroide() {
    const size = Math.random() * 30 + 20;
    asteroides.push({
        x: Math.random() * (canvas.width - size),
        y: -size,
        width: size,
        height: size,
        velocidad: Math.random() * 2 + 1,
    });
}

function manejarAsteroides() {
    asteroides.forEach((asteroide, index) => {
        asteroide.y += asteroide.velocidad;
        if (asteroide.y > canvas.height) asteroides.splice(index, 1);
        // Dibujar el asteroide con imagen
        ctx.drawImage(imagenAsteroide, asteroide.x, asteroide.y, asteroide.width, asteroide.height);
    });
}

// Detectar colisiones con disparos y nave
function detectarColisiones() {
    // Colisiones con disparos
    nave.disparos.forEach((disparo, i) => {
        asteroides.forEach((asteroide, j) => {
            if (
                disparo.x < asteroide.x + asteroide.width &&
                disparo.x + 5 > asteroide.x &&
                disparo.y < asteroide.y + asteroide.height &&
                disparo.y + 10 > asteroide.y
            ) {
                asteroides.splice(j, 1);
                nave.disparos.splice(i, 1);
            }
        });
    });

    // Colisiones con la nave
    asteroides.forEach((asteroide, index) => {
        if (
            nave.x < asteroide.x + asteroide.width &&
            nave.x + nave.width > asteroide.x &&
            nave.y < asteroide.y + asteroide.height &&
            nave.y + nave.height > asteroide.y
        ) {
            asteroides.splice(index, 1); // Remover el asteroide al colisionar
            vidas--; // Reducir una vida

            // Si las vidas llegan a cero, finalizar el juego
            if (vidas <= 0) {
                juegoActivo = false;
                alert("¡Juego terminado! Has perdido todas tus vidas.");
            }
        }
    });
}

// Actualizar el juego
function actualizarJuego() {
    if (juegoActivo) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dibujarNave();
        moverNave();
        manejarDisparos();
        manejarAsteroides();
        detectarColisiones();
        mostrarVidas(); // Mostrar las vidas en pantalla
        requestAnimationFrame(actualizarJuego);
    }
}

// Control de disparos y reinicio del juego
document.addEventListener('keydown', (e) => {
    teclas[e.key] = true;
    if (e.key === ' ' && juegoActivo) crearDisparo();
    if ((e.key === 'r' || e.key === 'R') && !juegoActivo) inicializarJuego();  // Reiniciar el juego con "R" solo si está inactivo
});

document.addEventListener('keyup', (e) => {
    teclas[e.key] = false;
});

// Generar asteroides periódicamente
setInterval(crearAsteroide, 1000);

// Iniciar el juego por primera vez
inicializarJuego();
