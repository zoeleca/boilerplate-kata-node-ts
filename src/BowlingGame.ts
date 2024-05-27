export class BowlingGame {
  //array of arrays(number or string)
  public frameRolls: number[][] = Array.from({ length: 10 }, () => []);
  public frameScore: number[] = [];
  private roundNumber: number = 0;
  private spare: boolean = false;
  private strike: number = 0;
  private bonusRolls: number[] = [];
  public totalPartyScore: number = 0;

  firstRollScore(firstRoundFallenPins: number): void {
    this.registerFirstRollScore(firstRoundFallenPins);
    this.handleProcess(firstRoundFallenPins);
  }

  secondRollScore(secondRollFallenPins: number): void {
    this.registerSecondRollScore(secondRollFallenPins);
    if (this.roundNumber < 9) {
      this.calculateFrameScore();
    }
  }

  bonusRollScore(bonusRollFallenPins: number): void {
    this.registerBonusRollScore(bonusRollFallenPins);
    this.calculateFrameScore();
  }

  private handleProcess(firstRoundFallenPins: number) {
    if (this.spare) {
      this.frameScore[this.roundNumber - 1] += firstRoundFallenPins;
      this.spare = false;
    }

    if (firstRoundFallenPins === 10) {
      this.frameScore.push(firstRoundFallenPins);
      this.strike++;
      if (this.roundNumber < 9) {
        this.roundNumber++;
      } else {
        this.bonusRolls.push(firstRoundFallenPins);
      }
      return;
    }

    if (this.roundNumber >= 9) {
      this.bonusRolls.push(firstRoundFallenPins);
    }
  }

  private calculateFrameScore(): void {
    if (this.roundNumber >= this.frameRolls.length) return;

    let totalFrameScores: number = 0;
    if (this.frameRolls[this.roundNumber]) {
      this.frameRolls[this.roundNumber].forEach((play: number) => {
        totalFrameScores += play;
      });
    }
    this.isSpare(totalFrameScores);

    if (this.roundNumber < 9) {
      if (this.strike > 2) {
        this.frameScore[this.roundNumber - this.strike] = 30;
        this.strike--;
      }

      if (this.strike > 1) {
        this.frameScore[this.roundNumber - this.strike] =
          20 + this.frameRolls[this.roundNumber][0];
        this.strike--;
      }

      if (this.strike > 0) {
        this.frameScore[this.roundNumber - 1] += totalFrameScores;
        this.strike--;
      }

      this.frameScore.push(totalFrameScores);
      this.roundNumber++;
    } else if (this.roundNumber === 9) {
      this.frameScore[9] =
        totalFrameScores +
        (this.bonusRolls[1] ?? 0) +
        (this.bonusRolls[2] ?? 0);
      this.roundNumber++;
    }

    if (this.roundNumber > 9) {
      for (let i = 0; i < this.frameScore.length; i++) {
        this.totalPartyScore += this.frameScore[i];
      }
    }
  }

  private isSpare(totalFrameScores: number) {
    if (totalFrameScores === 10) {
      this.spare = true;
    }
  }

  private registerFirstRollScore(firstRoundFallenPins: number) {
    if (!this.frameRolls[this.roundNumber]) {
      this.frameRolls[this.roundNumber] = [];
    }
    this.frameRolls[this.roundNumber].push(firstRoundFallenPins);
  }
  private registerSecondRollScore(secondRoundFallenPins: number) {
    if (!this.frameRolls[this.roundNumber]) {
      this.frameRolls[this.roundNumber] = [];
    }
    this.frameRolls[this.roundNumber].push(secondRoundFallenPins);
  }

  private registerBonusRollScore(bonusRoundFallenPins: number) {
    if (!this.frameRolls[this.roundNumber]) {
      this.frameRolls[this.roundNumber] = [];
    }
    this.frameRolls[this.roundNumber].push(bonusRoundFallenPins);
  }
}
