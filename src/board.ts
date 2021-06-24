type FieldValue = string;
const emptyField: FieldValue = ""
const emptyBoard: Array<FieldValue> = [emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField]

class Board {
    private board: Array<FieldValue> = emptyBoard
    private playerOne: FieldValue
    private playerTwo: FieldValue

    /**
     * constructor
     * @param playerOne the sign of player one
     * @param playerTwo the sign of player two
     * @throws Error if either player's sign is equal to emptyField or playerOne and playerTwo are equal
     */
    constructor(playerOne: string, playerTwo: string) {
        if (playerOne == emptyField || playerTwo == emptyField || playerOne == playerTwo) throw new Error("Invalid player")
        this.playerOne = playerOne
        this.playerTwo = playerTwo
    }

    /**
     * get returns the current board
     * @returns the current board as an array of FieldValues
     */
    public get(): Array<FieldValue> {
        return this.board
    }

    /**
     * clear the board
     */
    public clear() {
        this.board = emptyBoard
    }
    
    /**
     * getPlayerOne returns the sign player one uses
     * @returns this.playerOne
     */
    public getPlayerOne(): string {
        return this.playerOne
    }

    /**
     * getPlayerTwo returns the sign player one uses
     * @returns this.playerOne
     */
     public getPlayerTwo(): string {
        return this.playerTwo
    }

    /**
     * movePlayer sets player at fieldIndex
     * @param fieldIndex on the board. 0-9 from the top left to the bottom right
     * @param player the player who is making a move
     * @returns if the game is over
     * @throws Error if field is not empty
     * @throws Error if player is neither this.playerOne nor this.playerTwo
     * @throws RangeError if not 0 <= fieldIndex <= 8
     */
    public movePlayer(fieldIndex: number, player: FieldValue): boolean {
        if (player != this.playerOne && player != this.playerTwo) {
            throw new Error("Invalid player")
        }
        if (fieldIndex < 0 || fieldIndex > 8) {
            throw new RangeError(`${fieldIndex} does not refernce a field on the board`)
        }
        if (this.board[fieldIndex] != emptyField) {
            throw new Error("Field not empty")
        } else {
            this.board[fieldIndex] = player
            return this.gameOver()
        }
    }

    /**
     * movePlayerOne sets player one at fieldIndex
     * @param fieldIndex describes the choosen field
     * @throws RangeError if the given fieldIndex was out of range
     * @returns if the game is over
     */
    public movePlayerOne(fieldIndex: number): boolean {
        return this.movePlayer(fieldIndex, this.playerOne)
    }

    
    /**
     * movePlayerTwo sets player two at fieldIndex
     * @param fieldIndex describes the choosen field
     * @throws RangeError if the given fieldIndex was out of range
     * @returns if the game is over
     */
    public movePlayerTwo(fieldIndex: number): boolean {
        return this.movePlayer(fieldIndex, this.playerTwo)
    }

    /**
     * won tests if player won the current board
     * @param player the player you want to test for
     * @returns true if player won
     * @throws Error if player is neither this.playerOne not this.playerTwo
     */
    public won(player: FieldValue): boolean {
        if (player != this.playerOne && player != this.playerTwo) {
            throw new Error("Invalid player")
        }
        return  (this.board[0] == player && this.board[1] == player && this.board[2] == player) || // top row
                (this.board[3] == player && this.board[4] == player && this.board[5] == player) || // middle row
                (this.board[6] == player && this.board[7] == player && this.board[8] == player) || // bottom row
                (this.board[0] == player && this.board[4] == player && this.board[8] == player) || // top left to bottom right
                (this.board[2] == player && this.board[4] == player && this.board[6] == player) || // top right to bottom left
                (this.board[0] == player && this.board[3] == player && this.board[6] == player) || // left column
                (this.board[1] == player && this.board[4] == player && this.board[7] == player) || // middle column
                (this.board[2] == player && this.board[5] == player && this.board[8] == player);   // right column
    }

    /**
     * gameOver tests if the game is over
     * @returns if the game is over
     */
    public gameOver(): boolean {
        return this.wonPlayerOne() || this.wonPlayerTwo() || this.draw()
    }

    /**
     * wonPlayerOne tests if player one wins with the current board
     * @returns if player one won
     */
    public wonPlayerOne(): boolean {
        return this.won(this.playerOne)
    }

    /**
     * wonPlayerTwo tests if player two wins with the current board
     * @returns if player two won
     */
    public wonPlayerTwo(): boolean {
        return this.won(this.playerTwo)
    }

    /**
     * draw tests if there are no moves left and no player won
     * @returns if the current board is a draw
     */
    public draw(): boolean {
        return this.emptyFields().length == 0 && !(this.wonPlayerOne || this.wonPlayerTwo)
    }

    /**
     * emptyFields looks for empty fields on the board
     * @returns an array of indices of empty fields
     */
    public emptyFields(): Array<number> {
        let empties: Array<number> = []
        for (let i: number = 0; i < this.board.length; i++) {
            if (this.board[i] == emptyField) empties.push(i)
        }
        return empties
    }
};