$(document).ready(function(){
  // const $body = $('body');
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $('.hidden').toggle(1000);



});


//
// $(window).on('mousemove', function (e) {
//     const x = e.pageX;
//     const y = e.pageY;
//
//     const size = (Math.random() * 10) + 'em';
//
//     const $bubble = $('<div class="bubble"></div>').css({
//       left: x,
//       top: y,
//       width: size,
//       height: size
//     });
//
//     $bubble.appendTo($body);
//
//     $bubble.animate({top: -200}, 2000, function () {
//       $bubble.remove(); // Clean up to conserve memory.
//
//     });
//   });
$(".icon-number").click(function(e){
  $("#number").toggle(1000);
    e.preventDefault();

  });



  $(".type-wrap span:last").typed({
  	strings: ["^1000 Hi, my name is <strong>Mina</strong>"],
  	typeSpeed: 50,
  	loop: false,
  	contentType: 'html'
  });



});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".diagonal-bg svg line").attr("stroke-width",  ((10 + scroll/40)  + "%"));
	//30 is the starting width
	//alter the amount of growth by changing scroll/x
});


$(".text-uppercase-3").click(function (e){
  $('body').animate({scrollTop: $('#section3').position().top});
  e.preventDefault();
});


$(".text-uppercase-1").click(function (e){
  $('body').animate({scrollTop: $('#section1').position().top});
  e.preventDefault();
});


$(".text-uppercase-4").click(function (e){
  $('body').animate({scrollTop: $('#section4').position().top});
  e.preventDefault();
});


$(".text-uppercase-5").click(function (e){
  $('body').animate({scrollTop: $('#section5').position().top});
  e.preventDefault();
});
