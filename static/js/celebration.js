// celebration.js

document.addEventListener("DOMContentLoaded", () => {
  startCelebration();
});

function startCelebration() {
  createBalloons(10);
  createConfetti(50);

  // Auto-clean after 6 seconds
  setTimeout(() => {
    document.querySelectorAll(".balloon, .confetti").forEach(el => el.remove());
  }, 6000);
}

function createBalloons(count) {
  for (let i = 0; i < count; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDelay = `${Math.random() * 2}s`;
    balloon.style.animationDuration = `${5 + Math.random() * 3}s`;
    balloon.style.width = `${30 + Math.random() * 30}px`;
    balloon.style.height = `${40 + Math.random() * 50}px`;
    balloon.style.backgroundColor = getRandomColor();
    document.body.appendChild(balloon);
  }
}

function createConfetti(count) {
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.width = `${6 + Math.random() * 6}px`;
    confetti.style.height = `${8 + Math.random() * 8}px`;
    document.body.appendChild(confetti);
  }
}

function getRandomColor() {
  // Vibrant yet soft celebratory palette
  const colors = [
    "#ff4f81", // pink
    "#ff85b3", // light pink
    "#ffd166", // warm yellow
    "#06d6a0", // mint green
    "#118ab2", // teal blue
    "#9b5de5", // violet
    "#f15bb5", // magenta
    "#fee440", // lemon yellow
    "#00bbf9", // sky blue
    "#caffbf"  // pastel green
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
