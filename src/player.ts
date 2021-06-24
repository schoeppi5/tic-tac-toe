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