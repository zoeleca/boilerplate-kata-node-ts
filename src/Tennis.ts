export class Tennis {
  private playerOneScore: number = 0;
  private playerTwoScore: number = 0;

  playerOneScored(): void {
    this.playerOneScore++;
  }

  playerTwoScored(): void {
    this.playerTwoScore++;
  }

  getScore(): string {
    if (this.playersScoresAreEqual()) return this.scoresEquality();

    if (this.hasWinner()) return this.scoreWinner();

    if (this.hasAdvantage()) return this.scoreAdvantage();

    return this.regularScore();
  }

  private regularScore(): string {
    return `${scoresConvertion.get(this.playerOneScore)}-${scoresConvertion.get(
      this.playerTwoScore
    )}`;
  }

  private scoreAdvantage(): string {
    return `Advantage ${this.playerWithTheBiggestScore()}`;
  }

  private hasAdvantage(): boolean {
    return this.playerOneScore >= 3 && this.playerTwoScore >= 3;
  }

  private scoreWinner(): string {
    return `Win for ${this.playerWithTheBiggestScore()}`;
  }

  private hasWinner(): boolean {
    return (
      (this.playerOneScore > 3 || this.playerTwoScore > 3) &&
      this.playerScoreDifference() > 1
    );
  }

  private scoresEquality(): string {
    if (this.playerOneScore >= 3) {
      return "Deuce";
    }
    return `${scoresConvertion.get(this.playerOneScore)}-All`;
  }

  private playersScoresAreEqual(): boolean {
    return this.playerOneScore === this.playerTwoScore;
  }

  private playerScoreDifference(): number {
    return Math.abs(this.playerOneScore - this.playerTwoScore);
  }

  private playerWithTheBiggestScore(): string {
    return this.playerOneScore > this.playerTwoScore ? "player1" : "player2";
  }
}

const scoresConvertion = new Map<number, string>();
scoresConvertion.set(0, "Love");
scoresConvertion.set(1, "Fifteen");
scoresConvertion.set(2, "Thirty");
scoresConvertion.set(3, "Forty");
