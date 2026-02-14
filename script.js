const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

// Phrases to cycle through
const phrases = [
  "No 🙃💔",
  "Think again! 🧐",
  "Are you sure? 🥺",
  "No you can't! 🚫",
  "Try again... 😜",
  "Wrong button! ❌",
  "Nice try! 😂",
  "Maybe Yes? 💍",
  "Click the red one! ❤️"
];
let phraseIndex = 0;

const originalNoBtnStyles = {
  position: noBtn.style.position || "",
  left: noBtn.style.left || "",
  top: noBtn.style.top || "",
  text: noBtn.innerText
};

yesBtn.addEventListener("pointerup", () => {
  popup.classList.add("show");
  createHearts();
});

function moveNoButton() {
  const vw = window.visualViewport?.width || window.innerWidth;
  const vh = window.visualViewport?.height || window.innerHeight;

  // Update Text
  phraseIndex = (phraseIndex + 1) % phrases.length;
  noBtn.innerText = phrases[phraseIndex];

  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  const x = Math.random() * (vw - btnW - 20);
  const y = Math.random() * (vh - btnH - 20);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${Math.max(10, x)}px`;
  noBtn.style.top = `${Math.max(10, y)}px`;
}

noBtn.addEventListener("pointerenter", moveNoButton);

noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  moveNoButton();
});

closeBtn.addEventListener("pointerup", () => {
  popup.classList.remove("show");
  // Restore original state
  noBtn.style.position = originalNoBtnStyles.position;
  noBtn.style.left = originalNoBtnStyles.left;
  noBtn.style.top = originalNoBtnStyles.top;
  noBtn.innerText = originalNoBtnStyles.text;
  phraseIndex = 0;
});

function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "2rem";
    heart.style.pointerEvents = "none";
    heart.style.animation = "floatUp 2s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

const style = document.createElement("style");
style.innerHTML = `@keyframes floatUp { to { transform: translateY(-100vh); opacity: 0; } }`;
document.head.appendChild(style);