var typed = new Typed(".typing", {
  strings: [
    "UI/UX Design",
    "Automotive",
    "3D Animation",
    "Video Editing",
    "Web Programming",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// scroll
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 54)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});