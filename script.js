// const yesBtn = document.getElementById("yes");
// const noBtn = document.getElementById("no");
// const popup = document.getElementById("popup");
// const closeBtn = document.getElementById("close");

// // 🔹 Store original No button position
// const originalNoBtnStyles = {
//   position: noBtn.style.position || "",
//   left: noBtn.style.left || "",
//   top: noBtn.style.top || ""
// };

// yesBtn.addEventListener("click", () => {
//   popup.classList.add("show");
//   createHearts();
// });

// // No button runs away 😈
// noBtn.addEventListener("mouseover", () => {
//   const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
//   const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
//   noBtn.style.position = "absolute";
//   noBtn.style.left = `${x}px`;
//   noBtn.style.top = `${y}px`;
// });

// closeBtn.addEventListener("click", () => {
//   popup.classList.remove("show");

//   // 🔹 Restore page to normal (No button back to original place)
//   noBtn.style.position = originalNoBtnStyles.position;
//   noBtn.style.left = originalNoBtnStyles.left;
//   noBtn.style.top = originalNoBtnStyles.top;
// });

// // Heart explosion effect
// function createHearts() {
//   for (let i = 0; i < 20; i++) {
//     const heart = document.createElement("div");
//     heart.innerText = "💖";
//     heart.style.position = "fixed";
//     heart.style.left = Math.random() * 100 + "vw";
//     heart.style.top = "100vh";
//     heart.style.fontSize = "2rem";
//     heart.style.animation = "floatUp 2s linear";
//     document.body.appendChild(heart);

//     setTimeout(() => {
//       heart.remove();
//     }, 2000);
//   }
// }

// // Floating hearts animation
// const style = document.createElement("style");
// style.innerHTML = `
// @keyframes floatUp {
//   to {
//     transform: translateY(-100vh);
//     opacity: 0;
//   }
// }`;
// document.head.appendChild(style);



const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

// 🔹 Store original No button position
const originalNoBtnStyles = {
  position: noBtn.style.position || "",
  left: noBtn.style.left || "",
  top: noBtn.style.top || ""
};

// ✅ YES button (reliable on mobile + desktop)
yesBtn.addEventListener("pointerup", () => {
  popup.classList.add("show");
  createHearts();
});

// 🔹 Shared function for moving NO button
function moveNoButton() {
  const vw = window.visualViewport?.width || window.innerWidth;
  const vh = window.visualViewport?.height || window.innerHeight;

  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  const x = Math.random() * (vw - btnW - 20);
  const y = Math.random() * (vh - btnH - 20);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${Math.max(10, x)}px`;
  noBtn.style.top = `${Math.max(10, y)}px`;
}

// 🖥 Desktop hover
noBtn.addEventListener("pointerenter", moveNoButton);

// 📱 Mobile tap
noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  moveNoButton();
});

closeBtn.addEventListener("pointerup", () => {
  popup.classList.remove("show");

  // 🔹 Restore NO button position
  noBtn.style.position = originalNoBtnStyles.position;
  noBtn.style.left = originalNoBtnStyles.left;
  noBtn.style.top = originalNoBtnStyles.top;
});

// 💖 Heart explosion effect
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

// 🎈 Floating hearts animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);