const year = document.querySelector(".year")
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const newDay = document.querySelector("#day")
const newMonth = document.querySelector("#month")
const newYear = document.querySelector("#year")
const btnStart = document.querySelector(".start")

let currentDate = new Date()
let birthday// = new Date("February 23, 2023 09:00:00")

let interval;
let diffYear;
let diffDay;
let diffHour;
let diffMinute;
let diffSecond;

const zeroNeed = (numb) => {
    return (numb <= 9) ? '0' + numb : numb 
}

const timeCount = () => {
  //diifferences 
  let diff

  if (birthday > new Date){
    diff = birthday - new Date();
  } else {
    diff = new Date - birthday
  }
  
  //time count
  diffYear = Math.floor(diff / 1000 / 60 / 60 / 24 / 365)
  diffDay = Math.floor(diff / 1000 / 60 / 60 / 24) % 365;
  diffHour = Math.floor(diff / 1000 / 60 / 60) % 24;
  diffMinute = Math.floor(diff / 1000 / 60) % 60;
  diffSecond = Math.floor(diff / 1000) % 60;

  //text content
  year.textContent = zeroNeed(diffYear)
  day.textContent = zeroNeed(diffDay) 
  hour.textContent = zeroNeed(diffHour)
  minute.textContent = zeroNeed(diffMinute)
  second.textContent = zeroNeed(diffSecond)
};

const countDate = () => {
  clearInterval(interval);
  interval = setInterval(timeCount, 1000);
};

const dayCheck = () => {

  if (newDay.value > 31){
    alert("Day can't be more then 31")
    newDay.value = 31
  } 

  if (newMonth.value > 12){
    alert("Month can't be more then 12")
    newMonth.value = 12
  }
}

const changeDate = () => {
    dayCheck()
    birthday = new Date(`${newYear.value}, ${newMonth.value}, ${newDay.value}`)
    localStorage.setItem("birthday", birthday);
    countDate();
}

window.addEventListener("load", () => {
  if (localStorage.getItem("birthday") === null){
    birthday = new Date("February 23, 2023 09:00:00")
    
  } else {
    birthday = new Date(localStorage.getItem("birthday"))
    console.log(birthday)
  }
})

countDate();
btnStart.addEventListener("click", changeDate)


