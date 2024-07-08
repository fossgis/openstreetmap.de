// Toggles the Menu in the navigation bar for mobile devices.
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Toggles the dropdrown for the "shop window" for mobile devices.
function toggleDropdown() {
    var x = document.getElementById("myDropdown");
    if (x.className === "tab") {
        x.className += " responsive";
    } else {
        x.className = "tab";
    }
}

// Opens the specific tab in the "shop window".
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Opens "Karten" in the "Schaufenster" per default
if (document.getElementById("defaultOpen")) {
    document.getElementById("defaultOpen").click();
}

// Sets options for the swiper in the "shop window."
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        820: {
            slidesPerView: 4
        }
    },
});
