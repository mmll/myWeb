$(document).ready(function(){
	applyHeight();
});

function applyHeight(){
	$('.topPage').css({height:($(window).height())+"px"});
	$('.mainInfo').css({height:($(window).height())+"px"});
}