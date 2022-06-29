var date = new Date();
var dateStr = date.toLocaleDateString("en-US", { weekday: "long" });

document.getElementById("day").innerHTML = dateStr + ".";

function getCustomTimeString() {
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  let ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  hour = hour ? hour : 12;

  min = min < 10 ? "0" + min : min;
  hour = hour < 10 ? "0" + hour : hour;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hour + " " + ampm + " : " + min + " : " + seconds;

  document.getElementById("time").innerText = time;

  let t = setTimeout(function () {
    getCustomTimeString();
  }, 1000);
  return time;
}
getCustomTimeString();
