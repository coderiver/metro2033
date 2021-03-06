$(document).ready(function() {

	//slider
	if ($('.mainslider__slides').length > 0) {
		$('.mainslider__slides').cycle({
			fx:     'scrollHorz',
			speed:  '600',
			timeout: 0,
			after: onAfter,
		  before: onBefore,
			pager:  '.mainslider__nav',
			prev: '.mainslider__prev',
			next: '.mainslider__next'
		});
		function onBefore(currSlideElement, nextSlideElement, options, forwardFlag){
			$('.slide__pic', currSlideElement).addClass('is-hidden').removeClass('is-animated');
		}
		function onAfter(currSlideElement, nextSlideElement, options, forwardFlag){
			$('.slide__pic', nextSlideElement).removeClass('is-hidden').addClass('is-animated');
		}
	};	

	//scroll
	if ($('.news').length>0) {
		pane = $('.news');
		pane.jScrollPane({
	  	autoReinitialise: true,
	  	hideFocus: true,
	  	animateTo: true
		});
		var api = pane.data('jsp');
	};

	//masonry
	if ($('.js-masonry').length > 0) {
		$('.js-masonry').masonry({
		 	itemSelector : '.js-masonry li'
		});
	};
	
});