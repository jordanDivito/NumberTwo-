var vector2 = function()
{
	this.x = 1000;
	this.y = 1000;
};

vector2.prototype.set = function(x,y)
{
	this.x = x;
	this.y = y;
}

vector2.prototype.normlizes = function(x,y)
{
	length = sqrt(this.x, this.y);
	
	var first = this.x + this.y/length;
}

vector2.prototype.add = function()
{
	this.x + this.y;
}