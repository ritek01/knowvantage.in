const seconds = document.querySelector(".seconds .number");
const minutes = document.querySelector(".minutes .number");
const hours = document.querySelector(".hours .number");
const days = document.querySelector(".days .number");

// Set your fixed end date here
const END_DATE = new Date("2025-11-310T23:59:59").getTime();

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
  const hourValue = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secValue = Math.floor((distance % (1000 * 60)) / 1000);

  days.textContent = dayValue < 10 ? "0" + dayValue : dayValue;
  hours.textContent = hourValue < 10 ? "0" + hourValue : hourValue;
  minutes.textContent = minValue < 10 ? "0" + minValue : minValue;
  seconds.textContent = secValue < 10 ? "0" + secValue : secValue;

}, 1000);
