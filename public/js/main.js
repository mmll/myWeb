$(document).ready(function(){
	applyHeight();
});

function applyHeight(){
	$('.jumbotron').css({height:($(window).height())+"px"});
	$('.mainInfo').css({height:($(window).height())+"px"});
}