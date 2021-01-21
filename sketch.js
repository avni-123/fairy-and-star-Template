var fairy, fairyImg;

var star, starImg;

var star, starNight;

var DOWN_ARROW;

var starBody;

var position;

function preload(){
	fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");

	starNight = loadImage("starNight.png");

	starImg = loadImage("starImage.png");

}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(130, 590);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.25;
	fairy.debug = false;
	fairy.setCollider("circle", 0, 0, 500);
	
	var starBody = {
		restitution : 1
	}

	star = createSprite(650,30, starBody);
	star.addImage(starImg);
	star.scale = 0.02;

	console.log(star);
}

function draw() {
  background(starNight);

  if(keyCode === DOWN_ARROW){
	star.addImage("starImg", starImg);
	star.velocityY = 2.8;
  }

  star.y = starBody.position.y;
   
  if(starBody.position.y > 400){
	  star.velocityY = 0;
	  fairy.velocityX = 0;
  }

  drawSprites();

}

function keyPressed() {

  if(keyCode === LEFT_ARROW){
	  fairy.velocityX = -2;
	  fairy.addAnimation("fairyImg", fairyImg);
  }

  if(keyCode === RIGHT_ARROW){
	  fairy.velocityX = 2;
	  fairy.addAnimation("fairyImg", fairyImg);
  }

}
