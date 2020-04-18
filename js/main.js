function initialize(){
    var $splashCloseButton = $('#splash-close-btn');
    var $splash = $('#splash');
    var $headerDropdownMenu = $('#header-dropdown-menu');
    var $headerDropdownButton = $('#header-button');
    var $aboutMenuItem = $('#about-menu-item');

    $splashCloseButton.click(function () {
        $splash.fadeOut('slow');
    });

    $aboutMenuItem.click(function() {
        $overlay.fadeIn('slow');
    });

    $headerDropdownButton.click(function () {
        $headerDropdownMenu.slideToggle();
    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
}};

$(document).ready(initialize);
