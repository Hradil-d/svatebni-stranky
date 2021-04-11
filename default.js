    function countdown() {
        // setups
        var miliToDays = 86400000;
        var miliToHour = 3600000;
        var miliToMinutes = 60000;
        var days = 0;
        var hours = 0;
        var minutes = 0;

        // get diff
        var wedding = new Date('2021/05/16 11:30:00');
        var now = new Date();
        var diff = wedding.getTime() - now.getTime();

        if (diff >= 0) {
            // get days
            days = Math.floor(diff / miliToDays);
            diff = diff - days * miliToDays;

            // get hours
            hours = Math.floor(diff / miliToHour);
            diff = diff - hours * miliToHour;

            // get minutes
            minutes = Math.floor(diff / miliToMinutes);
            diff = diff - minutes * miliToMinutes;
        }

        // assing values to labels
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
    }

    document.addEventListener('DOMContentLoaded', function(event) {
        countdown();
        setInterval(countdown, 30000);
    });
