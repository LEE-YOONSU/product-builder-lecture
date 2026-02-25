function generateLotto() {
  const container = document.getElementById("result-container");
  const statusText = document.getElementById("status-text");
  
  // Clear previous numbers
  container.innerHTML = "";
  statusText.textContent = "Generating numbers...";

  let numbers = new Set();
  while (numbers.size < 6) {
    let num = Math.floor(Math.random() * 45) + 1;
    numbers.add(num);
  }

  let sorted = Array.from(numbers).sort((a, b) => a - b);

  // Staggered ball appearance
  sorted.forEach((num, index) => {
    setTimeout(() => {
      const ball = document.createElement("div");
      ball.className = "ball";
      ball.textContent = num;
      container.appendChild(ball);
      
      if (index === sorted.length - 1) {
        statusText.textContent = "Good luck with your numbers!";
      }
    }, index * 100);
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const targetTheme = currentTheme === "dark" ? "light" : "dark";
  
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
  updateThemeButton(targetTheme);
}

function updateThemeButton(theme) {
  const btn = document.querySelector(".theme-toggle button");
  btn.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// Initialization
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
window.addEventListener('DOMContentLoaded', () => {
  updateThemeButton(savedTheme);
});
