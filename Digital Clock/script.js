// const time = document.getElementById("set-time");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function fetchCurrentTime(){
    var date = new Date().toLocaleTimeString().split(":");
    // time.innerHTML = date;
    hour.innerHTML = date[0];
    minute.innerHTML = date[1];
    second.innerHTML = date[2];

    t = setTimeout(function() {
        fetchCurrentTime()
    }, 500);
}

fetchCurrentTime();