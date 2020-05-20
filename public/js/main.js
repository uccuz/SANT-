

$(document).on("click", ".drink_btn", function(event) {
    //document.cookie = 'drink=' + $(this).data("id").toString();
    Cookies.set('drink', $(this).data("id"));
    $.cookie('drink', $(this).data("id"));
});
$(document).on("click", ".wine_btn", function(event) {
    //document.cookie = 'wine=' + $(this).data("id").toString();
    $.cookie('wine', $(this).data("id"));
});

specialData = [
    {wine:5,drink:4},
    {wine:3,drink:5},
    {wine:2,drink:6},
];

$(document).on("click", ".special_btn", function(event) {
    var specialId = parseInt($(this).data("id"));
    var wine = specialData[specialId-1].wine;
    var drink = specialData[specialId-1].drink;
    $.cookie('wine', wine);
    $.cookie('drink', drink);
});


