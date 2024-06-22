// lightbox //
var lightboxVideo = GLightbox({
  selector: '.glightbox'
});

var lightboxImage = GLightbox({
  selector: '.glightbox-image'
});

var lightboxImage = GLightbox({
  selector: '.glightbox-image-stock'
});

var lightboxImage = GLightbox({
  selector: '.glightbox-image-prices'
});

// Swiper //
var swiper = new Swiper('.slider-one-on-screen', {
  spaceBetween: 30,
  navigation: {
    nextEl: ".slider-one-on-screen .swiper-button-next",
    prevEl: ".slider-one-on-screen .swiper-button-prev",
  },
  pagination: {
    el: ".slider-one-on-screen .swiper-pagination",
  },
  mousewheel: false,
  speed: 2500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

var swiper = new Swiper('.slider-multiple-on-screen', {
  navigation: {
    nextEl: ".slider-multiple-on-screen .swiper-button-next",
    prevEl: ".slider-multiple-on-screen .swiper-button-prev",
  },
  pagination: false,
  mousewheel: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    640: {
        slidesPerView: 2,
        spaceBetween: 0,
        slideToClickedSlide: true,
        spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});

var swiper = new Swiper('.slider-video', {
  spaceBetween: 30,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".slider-video .swiper-button-next",
    prevEl: ".slider-video .swiper-button-prev",
  },
  pagination: false,
  mousewheel: false,
});

// scroll //
(function($){
  $(window).load(function(){
    
    $("#menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector:"#menu a"
    });
    
    $("a[rel='next']").click(function(e){
      e.preventDefault();
      var to=$(this).parent().parent().parent("section").next().attr("id");
      $.mPageScroll2id("scrollTo",to);
      // $(".menu-responsive").removeClass('menu-responsive-active');
    });
    
  });
})(jQuery);


// var btns = document.getElementsByClassName('burger-open');
// var par = document.getElementsByClassName('burger-close');

// btns[0].onclick = function() {
//   par[0].classList.add("menu-responsive-active");
// }
// btns[1].onclick = function() {
//   par[0].classList.remove("menu-responsive-active");
// }

// $("p").last().addClass("menu-responsive-active");

$(".burger-open").click(function(e) {
  e.preventDefault();
  $(".menu-responsive").removeClass('menu-responsive-active');
  $(".menu-responsive").addClass('menu-responsive-active');
  $("body").addClass('body-hide');
})

$(".burger-close").click(function(e) {
  e.preventDefault();
  $(".menu-responsive").removeClass('menu-responsive-active');
  $("body").removeClass('body-hide');
})

$(".menu-responsive__nav a").click(function(e) {
  e.preventDefault();
  $(".menu-responsive").removeClass('menu-responsive-active');
  $("body").removeClass('body-hide');
})