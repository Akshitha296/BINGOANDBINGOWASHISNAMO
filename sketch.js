var ticket = []
var ran

function setup(){
	createCanvas(400, 400);
	for (i = 0; i < 10; i++){
		var rand = Math.round(random(1, 50));
		ticket.push(rand);
	}
}

function draw(){
	background(255, 202, 42);
	text("Bingo, Press space to play!", 150, 370);
	
	for (i = 0; i < 10; i++){
		textSize(15);
		text(ticket[i], 200, (i+1)*35);
	}

	fill("red");
	text(ran, 300, 200);

}

function keyPressed(){
	if (keyCode === 32){
		ran = Math.round(random(1, 50));
	}

	for (i = 0; i < 10; i++){
		if (ticket[i] === ran){
			ticket[i] = "X";
		}
	}
}