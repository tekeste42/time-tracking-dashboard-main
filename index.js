"use strict";

const WorkHours = document.getElementById("work-hours");

document.querySelector("#day").addEventListener("click", function () {
  WorkHours.textContent = "5hrs";
  document.querySelector("#work-last-time").textContent = "Last day - 7hrs";
  document.querySelector("#play-hours").textContent = "1hr";
  document.querySelector("#play-last-time").textContent = "Last day - 2hrs";
  document.querySelector("#study-hours").textContent = "0hrs";
  document.querySelector("#study-last-time").textContent = "Last day - 1hr";
  document.querySelector("#exercise-hours").textContent = "1hr";
  document.querySelector("#exercise-last-time").textContent = "Last day - 1hr";
  document.querySelector("#social-hours").textContent = "1hr";
  document.querySelector("#social-last-time").textContent = "Last day - 3hrs";
  document.querySelector("#self-care-hours").textContent = "0hrs";
  document.querySelector("#self-care-last-time").textContent = "Last day - 1hr";
});

document.querySelector("#week").addEventListener("click", function () {
  document.querySelector("#work-hours").textContent = "32hrs";
  document.querySelector("#work-last-time").textContent = "Last week - 32hrs";
  document.querySelector("#play-hours").textContent = "10hrs";
  document.querySelector("#play-last-time").textContent = "Last week - 8hrs";
  document.querySelector("#study-hours").textContent = "7hrs";
  document.querySelector("#study-last-time").textContent = "Last week - 4hrs";
  document.querySelector("#exercise-hours").textContent = "4hrs";
  document.querySelector("#exercise-last-time").textContent = "Last week - 5hr";
  document.querySelector("#social-hours").textContent = "5hrs";
  document.querySelector("#social-last-time").textContent = "Last week - 10hrs";
  document.querySelector("#self-care-hours").textContent = "2hrs";
  document.querySelector("#self-care-last-time").textContent =
    "Last week - 2hrs";
});
document.querySelector("#month").addEventListener("click", function () {
  document.querySelector("#work-hours").textContent = "103hrs";
  document.querySelector("#work-last-time").textContent = "Last month - 128hrs";
  document.querySelector("#play-hours").textContent = "23hrs";
  document.querySelector("#play-last-time").textContent = "Last month - 29hrs";
  document.querySelector("#study-hours").textContent = "13hrs";
  document.querySelector("#study-last-time").textContent = "Last month - 19hrs";
  document.querySelector("#exercise-hours").textContent = "11hrs";
  document.querySelector("#exercise-last-time").textContent =
    "Last month - 18hrs";
  document.querySelector("#social-hours").textContent = "21hrs";
  document.querySelector("#social-last-time").textContent =
    "Last month - 23hrs";
  document.querySelector("#self-care-hours").textContent = "7hrs";
  document.querySelector("#self-care-last-time").textContent =
    "Last month - 11hrs";
});
