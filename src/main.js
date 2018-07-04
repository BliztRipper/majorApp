//@prepros-prepend ../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../node_modules/bootstrap/dist/js/bootstrap.bundle.js
//@prepros-prepend ../node_modules/slick-carousel/slick/slick.min.js

/*jQuery throttle / debounce - v1.1 - 3/7/2010*/
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

$('#movie-carousel').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  centerMode: true,
  lazyLoad: 'ondemand', 
  slidesToScroll: 1,
}); 

$(document).ready(function(){
  $('.bottom-navtab').click(function(e){
    $('.bottom-navtab').css("border-top","")
    $(this).css({'border-top': '3px solid #ff8200'})
  })
  
})


function navToggle(evt, mainTab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(mainTab).style.display = "block";
  evt.currentTarget.className += " active";
}
