
$(document).ready(function(){
    $("#onlinebt").click(function(){

        document.getElementById("online").style.display=' flex';
        document.getElementById("offline").style.display='none';
    });
});

$(document).ready(function(){
    $("#offlinebt").click(function(){

        document.getElementById("online").style.display='none';
        document.getElementById("offline").style.display='flex ';
    });
});





$(document).ready(function(){
	 $("#s1").hover(function(){
	 	$('#s1').addClass('animated shake');
     });
      $("#s2").hover(function(){
	 	$('#s2').addClass('animated shake');
     });
       $("#s3").hover(function(){
	 	$('#s3').addClass('animated shake');
     });

        $("#s4").hover(function(){
	 	$('#s4').addClass('animated shake');
     });

         $("#s5").hover(function(){
	 	$('#s5').addClass('animated shake');
     });


});





$(document).ready(function(){
	 $("#s1").hover(function(){
	 document.getElementById("show1").style.display='block ';
   document.getElementById("show2").style.display='none ';
   document.getElementById("show3").style.display='none ';
   document.getElementById("show4").style.display='none ';
   document.getElementById("show5").style.display='none ';
   document.getElementById("s1").style.color='#B0C0B4';
   document.getElementById("s2").style.color='white';
   document.getElementById("s3").style.color='white';
   document.getElementById("s4").style.color='white';
   document.getElementById("s5").style.color='white';


  });
      $("#s2").hover(function(){
        document.getElementById("show2").style.display='block ';
        document.getElementById("show1").style.display='none ';
        document.getElementById("show3").style.display='none ';
        document.getElementById("show4").style.display='none ';
        document.getElementById("show5").style.display='none ';
        document.getElementById("s2").style.color='#B0C0B4';
        document.getElementById("s1").style.color='white';
        document.getElementById("s3").style.color='white';
        document.getElementById("s4").style.color='white';
        document.getElementById("s5").style.color='white';
     });
       $("#s3").hover(function(){
         document.getElementById("show3").style.display='block ';
         document.getElementById("show2").style.display='none ';
         document.getElementById("show1").style.display='none ';
         document.getElementById("show4").style.display='none ';
         document.getElementById("show5").style.display='none ';
         document.getElementById("s3").style.color='#B0C0B4';
         document.getElementById("s2").style.color='white';
         document.getElementById("s1").style.color='white';
         document.getElementById("s4").style.color='white';
         document.getElementById("s5").style.color='white';
     });

        $("#s4").hover(function(){
          document.getElementById("show4").style.display='block ';
          document.getElementById("show2").style.display='none ';
          document.getElementById("show3").style.display='none ';
          document.getElementById("show1").style.display='none ';
          document.getElementById("show5").style.display='none ';
          document.getElementById("s4").style.color='#B0C0B4';
          document.getElementById("s2").style.color='white';
          document.getElementById("s3").style.color='white';
          document.getElementById("s1").style.color='white';
          document.getElementById("s5").style.color='white';
     });

         $("#s5").hover(function(){
           document.getElementById("show5").style.display='block ';
           document.getElementById("show2").style.display='none ';
           document.getElementById("show3").style.display='none ';
           document.getElementById("show4").style.display='none ';
           document.getElementById("show1").style.display='none ';
           document.getElementById("s5").style.color='#B0C0B4';
           document.getElementById("s2").style.color='white';
           document.getElementById("s3").style.color='white';
           document.getElementById("s4").style.color='white';
           document.getElementById("s1").style.color='white';
     });


});

$(document).ready(function(){
  $("#f1").hover(function(){
   $('#f1').addClass('animated pulse');
    });
     $("#f2").hover(function(){
   $('#f2').addClass('animated pulse');
    });
      $("#f3").hover(function(){
   $('#f3').addClass('animated pulse');
    });

});


$(window).on('resize', function(){

   if($(this).width() <800){
      document.getElementById("dp").style.display='inline-block';
      document.getElementById("desrowphone").style.display='inline-block';
      document.getElementById("onoffphone").style.display='inline-block';
      document.getElementById("carouselExampleIndicators").style.display='inline-block';
      document.getElementById("phonesol").style.display='inline-block';
      document.getElementById("phonefe").style.display='inline-block';
      document.getElementById("phonecontact").style.display='inline-block';
      // document.getElementById("serphone").style.display='inline-block';
      // document.querySelectorAll('.nav.justify-content-end').style.display='none';
   }
   else {
     document.getElementById("dp").style.display='none';
     document.getElementById("desrowphone").style.display='none';
     document.getElementById("onoffphone").style.display='none';
     document.getElementById("carouselExampleIndicators").style.display='none';
     document.getElementById("phonesol").style.display='none';
     document.getElementById("phonefe").style.display='none';
     document.getElementById("phonecontact").style.display='none';
    //  document.getElementById("serphone").style.display='none';
      //  document.querySelectorAll('.nav.justify-content-end').style.display='flex';
   }
});

$(document).ready(function(){
  if ($(window).width() < 800) {
    document.getElementById('dp').style.display='inline-block';
    document.getElementById("desrowphone").style.display='inline-block';
    document.getElementById("onoffphone").style.display='inline-block';
    document.getElementById("carouselExampleIndicators").style.display='inline-block';
    document.getElementById("phonesol").style.display='inline-block';
    document.getElementById("phonefe").style.display='inline-block';
    document.getElementById("phonecontact").style.display='inline-block';
    document.getElementById("dropmb").style.display='inline-block';
    document.getElementById("dpbtn").style.display='inline-block';
  }
  else {
    document.getElementById("dp").style.display='none';
    document.getElementById("desrowphone").style.display='none';
    document.getElementById("onoffphone").style.display='none';
    document.getElementById("carouselExampleIndicators").style.display='none';
    document.getElementById("phonesol").style.display='none';
    document.getElementById("phonecontact").style.display='none';
     document.getElementById("dropmb").style.display='none';
     document.getElementById("dpbtn").style.display='none';
    // document.getElementById("serphone").style.display='none';
  }

});



// $(document).ready(function(){
//   if ($(window).width() < 800) {
//     document.getElementById("serphone").style.display='inline-block';
//   }
//   else{
//      document.getElementById("serphone").style.display='none';
//   }
// });
//
// $(window).on('resize',function(){
//   if ($(window).width() < 800) {
//     document.getElementById("serphone").style.display='inline-block';
//
//   }
//   else{
//      document.getElementById("serphone").style.display='none';
//   }
// });
$(window).on("scroll touchmove", function () {
    $("nav.navbar.navbar-light.bg-faded.fixed-top").toggleClass('tiny', $(document).scrollTop() > 0);
});
function move() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
// $(document).ready(function(){
//   if($('body').scrollTo('#data')){
//     move();
//   }
// })

// $(window).scroll(function() {
//   var height = $(window).scrollTop();

//   if(height  > 800) {
//       move();
//       $(window).off('scroll');
//   }
// });

// $(document).ready(function() {
  
//   var $meters = $(".meter > span");
//   var $section = $('#data');
//   var $queue = $({});
  
//   function loadDaBars() {
//       $(".meter > span").each(function() {
//         $(this)
//           .data("origWidth", $(this).width())
//           .width(0)
//           .animate({
//             width: $(this).data("origWidth")
//           }, 1200);
//       });
//   }
  
//   $(document).bind('scroll', function(ev) {
//       var scrollOffset = $(document).scrollTop();
//       var containerOffset = $section.offset().top - window.innerHeight;
//       if (scrollOffset > containerOffset) {
//           loadDaBars();
//           // unbind event not to load scrolsl again
//           $(document).unbind('scroll');
//       }
//   });
  
// });
// particlesJS.load('particles-js', '/javascripts/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

$('#apply').on('keypress', function(e) {
  return e.which !== 13;
});