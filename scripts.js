var on = false;
var strict = false;
var start = false;
var running = false;
var limit = 1;
var index = 0;
var sequency = [Math.floor(Math.random() * 4)];
var sequencyCount = 0;
var score = 1;
var sides = ["q1","q2","q3","q4"];

var audio1 = document.getElementById("Audio1");
var audio2 = document.getElementById("Audio2");
var audio3 = document.getElementById("Audio3");
var audio4 = document.getElementById("Audio4");


$( ".on-off" ).click(function() {
	if (!on) {
		$(".on-off-button").css('float', "right");
		on = true;
		$(".screen-number").css('opacity', 1);
		$(".screen-number").html("--");
	}else {
		$(".on-off-button").css('float', "left");
		$(".screen-number").html("--");
		$(".screen-number").css('opacity', 0.3);
		$(".led").css('background-color', '#000');
		$(".q1").css('opacity', 0.6);
		$(".q2").css('opacity', 0.6);
		$(".q3").css('opacity', 0.6);
		$(".q4").css('opacity', 0.6);

		on = false;
		strict = false;
		start = false;
		running = false;
		limit = 1;
		index = 0;
		sequency = [];
		sequency[0] = Math.floor(Math.random() * 4);
		sequencyCount = 0;
		score = 1;
	}
});


$( ".start" ).click(function() {
	if (on) {
		$(".screen-number").html(score);
		start = true;
		setTimeout(function() {run();}, (1200 - (sequency.length * 50)));
	}
});


$( ".strict" ).click(function() {
	if (on) {
		if (!strict) {
			$(".led").css('background-color', '#DC0D29');
			strict = true;
		}else {
			strict = false;
			$(".led").css('background-color', '#000');
		}
	}
});


$( ".q1" ).click(function() {
	if (!running && start) {
		audio1.play();
		$(".q1").css('opacity', 1);
		setTimeout(function() {$(".q1").css('opacity', 0.6);}, 500);
		if (sequency[sequencyCount] == 0) {
			sequencyCount += 1;
			if (sequencyCount == sequency.length) {
				sequencyCount = 0;
				index = 0;
				limit += 1;
				sequency[sequency.length] = Math.floor(Math.random() * 4);
				score += 1;
				setTimeout(function() {run();}, (1200 - (sequency.length * 50)));
			}
		}else {
			if (strict) {
				score = 1;
				limit = 1;
				sequency = [];
				sequency[0] = Math.floor(Math.random() * 4);
			}
			sequencyCount = 0;
			index = 0;
			$(".screen-number").html("!!");
			setTimeout(function() {run();}, (1200 - (sequency.length * 50))); 
		}
	}
});


$( ".q2" ).click(function() {
	if (!running && start) {
		audio2.play();
		$(".q2").css('opacity', 1);
		setTimeout(function() {$(".q2").css('opacity', 0.6);}, 500);
		if (sequency[sequencyCount] == 1) {
			sequencyCount += 1;
			if (sequencyCount == sequency.length) {
				sequencyCount = 0;
				index = 0;
				limit += 1;
				sequency[sequency.length] = Math.floor(Math.random() * 4);
				score += 1;
				setTimeout(function() {run();}, (1200 - (sequency.length * 50)));
			}
		}else {
			if (strict) {
				score = 1;
				limit = 1;
				sequency = [];
				sequency[0] = Math.floor(Math.random() * 4);
			}
			sequencyCount = 0;
			index = 0;
			$(".screen-number").html("!!");
				setTimeout(function() {run(); }, (1200 - (sequency.length * 50)));
		}
	}
});


$( ".q3" ).click(function() {
	if (!running && start) {
		$(".q3").css('opacity', 1);
		setTimeout(function() {$(".q3").css('opacity', 0.6);}, 500);
		audio3.play();
		if (sequency[sequencyCount] == 2) {
			sequencyCount += 1;
			if (sequencyCount == sequency.length) {
				sequencyCount = 0;
				index = 0;
				limit += 1;
				sequency[sequency.length] = Math.floor(Math.random() * 4);
				score += 1;
				setTimeout(function() {run();}, (1200 - (sequency.length * 50)));
			}
		}else {
			if (strict) {
				score = 1;
				limit = 1;
				sequency = [];
				sequency[0] = Math.floor(Math.random() * 4);
			}
			sequencyCount = 0;
			index = 0;
			$(".screen-number").html("!!");
				setTimeout(function() {run(); }, (1200 - (sequency.length * 50)));
		}
	}
});


$( ".q4" ).click(function() {
	if (!running  && start) {
		audio4.play();
		$(".q4").css('opacity', 1);
		setTimeout(function() {$(".q4").css('opacity', 0.6);}, 500);
		if (sequency[sequencyCount] == 3) {
			sequencyCount += 1;
			if (sequencyCount == sequency.length) {
				sequencyCount = 0;
				index = 0;
				limit += 1;
				sequency[sequency.length] = Math.floor(Math.random() * 4);
				score += 1;
				setTimeout(function() {run();}, (1200 - (sequency.length * 50)));
			}
		}else {
			if (strict) {
				score = 1;
				limit = 1;
				sequency = [];
				sequency[0] = Math.floor(Math.random() * 4);
			}
			sequencyCount = 0;
			index = 0;
			$(".screen-number").html("!!");
				setTimeout(function() {run(); }, (1200 - (sequency.length * 50)));
		}
	}
});


function run () {
	if (on) {
		running = true;
		if (score < 21) {
			$(".screen-number").html(score);
			if (index < limit) {
				$("."+sides[sequency[index]]).css('opacity', 1);
				if (sequency[index] == 0) {
					audio1.play();
				}else if (sequency[index] == 1) {
					audio2.play();
				}else if (sequency[index] == 2) {
					audio3.play();
				}else if (sequency[index] == 3) {
					audio4.play();
				}
				setTimeout(function() { change(sequency[index]) }, 1000);
			}else {
				running = false;
			}
		}else {
			$(".screen-number").html("Win");

			start = false;
			strict = false;
			index = 0;
			sequency = [];
			sequency[0] = Math.floor(Math.random() * 4);
			sequencyCount = 0;
			limit = 1;
			running = false;
			score = 1;
		}
	}
}


function change (value) {
	index += 1;
	$("."+sides[value]).css('opacity', 0.6);
	setTimeout(function() { run(); }, 1000);
	
}