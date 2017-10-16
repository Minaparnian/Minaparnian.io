$(document).ready(function(){
  // const $body = $('body');
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $('.hidden').toggle(1000);



});


$(".icon-number").click(function(e){
  $("#number").toggle(1000);
    e.preventDefault();

  });



  var typed = new Typed("#typed", {
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
  $('body').animate({scrollTop: $('#section3').position().top}, 1500);
  $(".hamburger").toggleClass("is-active");
  $('.hidden').toggle(1000);
  e.preventDefault();
});


$(".text-uppercase-1").click(function (e){
  $('body').animate({scrollTop: $('#section1').position().top}, 1500);
  $(".hamburger").toggleClass("is-active");
  $('.hidden').toggle(1000);
  e.preventDefault();
});

$(".text-uppercase-2").click(function (e){
  $('body').animate({scrollTop: $('#section2').position().top}, 1500);
  $(".hamburger").toggleClass("is-active");
  $('.hidden').toggle(1000);
  e.preventDefault();
});


$(".text-uppercase-4").click(function (e){
  $('body').animate({scrollTop: $('#section4').position().top}, 1500);
  $(".hamburger").toggleClass("is-active");
  $('.hidden').toggle(1000);
  e.preventDefault();
});


$(".text-uppercase-5").click(function (e){
  $('body').animate({scrollTop: $('#section5').position().top}, 1500);
  $(".hamburger").toggleClass("is-active");
  $('.hidden').toggle(1000);
  e.preventDefault();
});
