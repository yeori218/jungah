 $(document).ready(function () {

     $('.dp2,.gnb_bg').hide();
     $('.gnb>li').mouseover(function () {
         $('.dp2,.gnb_bg').stop().slideDown();


     });
     $('.gnb>li').mouseout(function () {
         $('.dp2,.gnb_bg').stop().slideUp();
     });


     $('.reserv .reservbg').hide();
     $('.reserv').mouseover(function () {
         $('.reserv .reservbg').stop().fadeIn();

     });


     $('.reserv').mouseout(function () {
         $('.reserv .reservbg').stop().fadeOut();

     });

     $('.trainingbg').hide();
     $('.training').mouseover(function () {
         $('.training .trainingbg').stop().fadeIn();

     });


     $('.training').mouseout(function () {
         $('.training .trainingbg').stop().fadeOut();

     });

     $('.orientalbg').hide();
     $('.oriental').mouseover(function () {
         $('.oriental .orientalbg').stop().fadeIn();

     });


     $('.oriental').mouseout(function () {
         $('.oriental .orientalbg').stop().fadeOut();

     });

     $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
             $("#gotop").fadeIn();
         } else {
             $("#gotop").fadeOut();
         }
     });

     $("#gotop").click(function () {
         $("html, body").animate({
             scrollTop: 0
         }, "slow");
         return false;
     });

     $('.visual').bxSlider({
         auto: true
     });
     $('.cure_slide').bxSlider({
         auto: true,
         autoControls: true,
         stopAutoOnClick: true,
         pager: true,
         slideWidth: 595
     });

     $('.slider').slick({
         centerMode: true,
         centerPadding: '60px',
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         arrows: true,
         dots: true
     });



 });
