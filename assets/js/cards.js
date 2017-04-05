$(document).ready(function() {
	var heights = $(".card").map(function() {		        
			return $(this).height();		   
		}).get(),
	maxHeight = Math.max.apply(null, heights);
	$(".card").height(maxHeight);
});