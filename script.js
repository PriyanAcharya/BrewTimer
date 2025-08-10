const startBtn = document.getElementById("startBtn");
const timerDisplay = document.getElementById("timerDisplay");
const minutesInput = document.getElementById("minutes");

let timer;
let totalSeconds;

startBtn.addEventListener("click", () => {
  clearInterval(timer);

  let minutes = parseInt(minutesInput.value, 10);
  if (isNaN(minutes) || minutes < 0) {
    alert("Please enter a valid number of minutes");
    return;
  }

  totalSeconds = minutes * 60;

  updateDisplay(totalSeconds);

  timer = setInterval(() => {
    totalSeconds--;
    if (totalSeconds < 0) {
      clearInterval(timer);
      alert("Time's up! ☕️");
      return;
    }
    updateDisplay(totalSeconds);
  }, 1000);
});

function updateDisplay(seconds) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `${m}:${s}`;
}
