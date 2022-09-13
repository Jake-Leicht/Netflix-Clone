$(document).ready(function(){
    /*Variables*/
    var navText = $(".navbar-item-text");
    var navItem = $(".navbar-item");
    var navItemIcon = $(".nav-icon");

    /*Hidden values*/
    navText.hide();

    navItem.hover(function(){
        navItem.css({
            "width": "300px",
            "text-align": "left"});
        navText.show();
        navText.css({"margin-left": "20px"});
        navItemIcon.css("margin-left", "25px");
        $(this).css({"color":"white"});
        $(this).children(navItemIcon).css({
            "padding-bottom": "4px", 
            "color": "white"});
        $(this).children("i").css({"border-bottom": "4px solid red"});
    }, function(){
        navItem.css({
            "width": "80px",
            "text-align": "center"});
        navText.hide();
        navItemIcon.css("margin-left", "0px");
        $(this).css("color", "gray");
        $(this).children(navText).css({
            "color": "gray"});
        $(this).children(navItemIcon).css("border-bottom", "none");
    });
});