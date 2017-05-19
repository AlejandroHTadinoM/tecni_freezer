function resizeCards () {
	var heights = $(".card").map(function() {		        
			return $(this).height();		   
		}).get(),
	maxHeight = Math.max.apply(null, heights);
	$(".card").height(maxHeight);
};
$(window).resize(resizeCards());
resizeCards();