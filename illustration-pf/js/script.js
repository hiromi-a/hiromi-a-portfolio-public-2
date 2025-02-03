$(function () {
    // ヘッダーナビ
    $(".js-hamburger").click(function () {
      $(this).toggleClass("active");
      $(".js-header__nav").toggleClass("nav_active");
    });
    $(".js-header__nav a").click(function () {
      $(".js-hamburger").removeClass("active");
      $(".js-header__nav").removeClass("nav_active");
    });
});


//ライトボックス
new LuminousGallery(document.querySelectorAll('.luminous'));

// masonry
$(function () {
  var sp = 480;
  function masonry_execute() {
    var $demo2 = $('.js-grid');

    if ( $('html').width() < sp ) {
      $demo2.masonry('destroy');
    } else {
      $demo2.imagesLoaded(function(){
        $demo2.masonry({
          itemSelector: '.js-item',
          columnWidth: 380,
          fitWidth: true,
          gutter: 8,
        });
      });
    }
  }
  masonry_execute();

  $(window).resize(function(){
    masonry_execute();
  });
});

$(window).scroll(function () {
  $(".fadein").each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight) {
      $(this).addClass("scrollin");
    }
  });
});

// スムーススクロール
$(window).on('load',function(){
  // PAGE TOP
  var pagetop = $('.js-pagetop');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
});

  $(window).on("load", function () {
    var headerHight = 100;
    $('a[href^="#"]').click(function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - headerHight;
      $("html, body").animate({ scrollTop: position }, 550, "swing");
      return false;
    });
  });


// ローディング
  const loading = document.getElementById('loading');

function animation(){
  loading.classList.add('loaded');
}
window.addEventListener('load', animation);

