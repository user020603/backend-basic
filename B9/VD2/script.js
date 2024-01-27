window.onload = function() {
    var notify = document.querySelector("#notification");
    console.log(notify);

    function fadeout() {
        var opacity = 1;
        var timer = setInterval(function() {
            if (opacity <= 0) {
                clearInterval(timer);
                notify.style.display = "none";
            }
            notify.style.opacity = opacity;
            opacity -= 0.1;
        }, 100);
    }

    setTimeout(fadeout, 5000);
}