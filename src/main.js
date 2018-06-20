//@prepros-prepend ../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../node_modules/bootstrap/dist/js/bootstrap.bundle.js
//@prepros-prepend ../node_modules/slick-carousel/slick/slick.min.js

$('#movie-carousel').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});