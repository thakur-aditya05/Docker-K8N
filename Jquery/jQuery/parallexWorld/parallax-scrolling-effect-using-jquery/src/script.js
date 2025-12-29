$(window).on("scroll", function () {
  var parallax = $(".parallax");
  var scrollPosition = $(this).scrollTop();
  parallax.css("transform", "translateY(" + scrollPosition * 0.5 + "px" + ")");
});
