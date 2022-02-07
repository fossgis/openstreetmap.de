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

// Homepage elements
if (document.getElementById("defaultOpen")) {

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Gets the data of the osmcal Rest-API and lists them at "Veranstaltungen".
fetch("https://osmcal.org/api/v2/events/?in=de").then(function (response) {
    return response.json();
}).then(function (data) {
    // console.log(data);
    var eventListUl = document.getElementById("osmcal_ul");

    data.forEach(event => {

        var a = document.createElement("a");
        a.href = event.url;
        a.target = "_blank";
        var p = document.createElement("p");
        // p.innerHTML = event.name + "<br>" + event.date.human + " " + event.location.short;
        a.innerHTML = event.name + "<br>" + event.date.human + " " + event.location.short + "<br><br>";

        // a.append(p);

        var li = document.createElement("li");
        li.append(a);

        eventListUl.append(li);
    });
}).catch((error) => {
    console.error(error);
});

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

}