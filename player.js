var Player = function()
{
	this.position = new vector2();
	this.position.set(9*TILE, 0*TILE);
	this.image = document.createElement("img");
	
	this.width = 159;
	this.height = 163;
	
	this.offset = new vector2();
	this.offset.set(-55, -87);
	
	this.velocity = new vector2();
	
	this.falling = true;
	this.jumping = false;
	
	this.image.src = "hero.png"; 

};

Player.prototype.update = function(deltaTime)
{
	var tx = pixelToTile(this.position.x);
	var ty = pixelToTile(this.position.y);
	var nx = (this.position.x)%TILE;
	var ny = (this.position.y)%TILE;
	var cell = cellAtTileCoord(LAYER_PLATFORMS, tx, ty);
	var cellright = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty);
	var celldown = cellAtTileCoord(LAYER_PLATFORMS, tx, ty + 1);
	var celldiag = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty + 1);
	
	var left = false;
	var right = false;
	var jump = false;
	
	//check keypress events
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
	{
		left = true;
	}
	if(keyboard.iskeyDown(keyboard.KEY_RIGHT) == true)
	{
		right = true;
	}
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		jump = true;
	}
	
	var wasLeft = this.velocity.x < 0;
	var wasRight = this.velocity.x > 0;
	var falling = this.falling; 
	var ddx = 0;
	var ddy = GRAVITY;
	
	if(left)
	{
		ddx = dxx - ACCEL;
	}
	else if(wasLeft)
	{
		ddx = dxx + FRICTION;
	}
	if (right)
	{
		ddx = ddx + ACCEL;
	}
	else if(wasright)
	{
		ddx = ddx - FRICTION;
	}
	
	
	if(jump && !this.jumping && !falling)
	{
		ddy = ddy - jump;
		this.jumping = true;
	}
	
	this.position.y = Math.floor(this.position.y + (daltaTime * this.velocity.y));
	this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
	this.velocity.x = bound(this.velocity.x + (deltaTime * ddx), -MAXDX, MAXDX);
	this.velocity.y = bound(this.velocity.y + (deltaTime * ddy), -MAXDY, MAXDY);
	
	
}

Player.prototype.draw = function()
{
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}
