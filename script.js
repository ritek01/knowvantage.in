const seconds = document.querySelector(".seconds .number");
const minutes = document.querySelector(".minutes .number");
const hours = document.querySelector(".hours .number");
const days = document.querySelector(".days .number");

// Set your fixed end date here (valid date!)
const END_DATE = new Date("2025-11-30T23:59:59").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = END_DATE - now;

  if (distance <= 0) {
    clearInterval(timer);
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";
    days.textContent = "00";
    return;
  }

  const dayValue = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hourValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secValue = Math.floor((distance % (1000 * 60)) / 1000);

  days.textContent = dayValue.toString().padStart(2, "0");
  hours.textContent = hourValue.toString().padStart(2, "0");
  minutes.textContent = minValue.toString().padStart(2, "0");
  seconds.textContent = secValue.toString().padStart(2, "0");

}, 1000);
