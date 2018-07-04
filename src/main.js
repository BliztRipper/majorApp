//@prepros-prepend ../node_modules/jquery/dist/jquery.min.js
//@prepros-prepend ../node_modules/bootstrap/dist/js/bootstrap.bundle.js
//@prepros-prepend ../node_modules/slick-carousel/slick/slick.min.js

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
