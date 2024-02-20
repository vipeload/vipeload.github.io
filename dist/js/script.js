function openPage(pageId, initial = false) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("page");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageId).style.display = "block";
    if (initial) {
        for (i = 0; i < tablinks.length; i++) {
            if (tablinks[i].getAttribute('onclick').includes("'" + pageId + "'")) {
                tablinks[i].className += " active";
                break;
            }
        }
    }
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 300);
}

document.addEventListener("DOMContentLoaded", function() {
    openPage('games', true);
});
