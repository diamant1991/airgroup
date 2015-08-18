$(document).ready(function() {
	$('.nav-wrap').hover(function() {
		$('.nav.visible').slideDown(400)
	});

	$('.nav-toggle li').hover(function() {
		if($('.nav.hidden').css('display') == 'none'){
			$('.nav.hidden').slideDown(400)
		}
		/*$('.nav.hidden').stop(true,true).slideDown(400)*/
		
	}, function() {
		$('.nav.hidden').hover(function() {
				$(this).css({
					'display' :'block'
					
				});
			}, function() {
				$(this).slideUp(300)

			});
		/*$('.nav.hidden').stop(true,true).slideUp(200)*/
	});


});


