$(".footer-links-wrapper h3").click(function () {
  if ($(window).width() <= 768) {
    $(this).next().slideToggle();
    $(this).toggleClass("iconRotator");
  }
});

$(window).resize(function () {
  if ($(window).width() > 768) {
    $(".footer-links-wrapper ul").removeAttr("style");
    $(".footer-links-wrapper h3").removeClass("iconRotator");
  }
});
