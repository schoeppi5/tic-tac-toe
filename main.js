var won = false;
var contextPie;
var contextLine;
var game = {
	board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
	player1: {sign: "X", points: 0},
	player2: {sign: "O", points: 0},
	totalRounds: 0,
	clear() {
		$('#player1').attr("readonly", false);
		$('#player2').attr("readonly", false);
		currentPlayer = this.player1.sign;
		for(var i = 0; i < this.board.length; i++)
		{
			this.board[i] = i;
		}
		for(var i = 0; i < 9; i++)
		{
			$('#' + i).html("");
		}
	},
	win() {
		if(winning(this.board, this.player1.sign))
		{
			this.player1.points++;
			this.totalRounds++;
			this.updateStats();
			return 1;
		}
		else if(winning(this.board, this.player2.sign))
		{
			this.player2.points++;
			this.totalRounds++;
			this.updateStats();
			return 2;
		}
		else if(availableMoves(this.board, this.player1.sign, this.player2.sign).length == 0)
		{
			this.totalRounds++;
			this.updateStats();
			return 0;
		}
		return -1;
	},
	updateStats()
	{
		$('.withBtn').css("visibility", "visible");
		let color1 = getComputedStyle(document.body).getPropertyValue("--head-color");
		let color2 = getComputedStyle(document.body).getPropertyValue("--main-txt-color");
		let color3 = getComputedStyle(document.body).getPropertyValue("--txt-black");
		pie(contextPie, [this.player1.points, this.player2.points, this.totalRounds - this.player1.points - this.player2.points], [color1, color2, color3]);
		line(contextLine, [this.player1.points, this.player2.points, (this.totalRounds - this.player1.points - this.player2.points)], [color1, color2, color3]);
		$('#total').html("Total Rounds: " + this.totalRounds);
		let percentWin1 = Math.floor((this.player1.points / this.totalRounds) * 100);
		let percentWin2 = Math.floor((this.player2.points / this.totalRounds) * 100);
		let percentTie = Math.floor(((this.totalRounds - this.player1.points - this.player2.points) / this.totalRounds) * 100);
		$('#win1').html("Wins " + this.player1.sign + ": " + this.player1.points + " (" + percentWin1 + "%)");
		$('#win2').html("Wins " + this.player2.sign + ": " + this.player2.points + " (" + percentWin2 + "%)");
		$('#tie').html("Ties: " + (this.totalRounds - this.player1.points - this.player2.points) + " (" + percentTie + "%)");
	},
	clearStats()
	{
		$('.withBtn').css("visibility", "hidden");
		$('#total').html("");
		$('#win1').html("");
		$('#win2').html("");
		$('#tie').html("");
		contextPie.clearRect(0, 0, contextPie.canvas.width, contextPie.canvas.height);
		contextLine.clearRect(0, 0, contextLine.canvas.width, contextLine.canvas.height);
		valuesOverTime = [];
		stepSizeX = 1;
		stepSizeY = 1;
		maxY = 1;
	},
	resetPoints()
	{
		this.player1.points = 0;
		this.player2.points = 0;
		this.totalRounds = 0;
	}
};

function update()
{
	$('table tr td:not(:first-child)').css("border-left", ".15rem solid");
	$('table tr:not(:first-child) td').css("border-top", ".15rem solid");
	
	$('#player1').val(game.player1.sign);
	$('#player2').val(game.player2.sign);
	
	$('#p1').html(game.player1.points);
	$('#p2').html(game.player2.points);
	
	$('.banner').stop().hide();
	
	game.clear();
	
	won = false;
}

function showBanner(code)
{
	won = true;
	var banner = $('.banner');
	switch(code)
	{
		case 0:
			banner.html("Tie");
			banner.fadeIn(500);
			break;
		case 1:
			banner.html(game.player1.sign + " wins");
			banner.fadeIn(500);
			break;
		case 2:
			banner.html(game.player2.sign + " wins");
			banner.fadeIn(500);
			break;
		default:
			break;
	}
}

function getSpace()
{
	return Math.floor($('.game').height() - $('.form').outerHeight() - $('table').height());
}

function place()
{
	$('.table-container').css("padding-top", getSpace() / 2);
	$('#statistic').css("margin-top", $('.form').outerHeight());
	$('#controls').css("margin-top", $('.form').outerHeight());
	if(parseInt($('.table-container').css("padding-top")) > $('#statistic').height())
	{
		$('#statistic').addClass("landscape");
	}
	else
	{
		$('#statistic').removeClass("landscape");
	}
}

function showBvBUI()
{
	$('#bot1').css("visibility", "visible");
	$('#bot2').css("visibility", "visible");
	$('#selectMain #stop').html("Stop");
	$('#selectMain button').show();
	$('#selectMain input[type=range]').show();
	place();
}

function hideBvBUI()
{
	$('#bot1').css("visibility", "hidden");
	$('#bot2').css("visibility", "hidden");
	$('#selectMain button').hide();
	$('#selectMain input[type=range]').hide();
	place();
}

var difficultyOffset = 3;
var mode = 1;
var currentPlayer = game.player1.sign;
var runBotGame = false;
var gameCounter = [];
var speed;
	
$(document).ready(function()
{
	var canvas = document.getElementById("pie");
	contextPie = canvas.getContext("2d");
	canvas = document.getElementById("line");
	contextLine = canvas.getContext("2d");
	
	speed = -1 * $('#speed').val();
	
	place();
	
	update();
	
	$(window).resize(function(){place();});
	$(window).on("orientationchange", function(){place();});
	
	$('#player1').on("change", function()
	{
		if(currentPlayer == game.player1.sign && currentPlayer != game.player2.sign)
		{
			currentPlayer = $(this).val();
		}
		game.player1.sign = $(this).val();
	});
	
	$('#player2').on("change", function()
	{
		if(currentPlayer == game.player2.sign && currentPlayer != game.player1.sign)
		{
			currentPlayer = $(this).val();
		}
		game.player2.sign = $(this).val();
	});
	
	$('#speed').on("change", function()
	{
		speed = -1 * $('#speed').val();
	});
	
	$('.banner').click(function()
	{
		update();
	});
	
	$('#statistic h2').click(function()
	{
		console.log("CLICK!");
		$('#ddArrow').toggleClass("rotate");
		$('#dropDown').slideToggle(400, function(){$('#statistic h2').toggleClass("inactive");});
	});
	
	$('#difficulty').on("change", function(){
		hideBvBUI();
		runBotGame = false;
		game.resetPoints();
		game.clearStats();
		for(var i = 0; i < gameCounter.length; i++)
		{
			clearInterval(gameCounter[i]);
		}
		gameCounter = [];
		switch($(this).val())
		{
			case "1":
				difficultyOffset = 1;
				mode = 1;
				break;
			case "2":
				difficultyOffset = 2;
				mode = 1;
				break;
			case "3":
				difficultyOffset = 3;
				mode = 1;
				break;
			case "4":
				mode = 2;
				break;
			case "5":
				mode = 3;
				showBvBUI();
				runBotGame = true;
				botGame();
				break;
		}
		update();
	});
	
	$('#selectMain #restart').click(function()
	{
		runBotGame = false;
		game.resetPoints();
		game.clearStats();
		for(var i = 0; i < gameCounter.length; i++)
		{
			clearInterval(gameCounter[i]);
		}
		gameCounter = [];
		$('#difficulty').trigger("change");
	});
	
	$('#selectMain #stop').click(function()
	{
		if(runBotGame)
		{
			runBotGame = false;
			for(var i = 0; i < gameCounter.length; i++)
			{
				clearInterval(gameCounter[i]);
			}
			gameCounter = [];
			$(this).html("Start");
		}
		else
		{
			runBotGame = true;
			botGame();
			$(this).html("Stop");
		}
	});
	
	$('td').click(function()
	{
		if(!won && !runBotGame)
		{
			$('#player1').attr("readonly", true);
			$('#player2').attr("readonly", true);
			$('#player1').css("background-color", "white");
			$('#player2').css("background-color", "white");
			if((game.player1.sign === game.player2.sign) || !isNaN(game.player1.sign) || !isNaN(game.player2.sign))
			{
				$('#player1').css("background-color", "var(--txt-error)");
				$('#player2').css("background-color", "var(--txt-error)");
				$('#player1').attr("readonly", false);
				$('#player2').attr("readonly", false);
				return;
			}
			if($(this).html() != game.player1.sign && $(this).html() != game.player2.sign)
			{
				var index = $(this).attr("id");
				$(this).html(currentPlayer);
				game.board[index] = currentPlayer;
				var win = game.win();
				if(win > -1)
				{
					showBanner(win);
					return;
				}
				if(mode == 1)
				{
					botTurn();
				}
				else if(mode == 2)
				{
					if(currentPlayer == game.player1.sign)
					{
						currentPlayer = game.player2.sign;
					}
					else
					{
						currentPlayer = game.player1.sign;
					}
				}
			}
		}
	});
});

function botTurn()
{
	var answer;
	switch(difficultyOffset)
	{
		case 1:
			answer = easy(game.board, game.player1.sign, game.player2.sign, game.player2.sign);
			break;
		case 2:
			answer = medium(game.board, game.player1.sign, game.player2.sign, game.player2.sign);
			break;
		case 3:
			answer = minimax(game.board, game.player1.sign, game.player2.sign, game.player2.sign, game.player2.sign);
			break;
		default:
			answer = minimax(game.board, game.player1.sign, game.player2.sign, game.player2.sign, game.player2.sign);
			break;
	}
	game.board[answer.index] = game.player2.sign;
	$('#' + answer.index).html(game.player2.sign);
	win = game.win();
	if(win > -1)
	{
		showBanner(win);
	}
}

function setMove(player, sign)
{
	if(game.board[player.index] != game.player1.sign && game.board[player.index] != game.player2.sign)
	{
		game.board[player.index] = sign;
		$('#' + player.index).html(sign);
	}
	else
	{
		console.log("Invalid Move");
		console.log(game.board);
		console.log(player);
		console.log(sign);
	}
}

function botGame()
{
	$('#player1').attr("readonly", true);
	$('#player2').attr("readonly", true);
	$('#player1').css("background-color", "white");
	$('#player2').css("background-color", "white");
	if((game.player1.sign === game.player2.sign) || !isNaN(game.player1.sign) || !isNaN(game.player2.sign))
	{
		$('#player1').css("background-color", "var(--txt-error)");
		$('#player2').css("background-color", "var(--txt-error)");
		$('#player1').attr("readonly", false);
		$('#player2').attr("readonly", false);
		return;
	}
	var currentBot = game.player1.sign;
	gameCounter.push(setInterval(function()
	{
		if(!runBotGame)
		{
			for(var i = 0; i < gameCounter.length; i++)
			{
				clearInterval(gameCounter[i]);
			}
			gameCounter = [];
		}
		var win = game.win();
		if(win > -1)
		{
			for(var i = 0; i < gameCounter.length; i++)
			{
				clearInterval(gameCounter[i]);
			}
			gameCounter = [];
			setTimeout(function(){
				update();
				if(runBotGame)
				{
					botGame();
				}
			}, speed * 2);
		}
		else
		{
			if((availableMoves(game.board, game.player1.sign, game.player2.sign).length > 0) && runBotGame)
			{
				if(currentBot == game.player1.sign && runBotGame)
				{
					bot1Move();
					currentBot = game.player2.sign;
				}
				else
				{
					bot2Move();
					currentBot = game.player1.sign;
				}
			}
		}
	}, speed));
}

function bot1Move()
{
	switch($('#difficultyBot1').val())
	{
		case "1":
			setMove(easy(game.board, game.player1.sign, game.player2.sign, game.player1.sign), game.player1.sign);
			break;
		case "2":
			setMove(medium(game.board, game.player1.sign, game.player2.sign, game.player1.sign), game.player1.sign);
			break;
		case "3":
			setMove(minimax(game.board, game.player1.sign, game.player2.sign, game.player1.sign, game.player1.sign), game.player1.sign);
			break;
	}
}

function bot2Move()
{
	switch($('#difficultyBot2').val())
	{
		case "1":
			setMove(easy(game.board, game.player1.sign, game.player2.sign, game.player2.sign), game.player2.sign);
			break;
		case "2":
			setMove(medium(game.board, game.player1.sign, game.player2.sign, game.player2.sign), game.player2.sign);
			break;
		case "3":
			setMove(minimax(game.board, game.player1.sign, game.player2.sign, game.player2.sign, game.player2.sign), game.player2.sign);
			break;
	}
}