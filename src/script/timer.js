// 10 minutes from now
var time_in_minutes = 10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);

function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}

function run_clock(id,endtime){
	var clock = document.getElementById(id);
	function update_clock(){
		var t = time_remaining(endtime);
		clock.innerHTML = t.minutes + ':' + t.seconds;
		if(t.total<=0){ clearInterval(timeinterval); }
	}

	update_clock(); // run function once at first to avoid delay
	var timeinterval = setInterval(update_clock,1000);
}
run_clock('timer',deadline);

// var targetDiv = document.getElementsbyTagname("img");
// var randomNumber = Math.floor((Math.random() * 10) + 1);
//
// var showImage = targetDiv[randomNumber].classList.add("imageVisible");

window.onload = choosePic;

var myImage = new Array("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Coffee_cup_icon.svg/2000px-Coffee_cup_icon.svg.png","https://media3.giphy.com/media/7erBV7JsTvPuU/giphy.gif", "https://media2.giphy.com/media/tcZjpeTkz8VZC/200w.webp", "https://media3.giphy.com/media/l2SpXensc5RhNzfK8/giphy.gif", "https://media3.giphy.com/media/1wrq4RI0WEc3S/200w.webp", "https://media0.giphy.com/media/11Lz1Y4n1f2j96/200w.webp");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myImage.length);
     document.getElementById("RandomImg").src = myImage[randomNum];
}
