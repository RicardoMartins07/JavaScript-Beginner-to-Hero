"use strict";

const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const display = document.querySelector("#display");

let timeLeft = 0;
let timer = null;

const convertMinutesToSeconds = function (minutes) {
  return minutes * 60;
};

const updateDisplay = function (time) {
  const displayMinutes = Math.floor(time / 60);
  const displaySeconds = time % 60;

  display.textContent = `${displayMinutes < 10 ? "0" : ""}${displayMinutes}:${
    displaySeconds < 10 ? "0" : ""
  }${displaySeconds}`;
};

const runTimer = function () {
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay(timeLeft);
    } else {
      clearInterval(timer);
      timer = null;
      display.textContent = "Time's up!";
      pauseBtn.textContent = "Pause";
    }
  }, 1000);
};

const updateDisplay = function (time) {
  const displayMinutes = Math.floor(time / 60);
  const displaySeconds = time % 60;

  display.textContent = `${displayMinutes < 10 ? "0" : ""}${displayMinutes}:${
    displaySeconds < 10 ? "0" : ""
  }${displaySeconds}`;
};

const runTimer = function () {
  timer = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay(timeLeft);
    } else {
      clearInterval(timer);
      timer = null;
      display.textContent = "Time's up!";
      pauseBtn.textContent = "Pause";
    }
  }, 1000);
};

startBtn.addEventListener("click", function () {
  if (timer) return;

  if (timeLeft === 0) {
    const min = parseInt(minutes.value) || 0;
    const sec = parseInt(seconds.value) || 0;

    timeLeft = convertMinutesToSeconds(min) + sec;
  }

  if (timeLeft <= 0) return;

  updateDisplay(timeLeft);
  runTimer();
  pauseBtn.textContent = "Pause";
});

pauseBtn.addEventListener("click", function () {
  if (timer) {
    clearInterval(timer);
    timer = null;
    pauseBtn.textContent = "Resume";
  } else if (timeLeft > 0) {
    runTimer();
    pauseBtn.textContent = "Pause";
  }
});

resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  timeLeft = 0;

  display.textContent = "00:00";
  minutes.value = "";
  seconds.value = "";
  pauseBtn.textContent = "Pause";
});
