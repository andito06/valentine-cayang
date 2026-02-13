// MUSIC
function startLove() {
  document.getElementById("scene1").classList.remove("active");
  document.getElementById("scene2").classList.add("active");
  document.getElementById("bgMusic").play();
}

function nextScene() {
  document.getElementById("scene2").classList.remove("active");
  document.getElementById("scene3").classList.add("active");
}

// SLIDESHOW
const images = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slideImage").src = images[index];
}, 3000);

// ANNIVERSARY
const startDate = new Date("2025-09-18T22:35:00"); // GANTI TANGGAL

const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("startDateText").textContent =
  startDate.toLocaleDateString("id-ID", options);

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
}

updateCounter();
setInterval(updateCounter, 1000);

// ROMANTIC TEXT
const texts = [
  "Aku bersyukur banget ketemu kamu 🤍",
  "Terima kasih sudah bertahan sejauh ini 🤍",
  "Walaupun LDR, hatiku tetap di kamu 🤍",
  "Kamu rumah, walaupun kita beda kota 🤍"
];

let textIndex = 0;
setInterval(() => {
  textIndex = (textIndex + 1) % texts.length;
  document.getElementById("romanticText").textContent = texts[textIndex];
}, 4000);

// YES BUTTON
document.getElementById("yesBtn").addEventListener("click", function() {
  document.getElementById("finalSection").classList.remove("hidden");
});

// NO BUTTON LARI
document.getElementById("noBtn").addEventListener("mouseover", function() {
  this.style.position = "absolute";
  this.style.top = Math.random() * window.innerHeight + "px";
  this.style.left = Math.random() * window.innerWidth + "px";
});