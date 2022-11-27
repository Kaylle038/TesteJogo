const character = document.querySelector('.character');
const obstacle = document.querySelector('.obstacle');
var contPontos = 0;

// Tamanho da tela
var heightWindow = window.screen.height;
var heightGameBoard = document.querySelector('.gameBoard').clientHeight;
var heightGrama = (heightWindow - heightGameBoard);

// Definindo grama
document.querySelector('.grama').style.height = heightGrama + 'px';

const jump = () => {
    character.classList.add('jump');

    setTimeout(() => {
        character.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const obstaclePosition = obstacle.offsetLeft;
    const characterPosition = +window.getComputedStyle(character).bottom.replace('px', '');

    if (obstaclePosition <= 120 && obstaclePosition > 0 && characterPosition < 80) {
        obstacle.style.animation = 'none';
        obstacle.style.left = `${obstaclePosition}px`;

        character.style.animation = 'none';
        character.style.left = `${obstaclePosition}px`;

        character.src = 'boooom.png';

        clearInterval(loop);
    }
    //else if (obstaclePosition < 120 && characterPosition < 80) {
    //     document.addEventListener('keypress', function () {

    //         contPontos++;
    //         console.log(contPontos);
    //     });
    // }


}, 10);

document.addEventListener('keydown', jump);