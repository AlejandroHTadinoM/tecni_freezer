sliderContainer.width(slideW);
slider.height(slideW);
slider.width(slideW * slide.length);
function startSlider () {
	timer = setInterval(function () {
		cSlide++;
		slider.animate({
			'margin-left' : '-=' + slideW
		}, function () {
			if (cSlide === (slide.length - 1)) {
				cSlide = 0;
				slider.css({
					'margin-left' : 0
				});	
			};
		});	
	}, 2000);
};
startSlider();