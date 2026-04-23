"use strict";

const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const btnReset = document.querySelector(".reset");
const btnLap = document.querySelector(".lap-btn");
const display = document.getElementById("display");
const lapsList = document.getElementById("laps-list");

let timer = null;
let countingTime = 0;
const laps = [];

const updateDisplay = function (time) {
  const displayMinutes = Math.floor(time / 60);
  const displaySeconds = time % 60;

  display.textContent = `${displayMinutes < 10 ? "0" : ""}${displayMinutes}:${
    displaySeconds < 10 ? "0" : ""
  }${displaySeconds}`;
};

const updateLapDisplay = function (time) {
  const displayMinutes = Math.floor(time / 60);
  const displaySeconds = time % 60;

  let lapTime = `${displayMinutes < 10 ? "0" : ""}${displayMinutes}:${
    displaySeconds < 10 ? "0" : ""
  }${displaySeconds}`;
  return lapTime;
};

const runTimer = function () {
  timer = setInterval(function () {
    countingTime++;
    updateDisplay(countingTime);
  }, 1000);
};

btnStart.addEventListener("click", function () {
  if (timer) return;

  btnPause.textContent = "Pause";
  updateDisplay(countingTime);
  runTimer();
});

btnPause.addEventListener("click", function () {
  if (timer) {
    clearInterval(timer);
    timer = null;
    btnPause.textContent = "Resume";
  } else if (countingTime > 0) {
    runTimer();
    btnPause.textContent = "Pause";
  }
});

btnReset.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  countingTime = 0;
  laps.length = 0;

  updateDisplay(countingTime);
  btnPause.textContent = "Pause";
  cleanLapList();
});

btnLap.addEventListener("click", function () {
  if (!timer) return;
  else if (laps.length === 0) {
    lapsList.removeChild(lapsList.querySelector(".empty-lap"));
  }

  laps.push(countingTime);
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${laps.length}: ${updateLapDisplay(countingTime)}`;
  lapsList.appendChild(lapItem);
});

const cleanLapList = function () {
  while (lapsList.firstChild) {
    lapsList.removeChild(lapsList.firstChild);
  }
  const emptyLapItem = document.createElement("li");
  emptyLapItem.textContent = "No laps recorded";
  emptyLapItem.classList.add("empty-lap");
  lapsList.appendChild(emptyLapItem);
};
