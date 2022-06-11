const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

let birthday = new Date("February 23, 2023 09:00:00");

let interval;

let diffDay;
let diffHour;
let diffMinute;
let diffSecond;

const zeroNeed = (numb) => {
    return (numb <= 9) ? '0' + numb : numb 
}


const timeCount = () => {
  //diifferences 
  let diff = birthday - new Date();
  //time count
  diffDay = Math.floor(diff / 1000 / 60 / 60 / 24);
  diffHour = Math.floor(diff / 1000 / 60 / 60) % 24;
  diffMinute = Math.floor(diff / 1000 / 60) % 60;
  diffSecond = Math.floor(diff / 1000) % 60;

  //text content
  day.textContent = zeroNeed(diffDay) 
  hour.textContent = zeroNeed(diffHour)
  minute.textContent = zeroNeed(diffMinute)
  second.textContent = zeroNeed(diffSecond)
};

const countDate = () => {
  clearInterval(interval);
  interval = setInterval(timeCount, 1000);
};

countDate();
