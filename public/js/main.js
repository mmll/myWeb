$(document).ready(function(){
	applyHeight();
});

function applyHeight(){
	$('.jumbotron').css({height:($(window).height())+"px"});
}