const openingHours = {
  0: { day: "Sunday", hours: "Closed" },
  1: { day: "Monday", hours: "08:00 - 14:00" },
  2: { day: "Tuesday", hours: "08:00 - 14:00" },
  3: { day: "Wednesday", hours: "08:00 - 14:00" },
  4: { day: "Thursday", hours: "08:00 - 14:00" },
  5: { day: "Friday", hours: "08:00 - 14:00" },
  6: { day: "Saturday", hours: "08:00 - 14:00" }
};

const now = new Date();
const today = openingHours[now.getDay()];

document.getElementById("today-day").textContent = today.day;
document.getElementById("today-hours").textContent = today.hours;

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});