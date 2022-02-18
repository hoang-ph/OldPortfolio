$(document).ready(function () {
  $(window).scroll(function () {
    // Make the navbav sticky when scrolling down the page
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  // Toggle menu button
  $(".menu-btn").click(function () {
    $(".menu-btn").toggleClass("change");
    $(".menu").toggleClass("active");
  });
});
