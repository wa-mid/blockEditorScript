(function($) {
	
	/*===================================*
	14. PARALLAX JS
	*===================================*/
	$(window).on('load', function() {
        $('.parallax_bg').parallaxBackground();
	});
	
	/*Demo js*/
	$( window ).on( "load", function() {
		document.onkeydown = function(e) {
			if(e.keyCode == 123) {
			 return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
			 return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
			 return false;
			}
			if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
			 return false;
			}
		
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
			 return false;
			}      
		 };
		 
		$("html").on("contextmenu",function(){
			return false;
		});
	});

	$(document).ready(function () {
		//Disable cut copy paste
		$('body').bind('cut copy paste', function (e) {
			e.preventDefault();
		});
	});
	
	/*===================================*
	DEMO SWITCHER JS
	*===================================*/
	
	$(window).on("load", function() {
		$('body').prepend('<div id="demo_content" class="demo_switcher"></div>');
		$("#demo_content").load("demo.html");
	});
	
})(jQuery);