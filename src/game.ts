type FieldValue = string;
const emptyField: FieldValue = ""
const emptyBoard: Array<FieldValue> = [emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField]

export class Board {
    private _board: Array<FieldValue> = emptyBoard
    private _playerOne: FieldValue
    private _playerTwo: FieldValue

    /**
     * constructor
     * @param playerOne the sign of player one
     * @param playerTwo the sign of player two
     * @throws Error if either player's sign is equal to emptyField or playerOne and playerTwo are equal
     */
    constructor(playerOne: string, playerTwo: string) {
        if (playerOne == emptyField || playerTwo == emptyField || playerOne == playerTwo) throw new Error("Invalid player")
        this._playerOne = playerOne
        this._playerTwo = playerTwo
    }

    /**
     * get returns the current board
     * @returns the current board as an array of FieldValues
     */
    public get board(): Array<FieldValue> {
        return this._board
    }

    /**
     * clear the board
     */
    public clear() {
        this._board = emptyBoard
    }
    
    /**
     * getPlayerOne returns the sign player one uses
     * @returns this.playerOne
     */
    public get playerOne(): string {
        return this._playerOne
    }

    /**
     * getPlayerTwo returns the sign player one uses
     * @returns this.playerOne
     */
    public get playerTwo(): string {
        return this._playerTwo
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
        if (player != this._playerOne && player != this._playerTwo) {
            throw new Error("Invalid player")
        }
        if (fieldIndex < 0 || fieldIndex > 8) {
            throw new RangeError(`${fieldIndex} does not refernce a field on the board`)
        }
        if (this._board[fieldIndex] != emptyField) {
            throw new Error("Field not empty")
        } else {
            this._board[fieldIndex] = player
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
        return this.movePlayer(fieldIndex, this._playerOne)
    }

    
    /**
     * movePlayerTwo sets player two at fieldIndex
     * @param fieldIndex describes the choosen field
     * @throws RangeError if the given fieldIndex was out of range
     * @returns if the game is over
     */
    public movePlayerTwo(fieldIndex: number): boolean {
        return this.movePlayer(fieldIndex, this._playerTwo)
    }

    /**
     * won tests if player won the current board
     * @param player the player you want to test for
     * @returns true if player won
     * @throws Error if player is neither this.playerOne not this.playerTwo
     */
    public won(player: FieldValue): boolean {
        if (player != this._playerOne && player != this._playerTwo) {
            throw new Error("Invalid player")
        }
        return  (this._board[0] == player && this._board[1] == player && this._board[2] == player) || // top row
                (this._board[3] == player && this._board[4] == player && this._board[5] == player) || // middle row
                (this._board[6] == player && this._board[7] == player && this._board[8] == player) || // bottom row
                (this._board[0] == player && this._board[4] == player && this._board[8] == player) || // top left to bottom right
                (this._board[2] == player && this._board[4] == player && this._board[6] == player) || // top right to bottom left
                (this._board[0] == player && this._board[3] == player && this._board[6] == player) || // left column
                (this._board[1] == player && this._board[4] == player && this._board[7] == player) || // middle column
                (this._board[2] == player && this._board[5] == player && this._board[8] == player);   // right column
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
        return this.won(this._playerOne)
    }

    /**
     * wonPlayerTwo tests if player two wins with the current board
     * @returns if player two won
     */
    public wonPlayerTwo(): boolean {
        return this.won(this._playerTwo)
    }

    /**
     * draw tests if there are no moves left and no player won
     * @returns if the current board is a draw
     */
    public draw(): boolean {
        return this.emptyFields.length == 0 && !(this.wonPlayerOne || this.wonPlayerTwo)
    }

    /**
     * emptyFields looks for empty fields on the board
     * @returns an array of indices of empty fields
     */
    public get emptyFields(): Array<number> {
        let empties: Array<number> = []
        for (let i: number = 0; i < this._board.length; i++) {
            if (this._board[i] == emptyField) empties.push(i)
        }
        return empties
    }

    public loadBoard(old: Array<any>): void {
        for(let i = 0; i < old.length; i++) {
            if (old[i] == this.playerOne) this._board[i] = this.playerOne
            else if (old[i] == this.playerTwo) this._board[i] = this.playerTwo
            else this._board[i] = emptyField
        }
    }
}

class Player {
    private sign: string
    private score: number = 0

    constructor(sign: string) {
        this.sign = sign
    }

    /**
     * win increases the score by one
     */
    public win() {
        this.score++
    }

    /**
     * getScore
     * @returns the score
     */
    public getScore(): number {
        return this.score
    }

    /**
     * getSign
     * @returns the sign of the player
     */
    public getSign(): string {
        return this.sign
    }
}

export class Game {
    board: Board
    /**
     * totalRounds finished
     */
    private totalRounds: number = 0
    private playerOne: Player
    private playerTwo: Player

    constructor(playerOne: string, playerTwo: string) {
        if (playerOne == playerTwo) throw new Error("Invalid player names")
        this.playerOne = new Player(playerOne)
        this.playerTwo = new Player(playerTwo)
        this.board = new Board(playerOne, playerTwo)
    }
}