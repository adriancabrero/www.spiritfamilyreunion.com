$(document).ready(function() {
   
//
	// SmoothScroll
	//
	
	$('a[href*=#]').click(function() {

		// duration in ms
		var duration=1000;

		// easing values: swing | linear
		var easing='swing';

		// get / set parameters
		var newHash=this.hash;
		var oldLocation=window.location.href.replace(window.location.hash, '');
		var newLocation=this;
		
		// make sure it's the same location		
		if(oldLocation+newHash==newLocation)
		{
			// get target
			var target=$(this.hash+', a[name='+this.hash.slice(1)+']').offset().top;

			// adjust target for anchors near the bottom of the page
			if(target > $(document).height()-$(window).height()) target=$(document).height()-$(window).height();			
			
			// animate to target and set the hash to the window.location after the animation
			$('html, body').animate({ scrollTop: target }, duration, easing, function() {

				// add new hash to the browser location
				window.location.href=newLocation;
			});

			// cancel default click action
			return false;
		}
	});
	
//resize logo
	
	$( window ).scroll(function() {
	     if($(window).scrollTop() > 0){
	       $('.header_nav').css({'width': '150'}); 
	     }else{
	         $('.header_nav').css({'width': '396'}); 
	     }
		 
		 
    
	});


  //   $(document).ready(function(){
  //        resizeDiv();
  //    });
  //
  //    window.onresize = function(event) {
  //        resizeDiv();
  //    }
  // // Height of #home and #info
  //   function resizeDiv() {
  //       vpw = $(window).width();
  //       vph = $(window).height();
  //       $('#social').css({'height': vph  + 'px'});
  //   }
	
});


