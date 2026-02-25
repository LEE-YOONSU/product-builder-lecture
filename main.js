function generateLotto() {
  let numbers = new Set();

  while (numbers.size < 6) {
    let num = Math.floor(Math.random() * 45) + 1;
    numbers.add(num);
  }

  let sorted = Array.from(numbers).sort((a, b) => a - b);
  document.getElementById("result").textContent = sorted.join("  ");
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const targetTheme = currentTheme === "dark" ? "light" : "dark";
  
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
