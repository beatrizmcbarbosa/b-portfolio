// Date & Time

let now = new Date();
let dateTime = document.querySelector("#date-time");
let hour = now.getHours();
let minute = now.getMinutes();
if (minute < 10) {
    minute = `0${minute}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let date = now.getDate();
let months = ["January",
    "February",
    "March",
    "April",
    "May",
    "Junr",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",];
let month = months[now.getMonth()];
let year = now.getFullYear();
dateTime.innerHTML = `Last updated at ${hour}:${minute}, on ${day}, ${month} ${date}, ${year}`;