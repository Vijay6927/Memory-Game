let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["red", "green", "purple", "yellow"];

let h3 = document.querySelector("h3");

function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
  h3.innerText = "Touch anywhere to start the game";
}

document.addEventListener(isMobile() ? "touchstart" : "keypress", function () {
  if (!started) {
    started = true;
    levelup();
  }
});

function flash(btn) {
  btn.classList.add("white");
  setTimeout(() => btn.classList.remove("white"), 300);
}

function levelup() {
  userseq = [];
  level++;
  h3.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randcolor = btns[randIdx];
  let randbtn = document.querySelector(`.${randcolor}`);
  gameseq.push(randcolor);
  flash(randbtn);
}

function userflash() {
  let btn = this;
  flash(btn);
  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  check(userseq.length - 1);
}

document.querySelectorAll(".bigsquare div").forEach((element) => {
  element.addEventListener("click", userflash);
});

function check(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h3.innerHTML = `Game Over! <br> Your score: <b>${level}</b> <br>${isMobile() ? "Touch anywhere" : "Press any key"} to restart.`;
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "black";
      reset();
    }, 500);
  }
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
