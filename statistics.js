//Statistics
function pie(ctx, parts, colors)
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
		x: radius,
		y: ctx.canvas.height / 2
	};
	
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	
	let lastend = -(Math.PI / 2);
	for(var i = 0; i < parts.length; i++)
	{
		ctx.beginPath();
		let angle = (parts[i] / total);
		ctx.arc(middle.x, middle.y, radius, lastend, lastend + (2 * Math.PI * angle));
		ctx.lineTo(middle.x, middle.y);
		lastend += (2 * Math.PI * angle);
		ctx.fillStyle = colors[i];
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
	}
}

var valuesOverTime = [];
var stepSizeX = 1;
var stepSizeY = 1;
var maxY = 1;

function line(ctx, values, colors)
{
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	
	valuesOverTime.push(values);
	
	let maxX = valuesOverTime.length;
	for(var i = 0; i < values.length; i++)
	{
		if(values[i] > maxY)
		{
			maxY = values[i];
		}
	}
	
	stepSizeX = drawAxis(ctx, {x: 0, y: ctx.canvas.height}, {x: ctx.canvas.width, y: ctx.canvas.height}, maxX, stepSizeX);
	stepSizeY = drawAxis(ctx, {x: 0, y: ctx.canvas.height}, {x: 0, y: 0}, maxY, stepSizeY);
	drawGridX(ctx, maxX);
	drawGridY(ctx, maxY);
	
	ctx.save();
	
	for(var i = 0; i < valuesOverTime.length; i++)
	{
		for(var j = 0; j < valuesOverTime[i].length; j++)
		{
			ctx.beginPath();
			if(i == 0)
			{
				ctx.moveTo(0, ctx.canvas.height);
			}
			else
			{
				ctx.moveTo((ctx.canvas.width / maxX) * (i), (ctx.canvas.height / maxY) * (maxY - valuesOverTime[i - 1][j]));
			}
			ctx.lineTo((ctx.canvas.width / maxX) * (i + 1), (ctx.canvas.height / maxY) * (maxY - valuesOverTime[i][j]));
			ctx.strokeStyle = colors[j];
			ctx.stroke();
		}
	}
	
	ctx.restore();
}

function drawAxis(ctx, start, end, max, stepSize)
{
	let diffX = end.x - start.x;
	let diffY = end.y - start.y;
	
	let fontSize = 15;
	if(((((max / stepSize) * max.toString().length) * fontSize) > diffX && diffX > 0) || ((((max / stepSize) * max.toString().length) * fontSize) > (-1 * diffY) && diffY < 0))
	{
		stepSize *= 2;
	}
	
	ctx.save();
	for(var i = 1; i <= max; i++)
	{
		ctx.beginPath();
		ctx.moveTo((((diffX / max) * (i - 1)) + start.x), (((diffY / max) * (i - 1)) + start.y));
		ctx.lineTo((((diffX / max) * i) + start.x), (((diffY / max) * i) + start.y));
		ctx.font = fontSize + "px Arial";
		if(i % stepSize == 0)
		{
			ctx.fillText(i, calcInBounds((((diffX / max) * i) + start.x), ctx.canvas.width, 15), calcInBounds((((diffY / max) * i) + start.y), ctx.canvas.height, 15));
		}
		ctx.lineWidth = 5;
		ctx.stroke();
	}
	ctx.restore();
	
	return stepSize;
}

function drawGridX(ctx, length)
{
	ctx.save();
	while(length > ctx.canvas.height)
	{
		length /= 2;
	}
	length = ctx.canvas.width / length;
	for(var i = 0; i < ctx.canvas.width; i+= length)
	{
		ctx.beginPath();
		ctx.moveTo(i, 0);
		ctx.lineTo(i, ctx.canvas.height);
		ctx.lineWidth = .2;
		ctx.stroke();
	}
	ctx.restore();
}

function drawGridY(ctx, length)
{
	ctx.save();
	while(length > ctx.canvas.height)
	{
		length /= 2;
	}
	length = ctx.canvas.height / length;
	for(var i = 0; i < ctx.canvas.height; i+= length)
	{
		ctx.beginPath();
		ctx.moveTo(0, i);
		ctx.lineTo(ctx.canvas.width, i);
		ctx.lineWidth = .2;
		ctx.stroke();
	}
	ctx.restore();
}

function calcInBounds(number, bound, padding)
{	
	if(number < padding)
	{
		number = padding;
	}
	if(number > bound - padding)
	{
		number = bound - padding;
	}
	return number;
}