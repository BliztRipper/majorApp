//@prepros-prepend ../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../node_modules/bootstrap/dist/js/bootstrap.bundle.js
//@prepros-prepend ../node_modules/slick-carousel/slick/slick.min.js

$('#movie-carousel').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 200,
  centerMode: true,
  lazyLoad: 'ondemand',
  slidesToScroll: 1
});

$(document).ready(function(){
  $('.bottom-navtab').click(function(e){
    $('.bottom-navtab').css("border-top","")
    $(this).css({'border-top': '3px solid #ff8200'})
  })
})

function navToggle(evt, mainTab) {
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(mainTab).style.display = "block";
  evt.currentTarget.className += " active";
}