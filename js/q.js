


<!-- Preloader -->

//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'});
	})
//]]>

<!-- smoooth-->
	$(function(){
		 $('a[href*=#]').click(function() {		
		 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			 && location.hostname == this.hostname) {
				 var $target = $(this.hash);
				 $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				 if ($target.length) {
					 var targetOffset = $target.offset().top;
					 $('html,body').animate({scrollTop: targetOffset}, 300);
					 return false;
				}
		   }
	   });
	});


