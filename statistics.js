//Statistics
function cake(ctx, parts, colors)
{
	var radius;
	var total = 0;
	for(var i = 0; i < parts.length; i++)
	{
		total += parts[i];
	}
	if(ctx.canvas.width < ctx.canvas.height)
	{
		radius = ctx.canvas.width / 2;
	}
	else
	{
		radius = ctx.canvas.height / 2;
	}
	
	var middle = {
		x: ctx.canvas.width / 2,
		y: ctx.canvas.height / 2
	};
	
	let lastend = -(Math.PI / 2);
	for(var i = 0; i < parts.length; i++)
	{
		ctx.beginPath();
		let angle = (parts[i] / total);
		ctx.arc(middle.x, middle.y, radius, lastend, lastend + (2 * Math.PI * angle));
		ctx.lineTo(middle.x, middle.y);
		lastend += (2 * Math.PI * angle);
		ctx.fillStyle = colors[0];
		colors.shift();
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
	}
}