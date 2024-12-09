const shootButton = document.querySelector('.shoot-button');
const goal = document.querySelector('.goal');
const scoreElement = document.querySelector('#score');

let score = 0;

shootButton.addEventListener('click', () => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const ball = document.createElement('div');
  ball.className = 'ball';
  ball.style.top = `${randomY}px`;
  ball.style.left = `${randomX}px`;
  goal.appendChild(ball);
  setTimeout(() => {
    if (randomX > 40 && randomX < 60 && randomY > 40 && randomY < 60) {
      score++;
      scoreElement.textContent = `Score: ${score}`;
    }
    ball.remove();
  }, 1000);
});
