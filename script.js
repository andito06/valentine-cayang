function startLove() {
  document.getElementById("scene1").classList.remove("active");
  document.getElementById("scene2").classList.add("active");
  document.getElementById("bgMusic").play();
}

function nextScene() {
  document.getElementById("scene2").classList.remove("active");
  document.getElementById("scene3").classList.add("active");
}

/* SLIDESHOW */
const images = [
  "foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg",
  "foto5.jpg","foto6.jpg","foto7.jpg","foto8.jpg"
];

let index = 0;

setInterval(()=>{
  index = (index + 1) % images.length;
  document.getElementById("slideImage").src = images[index];
},2500);

/* ANNIVERSARY */
const startDate = new Date("2025-09-18T22:35:00");

const options = { year:'numeric', month:'long', day:'numeric' };
document.getElementById("startDateText").textContent =
  startDate.toLocaleDateString("id-ID", options);

function updateCounter(){
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff/(1000*60*60*24));
  const hours = Math.floor((diff/(1000*60*60))%24);
  const minutes = Math.floor((diff/(1000*60))%60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
}

updateCounter();
setInterval(updateCounter,1000);

/* ROMANTIC TEXT */
const texts = [
  "Acuu bersyukur cekalii ketemu kamuu 🤍",
  "Walaupun LDR, acuu tetep mawuu camaa kamuu 🤍",
  "Kamuu rumahh walaupun bedaa kotaa 🤍",
  "Terima kasih yaa sudah bertahan cama acuu 🤍",
  "Acuu ndaak saball ketemuu kamuu agii 🤍"
];

let textIndex = 0;
setInterval(()=>{
  textIndex = (textIndex+1)%texts.length;
  document.getElementById("romanticText").textContent = texts[textIndex];
},4000);

/* BUTTON DRAMA */
const noBtn = document.getElementById("noBtn");
const noText = document.getElementById("noText");

const dramaTexts = [
  "Yakin nggak mau? 🥺",
  "Cayaanggg 😭",
  "Aku cedih loh...",
  "Kok ndaa mauu 😖",
  "Plisss pilih iyaaa 🥺"
];

let dramaIndex = 0;

function moveButton(){
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random()*(window.innerHeight-60)+"px";
  noBtn.style.left = Math.random()*(window.innerWidth-120)+"px";

  noText.textContent = dramaTexts[dramaIndex];
  dramaIndex = (dramaIndex+1)%dramaTexts.length;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", function(e){
  e.preventDefault();
  moveButton();
});

document.getElementById("yesBtn").addEventListener("click", function(){
  document.getElementById("finalSection").classList.remove("hidden");
});