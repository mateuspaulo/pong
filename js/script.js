"use strict";

window.onload =function() {
	let ballSpeed = 1;
	let y         = 0; // Axis y
	let x         = 0; // Axis x
	let aux       = false;

	function initElemAnim() {
        checkCollision();

        if (!aux) {
        	document.getElementById("ball").style.marginLeft = x + "px";
        	x++;
        	if (x >= 550) {
        		aux = true;
        	}
        } else{
        	document.getElementById("ball").style.marginLeft = x + "px";
        	document.getElementById("ball").style.marginTop  = y + "px";
        	x--;
        	//y++;
        	if (x == 0) {
        		aux = false;
        	}
        }
  	}

  	//loop
	setInterval(initElemAnim, ballSpeed);
};

function checkCollision() {
	//Ball possition
	let offsetsBall = document.getElementById('ball').getBoundingClientRect();
	let ball_y		= offsetsBall.top;
	let ball_X		= offsetsBall.left;

	//Bar 1 possition
	let offsetsBar1 = document.getElementById('bar1').getBoundingClientRect();
	let bar1_y      = offsetsBar1.top;
	let bar1_X      = offsetsBar1.left;

	//Bar 2 possition
	let offsetsBar2 = document.getElementById('bar2').getBoundingClientRect();
	let bar2_y      = offsetsBar2.top;
	let bar2_X      = offsetsBar2.left;
}