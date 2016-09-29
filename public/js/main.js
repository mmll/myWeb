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

$(document).ready(function(){
	applyHeight();
	setSkill();
});

function applyHeight(){
	$('.jumbotron').css({height:($(window).height())+"px"});
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
