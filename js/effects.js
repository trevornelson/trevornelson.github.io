$(document).ready(function () {

$('#callouts p').css('opacity', 0.0);

$('#callouts div').hover(
	function(){
		$(this).find('p').stop().fadeTo('fast', 1);
	},
	function(){
		$(this).find('p').stop().fadeTo('fast', 0.0);
	});

});