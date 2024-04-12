var sidebarHidden = false;
var breakpoint = 768;
var currentWidth = window.innerWidth;
var menuLateral = document.getElementById("menu-lateral");
var main = document.getElementsByTagName("main").item(0);
var arrow = document.getElementById("arrow-accordion");

function showSidebar() {
    menuLateral.style.transform = "translateX(0)";
    main.style.paddingLeft = '270px';
    arrow.style.transform = "scaleX(-100%)"
    sidebarHidden = false;
}

function hideSidebar() {
    menuLateral.style.transform = "translateX(-100%)";
    main.style.paddingLeft = '0px';
    arrow.style.transform = "scaleX(100%)"
    sidebarHidden = true;
}

function toggleSidebar() {
    if (sidebarHidden)
        showSidebar();
    else
        hideSidebar();
}

window.addEventListener("resize", (event) => {
    currentWidth = window.innerWidth;
    console.log(currentWidth<768, !sidebarHidden)

    if (currentWidth<768 && !sidebarHidden) {
        hideSidebar();
    }

    if (currentWidth>=768 && sidebarHidden) {
        showSidebar();
    }
})