// PASSWORD CHECK
function checkPassword() {
  let pass = document.getElementById("password").value;

  if (pass === "abikutty") {   // 👉 change this
    document.getElementById("passwordBox").classList.add("hidden");
    document.getElementById("countdownBox").classList.remove("hidden");
    startCountdown();
  } else {
    alert("Wrong password 😅");
  }
}

// COUNTDOWN
function startCountdown() {
  let count = 5;
  let interval = setInterval(() => {
    document.getElementById("countdown").innerText = count;
    count--;

    if (count < 0) {
      clearInterval(interval);
      document.getElementById("countdownBox").classList.add("hidden");
      document.getElementById("mainBox").classList.remove("hidden");
      typingEffect();
    }
  }, 1000);
}

// TYPING
let text = "My girl was born 20 years ago today 🎂";
let i = 0;

function typingEffect() {
  let el = document.getElementById("typing");
  let speed = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(speed);
  }, 50);
}

// FINAL SURPRISE
function startSurprise() {
  document.getElementById("mainBox").classList.add("hidden");
  document.getElementById("surprise").classList.remove("hidden");

  document.getElementById("music").play();

  // hearts
  for (let i = 0; i < 80; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-10px";
    heart.style.fontSize = "20px";
    heart.style.animation = "fall 4s linear";
    document.body.appendChild(heart);
  }
}