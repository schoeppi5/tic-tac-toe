# tic-tac-toe

#This is a Tic Tac Toe game that you can play against an easy, medium or hard bot

##Introduction
This is a small project of mine, completed in one day. I initally made it for a bet with a colleague, who told me he was unbeatable in this very simple game. So I created this bot to show him, that even he would lose.

##The Code

###Easy Bot
This one just randomly selects a avaiable slot on the board. Nothing more there

###Medium bot
This one iterates through all available slots and if there is a move the human player could make in order to win, it blocks it. if there isn't it just chooses the next available slot.

###Unbeatable Bot
This one was a bit tricky and the algorithm behind is called minimax I think. But after reading a few tutorials about it, it is clear to me know what it does. It basically iterates through all available moves, makes a move, switches the perspective to the humans perspective and calls it self. So it recursively gets all possibillities the game could end and chooses the best move to make in order to win

##Roadmap

To be honest: I don't know if I even come back to this, but in case I do there are a few things I would want to add:
  1. Bot vs Bot (why not)
  2. Human vs. Human
  3. Maybe an online mode (very low priority)
  4. There is always more one can add to something like that

####P.S.: I am sorry if I made spelling mistakes or some other mistakes 
