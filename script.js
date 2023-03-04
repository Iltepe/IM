/* PORTFOLIO */
$(document).ready(function() {
  $(".card").hover(function() {
    $(this).find(".card-img-top").css("background-color", "purple");
  }, function() {
    $(this).find(".card-img-top").css("background-color", "");
  });
});
