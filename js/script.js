var mydivs=new Array('#terms','#tab-18', '#description', '#connection');

function opcl(arr, e){
    if ($(e).css('display') == 'none'){
        for(var i in arr){   
           $(arr[i]).hide();     
        }
        $(e).show();       
    }
}




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

	$('.accordion__title').click(function(event) {
		$(this).find('.icon-pointer-down').toggleClass('rotate');
		$(this).toggleClass('collapsed');
		$(this).parent().find('.accordion__content').stop().slideToggle(300)
	});

	$('.nav-tabs li').click(function(event) {
		$('.nav-tabs li').removeClass('active');
		$(this).addClass('active')
	});

});




