$(document).ready(function () {
    $('.carousel').carousel();
});

$(document).ready(function () {
    $('.collapsible').collapsible();
});
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.getInstance(elem);
// instance.open();
// instance.close();
// instance.destroy();
// var instance = M.Carousel.getInstance();

// instance.next();
// instance.next(3); // Move next n times.
// instance.prev();
// instance.prev(3); // Move previous n times.
// instance.set();
// instance.set(3); // Set to nth slide.
// instance.destroy();
//   // Next slide
// $('.carousel').carousel('next');
// $('.carousel').carousel('next', 3); // Move next n times.

// // Previous slide
// $('.carousel').carousel('prev');
// $('.carousel').carousel('prev', 4); // Move prev n times.

// // Set to nth slide
// $('.carousel').carousel('set', 4);

// // Destroy carousel
// $('.carousel').carousel('destroy');

