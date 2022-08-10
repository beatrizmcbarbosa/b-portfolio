//Date and Time
let now = new Date();
let hourMinute = document.querySelector("#hour-minute");
let dayMonthYear = document.querySelector("#day-month-year");
let hour = now.getHours();
let minute = now.getMinutes();
if (minute > 10) {
    minute = `0${minute}`;
}

let day = days[now.getDay()];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = now.getDate();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth];
let year = now.getFullYear;
hourMinute.innerHTML = `Last updated at ${hour}h ${minute}min`;