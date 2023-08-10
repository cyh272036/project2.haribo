window.onscroll = function(){
  var line_height = $('#bar_box').offset().top;

  if ((scrollY >= line_height - 650) && (scrollY <= line_height + 2620)) {
      roadmap();
  }

function roadmap() {

    var content_height = document.getElementsByClassName('line')[0].offsetHeight;
    var height = scrollY - (line_height - 600);
    var scrolled = (height / content_height) * 100;
    document.getElementsByClassName('line1')[0].style.height = scrolled + "%";
}
}

function slide() {
  $('.slide').stop().animate({ marginLeft: -500 }, 1200, function () {
      $('.slide li:first').appendTo('.slide');
      $('.slide').css({ marginLeft: 0 });
  });
}
setInterval(slide, 3500);