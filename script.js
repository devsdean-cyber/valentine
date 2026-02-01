const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const error = document.getElementById("error");

const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const letter = document.getElementById("letter");
const proposal = document.getElementById("proposal");
const yesScreen = document.getElementById("yesScreen");
const music = document.getElementById("music");

// Password logic
unlockBtn.addEventListener("click", () => {
  if (passwordInput.value === "7") {
    lockScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
  } else {
    error.classList.remove("hidden");
  }
});

// Start
startBtn.addEventListener("click", () => {
  music.play().catch(() => {});
  startBtn.style.display = "none";
  letter.classList.remove("hidden");
});

// Next
nextBtn.addEventListener("click", () => {
  letter.classList.add("hidden");
  proposal.classList.remove("hidden");
});

// Yes
yesBtn.addEventListener("click", () => {
  proposal.classList.add("hidden");
  yesScreen.classList.remove("hidden");
});

// No button dodge 😏
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Floating hearts
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);