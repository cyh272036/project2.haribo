
// 메뉴바
$(document).ready(function () {
    $('#b').click(function () {
        $('#myNav').css('width', '100%');
    });

    $('.closebtn').click(function () {
        $('#myNav').css('width', '0');
    });
});
