window.onload = function() {
    var notification = document.getElementById("notification");
    function showNotify() {
        setTimeout(function() {
            notification.style.display = "none";
        }, 3000);
    }
    showNotify();
}

