export class BowlingGame {
  //array of arrays(number or string)
  public frameRolls: number[][] = Array.from({ length: 10 }, () => []);
  public frameScore: number[] = [];
  private currentFrame: number = 0;
  private spare: boolean = false;
  private strike: number = 0;
  public totalPartyScore: number = 0;

  firstRollScore(firstRoundFallenPins: number): void {
    this.registerFirstRollScore(firstRoundFallenPins);
    this.handleProcess(firstRoundFallenPins);
  }

  secondRollScore(secondRollFallenPins: number): void {
    const notfinalFrame = this.currentFrame < 9;
    this.registerSecondRollScore(secondRollFallenPins);
    if (notfinalFrame) {
      this.calculateFrameScore();
    }
  }

  bonusRollScore(bonusRollFallenPins: number): void {
    this.registerBonusRollScore(bonusRollFallenPins);
    this.calculateFrameScore();
  }

  private calculateFrameScore(): void {
    let totalFrameScores: number = 0;
    totalFrameScores = this.sumScoresinFrame(totalFrameScores);
    this.isSpare(totalFrameScores);

    this.handleStrikeScore(totalFrameScores);
  }

  private handleStrikeScore(totalFrameScores: number) {
    if (this.currentFrame < 9) {
      this.calculateStrikeScore(totalFrameScores);
      this.frameScore.push(totalFrameScores);
      this.currentFrame++;
    } else if (this.currentFrame === 9) {
      this.frameScore[9] = totalFrameScores;
      this.currentFrame++;
    }

    if (this.currentFrame > 9) {
      for (const score of this.frameScore) {
        this.totalPartyScore += score;
      }
    }
  }
  calculateStrikeScore(totalFrameScores: number) {
    if (this.strike === 3) {
      this.frameScore[this.currentFrame - this.strike] += 20;
      this.strike--;
    }
    if (this.strike === 2) {
      this.frameScore[this.currentFrame - this.strike] +=
        10 + this.frameRolls[this.currentFrame][0];
      this.strike--;
    }

    if (this.strike === 1) {
      this.frameScore[this.currentFrame - this.strike] += totalFrameScores;
      this.strike--;
    }
  }

  private sumScoresinFrame(totalFrameScores: number) {
    this.frameRolls[this.currentFrame].forEach((play: number) => {
      totalFrameScores += play;
    });
    return totalFrameScores;
  }

  private handleProcess(firstRoundFallenPins: number) {
    this.updateScorewhenSpare(firstRoundFallenPins);

    this.strikeScored(firstRoundFallenPins);
  }

  private strikeScored(firstRoundFallenPins: number) {
    if (firstRoundFallenPins === 10) {
      this.frameScore.push(firstRoundFallenPins);
      this.strike++;
      this.updateRoundNumber();
    }
  }

  private updateRoundNumber() {
    if (this.currentFrame < 9) {
      this.currentFrame++;
    }
  }

  private updateScorewhenSpare(firstRoundFallenPins: number) {
    if (this.spare) {
      this.frameScore[this.currentFrame - 1] += firstRoundFallenPins;
      this.spare = false;
    }
  }

  private isSpare(totalFrameScores: number) {
    if (totalFrameScores === 10) {
      this.spare = true;
    }
  }

  private registerFirstRollScore(firstRoundFallenPins: number) {
    this.frameRolls[this.currentFrame].push(firstRoundFallenPins);
  }
  private registerSecondRollScore(secondRoundFallenPins: number) {
    this.frameRolls[this.currentFrame].push(secondRoundFallenPins);
  }

  private registerBonusRollScore(bonusRoundFallenPins: number) {
    this.frameRolls[this.currentFrame].push(bonusRoundFallenPins);
  }
}
