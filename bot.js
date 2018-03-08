//Hard bot
function minimax(board, player1, player2, currentPlayer)
{
	//player1 = human
	//player2 = bot
	var blanks = availableMoves(board, player1, player2); //Gets all blank spaces
	
	if(winning(board, player1))
	{
		return {score: -10, estimated: 1};	//human wins
	}
	else if(winning(board, player2))
	{
		return {score: 10, estimated: 1};	//bot wins
	}
	else if(blanks.length == 0)
	{
		return {score: 0, estimated: 1};	//draw
	}
	
	var moves = []; //Collection of all calculated moves
	
	for(var i = 0; i < blanks.length; i++)
	{
		var move = {}; //Represents one calculated Move
		move.index = board[blanks[i]]; //Stores the index so the bot knows later on which move to make
		
		board[blanks[i]] = currentPlayer; //Actually manipulates the board
		
		//Calls it self on the new board and switches the current player each time
		if(currentPlayer == player1)
		{
			var result = minimax(board, player1, player2, player2);
			move.score = result.score; //This determines whether the move ends with a win, loss or draw
		}
		else
		{
			var result = minimax(board, player1, player2, player1);
			move.score = result.score; //This determines whether the move ends with a win, loss or draw
		}
		
		//Reset the board to calculate the next move
		board[move.index] = move.index;

		moves.push(move); //Finally stores the calculated move
	}
	
	//In case it's the Bots turn: select the best move (= the highest score)
	
	var bestMove = 0; //Represent the chosen move in the end
	if(currentPlayer == player2)
	{
		//Here is just a simple Algorithm to find the highest value in an array
		var max = moves[0].score;
		for(var j = 1; j < moves.length; j++)
		{
			if(moves[j].score > max)
			{
				max = moves[j].score;
				bestMove = j; //Best Move = Highest Score
			}
		}
	}
	else //In case it's not: Play the smartest Move against the Bot (= Lowest Score for the Bot)
	{
		var mini = moves[0].score;;
		for(var j = 1; j < moves.length; j++)
		{
			if(moves[j].score < mini)
			{
				mini = moves[j].score;
				bestMove = j;
			}
		}
	}
	
	return moves[bestMove];
}

//Medium bot tries to block the players moves but doesn't actively tries to win
//It looks if there is a move the human could make to win! If there is, block this move.
//If there isn't just select the next available slot
function medium(board, player1, player2)
{
	//player1 = human
	//player2 = bot
	var blanks = availableMoves(board, player1, player2); //Gets all blank spaces
	
	//Gets a move that would result in player1 wins the game
	
	for(var i = 0; i < blanks.length; i++)
	{
		var move = {}; //Represents one calculated Move
		move.index = board[blanks[i]]; //Stores the index so the bot knows later on which move to make
		
		board[blanks[i]] = player1; //Actually manipulates the board
		
		//if the represented move lets player1 win the game that's the best move to make
		if(winning(board, player1))
		{
			return move;
		}
		
		//Reset the board to calculate the next move
		board[move.index] = move.index;
	}
	
	//If there is no move that would lead to the direct win of the player, just make the next move
	return {index: blanks[0]};
}

//Easy Bot just randomly selects a blank space
function easy(board, player1, player2)
{
	var blanks = availableMoves(board, player1, player2);
	var rndMove = Math.floor(Math.random() * Math.floor(blanks.length));
	
	return {index: blanks[rndMove]};
}

function winning(board, player)
{
	return	(board[0] == player && board[1] == player && board[2] == player) ||
			(board[3] == player && board[4] == player && board[5] == player) ||
			(board[6] == player && board[7] == player && board[8] == player) ||
			(board[0] == player && board[4] == player && board[8] == player) ||
			(board[2] == player && board[4] == player && board[6] == player) ||
			(board[0] == player && board[3] == player && board[6] == player) ||
			(board[1] == player && board[4] == player && board[7] == player) ||
			(board[2] == player && board[5] == player && board[8] == player);
}

function availableMoves(board, player1, player2)
{
	return board.filter(space => space != player1 && space != player2);
}