$(document).ready(function() {
  $("#toggle").click(function() {
    $("img.poster").slideToggle();
  });
  $("button#black-on-white").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
  });
  $("button#white-on-black").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
  });
});
