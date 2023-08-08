
//팝업//
$(document).ready(function () {
    $('#ck').click(function () {
        $('#boxWrap').fadeIn();
    });

    $('#cbtn').click(function () {
        $('#boxWrap').fadeOut();
    });
});

//마우스 커서에 따라 플레이버튼 움직이게//
$(document).ready(function () {
    var pixelToMove = 105;

    $("#third").mousemove(function (e) {

        var width = $(this).innerWidth();
        var height = $(this).innerHeight();

        var newValueX = (e.clientX / width) * pixelToMove;
        var newValueY = (e.clientY / height) * pixelToMove;

        $(this).children('#ck').css({ left: newValueX + '%', top: newValueY + '%' });

    });
});

//마우스 오버 시 배경 색 변경//
$(document).ready(function () {
    let color = ['#ece400', '#ea6300', '#a7b532', '#ab000f', '#d50300', '#dfdbd1'];
    let idx;

    $('.product_img').hover(function () {
        idx = $(this).index();
        $('.bgcolor').css({ backgroundColor: color[idx] });
    }, function () {
        $('.bgcolor').css({ backgroundColor: '#ffc402' });
    });
});

function slide() {
    $('.slide').stop().animate({ marginLeft: -500 }, 1200, function () {
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({ marginLeft: 0 });
    });
}
setInterval(slide, 3500);

$('#cbtn').on('click', function () {
    $('#video').trigger('pause');
});
