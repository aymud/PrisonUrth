function renderAge() {
    const birthDateInUTC = new Date('1190-04-01T06:23:01Z');
    const currentDate = Date.now();
    const timeDiffInMs = currentDate - birthDateInUTC.getTime();

    const {years, months, days, hours, minutes, seconds, milliseconds} = calculateTimeUnits(timeDiffInMs);

    document.getElementById('years').textContent = padNumber(years, 2);
    document.getElementById('months').textContent = padNumber(months, 2);
    document.getElementById('days').textContent = padNumber(days, 2);
    document.getElementById('hours').textContent = padNumber(hours, 2);
    document.getElementById('minutes').textContent = padNumber(minutes, 2);
    document.getElementById('seconds').textContent = padNumber(seconds, 2);
    document.getElementById('milliseconds').textContent = padNumber(milliseconds, 3);
}

function calculateTimeUnits(timeDiffInMs) {
    const avgLengthOfYearInDays = 365.2425;
    const milliSecondsInYear = 1000 * 60 * 60 * 24 * avgLengthOfYearInDays;
    const milliSecondsInMonth = milliSecondsInYear / 12;
    const milliSecondsInDay = 1000 * 60 * 60 * 24;
    const milliSecondsInHour = 1000 * 60 * 60;
    const milliSecondsInMinute = 1000 * 60;
    const milliSecondsInSecond = 1000;

    const years = Math.floor(timeDiffInMs / milliSecondsInYear);
    const months = Math.floor((timeDiffInMs % milliSecondsInYear) / milliSecondsInMonth);
    const days = Math.floor((timeDiffInMs % milliSecondsInMonth) / milliSecondsInDay);
    const hours = Math.floor((timeDiffInMs % milliSecondsInDay) / milliSecondsInHour);
    const minutes = Math.floor((timeDiffInMs % milliSecondsInHour) / milliSecondsInMinute);
    const seconds = Math.floor((timeDiffInMs % milliSecondsInMinute) / milliSecondsInSecond);
    const milliseconds = timeDiffInMs % milliSecondsInSecond;

    return {years, months, days, hours, minutes, seconds, milliseconds};
}

function padNumber(number, width) {
    return String(number).padStart(width, '0');
}

renderTimeInMs = 1;
setInterval(renderAge, renderTimeInMs);