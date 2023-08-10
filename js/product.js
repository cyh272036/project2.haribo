
// 호버 시 배경 이미지 변경
$(document).ready(function () {
    
    let bgc = ['#d3a22d', '#07a4e7', '#ffa41b', '#de0512', '#67b339', '#00c9a1', '#f5c210', '#a495bc']
    let bg = ['img/gold_back.jpg', 'img/space.jpg', 'img/cola_back.jpg', 'img/worm.jpg', 'img/fruity.jpg', 'img/worm_sour.jpg', 'img/cola_back_2.jpg', 'img/grape_back.jpg']

    var index;

    $('.item img').hover(function(){
        index = $(this).parents('.item').index();
        if($(this).parents('.con').hasClass('second')){
            index += 1;
        }else if($(this).parents('.con').hasClass('third')){
            index += 5;
        }else {
            index;
        }
        
        $(this).parents('.item').css("background", 'url('+ bg[index] +')');
        $(this).parents('.item').fadeIn();
        
    }, function(){   
        $(this).parents('.item').css("background", bgc[index]);
    });
});

// slide 공지
$(document).ready(function () {

    var w = $(".question").innerWidth();

    function prev() {
        $(".slideWrap li:last").prependTo(".slideWrap");
        $(".slideWrap").css("margin-left", -w);
        $(".slideWrap").stop().animate({ marginLeft: 0 }, 800);
    }

    function next() {
        $(".slideWrap").stop().animate({ marginLeft: -w }, 800, function () {
            $(".slideWrap li:first").appendTo(".slideWrap");
            $(".slideWrap").css({ marginLeft: 0 });
        });
    }
    setInterval(next, 6000);
    $(".prev").click(function () {
        prev();
    });

    $(".next").click(function () {
        next();
    });

    $(window).resize(function () {
        w = $(".question").innerWidth();
    });
});
