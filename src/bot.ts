interface Bot {
    readonly sign: string
    /**
     * move returns the next move the Bot will make
     * @param board 
     */
    move(board: Board): number
}

class HardBot implements Bot {
    readonly sign: string

    constructor(sign: string) {
        this.sign == sign
    }

    /**
     * move uses the minimax algorithm to determine the best move the bot can make
     * @board the current board being played on
     * @returns the index the bot will move on
     */
    public move(board: Board): number {
        type Move = {
            index: number
            score: number
        }
        let botSign = this.sign
        let foeSign = this.getFoe(board)

        function minimax(board: Board, currentPlayer: string): Move {
            return Math.max.apply(Math, 
                board.emptyFields().map(i => {
                    let move: Move = {index: i, score: 0} // the current move
                    let boardCopy: Board = board // copy the board as to not change it
                    try {
                        let isGameOver: boolean = boardCopy.movePlayer(i, currentPlayer) // make the move
                        if (isGameOver) {
                            if (boardCopy.draw()) {
                                move.score = 0 // noone won
                            } else if (boardCopy.won(botSign)) {
                                move.score = 10 // bot won
                            } else {
                                move.score = -10 // foe won
                            }
                        } else {
                            move.score = minimax(boardCopy, (currentPlayer == botSign ? foeSign : botSign)).score // get best move recursivly
                        }
                    } catch (error) {
                        if (error instanceof RangeError) {
                            console.log(`Move ${i} seems to be taken`)
                        } else {
                            throw error
                        }
                    }
                    return move
                })
            )
        }

        let boardCopy: Board = board
        return minimax(boardCopy, botSign).index
    }

    /**
     * getFoe returns the sign of the player that isn't this bot
     * @param board the board being played on
     * @returns the foe's sign
     */
    private getFoe(board: Board): string {
        if (board.getPlayerOne() == this.sign) return board.getPlayerTwo()
        else return board.getPlayerOne()
    }
}