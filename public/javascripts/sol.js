
$(document).ready(function(){
  if ($(window).width() < 800) {

    document.getElementById("phonecontact").style.display='inline-block';



  }
  else {
 
    document.getElementById("phonecontact").style.display='none';

  	
   
  }

});


// $(document).ready(function(){
// 	document.getElementById("sola").style.display='none';
// 	document.getElementById("solaphone").style.display='block';
// 	document.getElementById("solc").style.display='none';
// 	document.getElementById("solcphone").style.disply='inline-block';
// })


$(document).ready(function(){
	if($(window).width()<800){
		document.getElementById("solaphone").style.display='inline-block';
		document.getElementById("solcph").style.display='inline-block';
		document.getElementById("soldph").style.display='inline-block';
	}
})