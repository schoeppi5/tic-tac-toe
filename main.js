var game = {
	board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
	player1: {sign: "X", points: 0},
	player2: {sign: "O", points: 0},
	clear() {
		$('#player1').attr("readonly", false);
		$('#player2').attr("readonly", false);
		this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
		for(var i = 0; i < 9; i++)
		{
			$('#' + i).html("");
		}
	},
	win() {
		if(winning(this.board, this.player1.sign))
		{
			this.player1.points++;
			return 1;
		}
		else if(winning(this.board, this.player2.sign))
		{
			this.player2.points++;
			return 2;
		}
		else if(availableMoves(this.board, this.player1.sign, this.player2.sign).length == 0)
		{
			return 0;
		}
		return -1;
	}
};

function update()
{
	$('table tr td:not(:first-child)').css("border-left", ".15rem solid black");
	$('table tr:not(:first-child) td').css("border-top", ".15rem solid black");
	
	$('#player1').val(game.player1.sign);
	$('#player2').val(game.player2.sign);
	
	$('#p1').html(game.player1.points);
	$('#p2').html(game.player2.points);
	
	$('.banner').stop().hide();
	
	game.clear();
}

function showBanner(code)
{
	var banner = $('.banner');
	switch(code)
	{
		case 0:
			banner.html("Tie");
			banner.fadeIn(1000);
			break;
		case 1:
			banner.html(game.player1.sign + " wins");
			banner.fadeIn(1000);
			break;
		case 2:
			banner.html(game.player2.sign + " wins");
			banner.fadeIn(1000);
			break;
		case -1:
			break;
	}
}
	
	
$(document).ready(function()
{
	var difficultyOffset = 3;
	
	update();
	
	$('#player1').on("change", function()
	{
		game.player1.sign = $(this).val();
	});
	
	$('#player2').on("change", function()
	{
		game.player2.sign = $(this).val();
	});
	
	$('.banner').click(function()
	{
		update();
	});
	
	$('#difficulty').on("change", function(){
		switch($(this).val())
		{
			case "1":
				difficultyOffset = 1;
				break;
			case "2":
				difficultyOffset = 2;
				break;
			case "3":
				difficultyOffset = 3;
				break;
		}
		update();
	});
	
	$('td').click(function()
	{
		$('#player1').attr("readonly", true);
		$('#player2').attr("readonly", true);
		if($(this).html() != game.player1.sign && $(this).html() != game.player2.sign)
		{
			var index = $(this).attr("id");
			$(this).html(game.player1.sign);
			game.board[index] = game.player1.sign;
			var win = game.win();
			if(win > -1)
			{
				showBanner(win);
				return;
			}
			var answer;
			switch(difficultyOffset)
			{
				case 1:
					answer = easy(game.board, game.player1.sign, game.player2.sign);
					break;
				case 2:
					answer = medium(game.board, game.player1.sign, game.player2.sign);
					break;
				case 3:
					answer = minimax(game.board, game.player1.sign, game.player2.sign, game.player2.sign);
					break;
				default:
					answer = minimax(game.board, game.player1.sign, game.player2.sign, game.player2.sign);
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
	});
});