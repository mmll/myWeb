var technical = [
	{key:"JavaScript",value:5},
	{key:"HTML",value:5},
	{key:"SAPUI5",value:4},
	{key:"CSS",value:4},
	{key:"Bootstrap Framework",value:4},
	{key:"MVC Pattern",value:4},
	{key:"jQuery",value:3},
	{key:"JAVA",value:3},
	{key:"AngularJS",value:2}];

var language = [
	{key:"Chiness",value:5},
	{key:"English",value:4}];

var intro = ['I am a front-end enigneerer,',
	'and a fast learner,',
	'passionate about life and work.',
	"And I'm on the way to become a more professional enigneerer.",
	'I was born in Shanghai,',
	'I really love this charming city.',
	"Now I am ready for exciting life's journey."];
var currentPage = 'profile';

$(document).ready(function(){
	showIntro();
	applyHeight();
	setSkill();
	setFood();
});
function setFood(){
	$(".owl-carousel").owlCarousel({
    items : 6,
    nav: true
  });
}
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
function applyHeight(){
/*	$('.jumbotron').css({height:($(window).height())+"px"});
	$('.mainContainer').css({height:($(window).height())+"px"});
	$('.profile').css({height:($(window).height())+"px"});
	$('.experience').css({height:($(window).height())+"px"});
	$('.ability').css({height:($(window).height())+"px"});
	$('.downBtn').css({top:($(window).height())-100+"px",
		left:($(window).width())/2-40+'px',
		position:"absolute"});*/
}
/*function animatePage(page){
	var nextPage = page;
	if(nextPage == currentPage){
		return;
	}
	else{
		$("."+currentPage)[0].className = currentPage + ' pt-page-rotateFall';
		window.setTimeout(function(){
			$("."+currentPage)[0].style.display = 'none';
			$("."+nextPage)[0].style.display = 'block';
			$("."+nextPage)[0].className = nextPage + ' pt-page-scaleUp';
			currentPage = nextPage;
		},800);
	}
}*/
function showIntro(){
	var obj = $('#introPanel')[0];
	setTimeout(function(){
			obj.innerHTML = intro[0];
			obj.classList.add('introPanelFade');
		},2700) 
	var curIndex = 0;
	var intervalID = setInterval(function(){
		++curIndex;
		if(curIndex >= intro.length-1){
			clearInterval(intervalID);
		}
		obj.classList.remove('introPanelFade');
		setTimeout(function(){
			obj.innerHTML = intro[curIndex];
			obj.classList.add('introPanelFade');
		},2300) 
	},3800);
}
function setSkill(){
	for(var i=0; i<technical.length;i++){
		var string = "<li><span class='spanTitle'>"+technical[i].key+"</span>";
		var emptyStar = 5-technical[i].value;
		for(var j=0; j<emptyStar; j++){
			string = string+"<span class='glyphicon glyphicon-star-empty'></span>";
		}
		for(var j=0; j<technical[i].value; j++){
			string = string+ "<span class='glyphicon glyphicon-star'></span>";
		}
		string = string+"</li>";
		$('#techList').append(string);
	}
	language.forEach(function(item){
		var string = "<li><span class='spanTitle'>"+item.key+"</span>";
		var emptyStar = 5-item.value;
		for(var j=0; j<emptyStar; j++){
			string = string+"<span class='glyphicon glyphicon-star-empty'></span>";
		}
		for(var j=0; j<item.value; j++){
			string = string+ "<span class='glyphicon glyphicon-star'></span>";
		}		
		string = string+"</li>";
		$("#language").append(string);
	});
}






