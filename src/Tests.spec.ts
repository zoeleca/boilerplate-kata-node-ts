import { expect, it, describe, beforeEach } from "vitest";
import { Tennis } from "./Tennis";

describe("Tennis Kata", () => {
  let tennis2: Tennis;
  beforeEach(() => {
    tennis2 = new Tennis();
  });

  it("when party has not started score is Love-All", () => {
    expect(tennis2.getScore()).toEqual("Love-All");
  });

  it("should score Fifteen-Love", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();

    expect(tennis.getScore()).toEqual("Fifteen-Love");
  });
  it("should score Thirty-Love", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();
    tennis.playerOneScored();

    expect(tennis.getScore()).toEqual("Thirty-Love");
  });

  it("should score Forty-Love", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerOneScored();

    expect(tennis.getScore()).toEqual("Forty-Love");
  });

  it("should score Win for player1", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerOneScored();

    expect(tennis.getScore()).toEqual("Win for player1");
  });

  it("should score Win for player2", () => {
    const tennis = new Tennis();

    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Win for player2");
  });

  it("should score Love-Fifteen", () => {
    const tennis = new Tennis();

    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Love-Fifteen");
  });

  it("should score Love-Thirty", () => {
    const tennis = new Tennis();

    tennis.playerTwoScored();
    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Love-Thirty");
  });

  it("should score Love-Forty", () => {
    const tennis = new Tennis();

    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Love-Forty");
  });

  it("should score Fifteen-Thirty", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Fifteen-Thirty");
  });

  it("should score Fifteen-All", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();
    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Fifteen-All");
  });

  it("should score Thirty-All", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Thirty-All");
  });

  it("should score Deuce", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Deuce");
  });

  it("should score Advantage player1", () => {
    const tennis = new Tennis();

    score(4, 3, tennis);

    expect(tennis.getScore()).toEqual("Advantage player1");
  });

  it("should also score Deuce", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Deuce");
  });

  it("should score Advantage player2", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Advantage player2");
  });

  it("should score Win for player2", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Win for player2");
  });

  it("should score Win for player1", () => {
    const tennis = new Tennis();

    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerOneScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();
    tennis.playerTwoScored();

    expect(tennis.getScore()).toEqual("Win for player1");
  });

  function score(player1score: number, player2score: number, tennis: Tennis) {
    for (let i = 0; i < player1score; i++) {
      tennis.playerOneScored();
    }
    for (let i = 0; i < player2score; i++) {
      tennis.playerTwoScored();
    }
  }
});
