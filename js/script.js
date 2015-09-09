$(document).ready(function() {
	/*$('.nav-wrap li').hover(function() {
		$(this).find('.nav.visible').slideDown(300)
	},
	function(){
		$(this).find('.nav.visible').slideUp(300)
	});*/

	/*$('.nav-toggle li').hover(function() {
		if($('.nav.hidden').css('display') == 'none'){
			$('.nav.hidden').slideDown(400)
		}
		/*$('.nav.hidden').stop(true,true).slideDown(400)*/
		
	/*}, function() {
		$('.nav.hidden').hover(function() {
				$(this).css({
					'display' :'block'
					
				});
			}, function() {
				$(this).slideUp(300)

			});
		/*$('.nav.hidden').stop(true,true).slideUp(200)*/
	/*});*/

	/*$('.nav-toggle li').hover(function() {
		$('.nav-toggle li.opened').removeClass('active');
		$('.nav-toggle li').removeClass('active');
		$(this).addClass('active')
	});*/

	$('.nav-toggle li').hover(function() {
		$('.nav-toggle li').removeClass('active');
		$(this).addClass('active');
	}, function() {
		$('.nav-toggle li').removeClass('active');
		$('.nav-toggle li.opened').addClass('active');
	});

});


