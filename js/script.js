$(function() {

  var bgHeight = $('.fv').outerHeight();


// ハンバーガーメニューをクリックする時。
  $('.burger-btn').on('click', function() {

    if ($(window).scrollTop() < bgHeight - 50) {
      $('.header-nav').fadeToggle(300);
      $('.header-nav').toggleClass('open');
      $(this).toggleClass('cross');
      $('body').toggleClass('noscroll');
      $('.burger-musk').fadeToggle(300);
    } else {
      $('.header-nav').fadeToggle(300);
      $('.header-nav').toggleClass('open');
      $(this).toggleClass('cross');
      $(this).toggleClass('black');
      $('body').toggleClass('noscroll');
      $('.burger-musk').fadeToggle(300);
    }

  });

// ナビボタンをクリックする時。 
  $('.nav-item').on('click', function() {
    $('.header-nav').fadeOut(300);
    $('.header-nav').removeClass('open');
    $('.burger-btn').removeClass('cross');
    $('body').removeClass('noscroll');
    $('.burger-musk').fadeOut(300);
  });

// スクロール時、ハンバーガーメニューの色を変化させる。
  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < bgHeight - 50) {
      $('.burger-btn').removeClass('black');
    } else {
      $('.burger-btn').addClass('black');
    }
  });

});
