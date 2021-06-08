// ハンバーガーメニュー

$(function() {
  $('.burger-btn').on('click', function() {
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
  });

  $('.header-item').on('click', function() {
    $('.header-nav').fadeOut(300);
    $('.burger-btn').removeClass('cross');
  });
});

