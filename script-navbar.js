var sidebarHidden = false;

function toggleSidebar() {
    if (sidebarHidden) {
        $(".btn-accordion img").removeClass("invert");
        $("#menu-lateral").removeClass("hidden");
        $("main").removeClass("hidden");
    } else {
        $(".btn-accordion img").addClass("invert")
        $("#menu-lateral").addClass("hidden");
        $("main").addClass("hidden");
    }
    sidebarHidden=!sidebarHidden;
}

$(".btn-accordion").on("click", toggleSidebar);