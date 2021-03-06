const countdown = () => {
    const countDate = new Date("Feb 28, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //Time Works
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate Days Difference
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = formatTime(textDay);
    document.querySelector('.hour').innerText = formatTime(textHour);
    document.querySelector('.minute').innerText = formatTime(textMinute);
    document.querySelector('.second').innerText = formatTime(textSecond);
};
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
setInterval(countdown, 1000);