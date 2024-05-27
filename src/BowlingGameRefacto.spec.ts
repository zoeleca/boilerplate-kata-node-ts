import { describe, expect, test } from "vitest";
import { BowlingGame } from "./BowlingGameRefacto";

describe("Bowling Game Scoring", () => {
  test("Gutter ball in Frame 1", () => {
    const game = new BowlingGame();

    game.firstRollScore(0);
    game.secondRollScore(0);

    expect(game.frameRolls[0]).toStrictEqual([0, 0]);
    expect(game.frameScore[0]).toStrictEqual(0);
  });

  test("[2,0] in Frame 1", () => {
    const game = new BowlingGame();

    game.firstRollScore(2);
    game.secondRollScore(0);

    expect(game.frameRolls[0]).toStrictEqual([2, 0]);
    expect(game.frameScore[0]).toStrictEqual(2);
  });
  test("[7,1] in Frame 1", () => {
    const game = new BowlingGame();

    game.firstRollScore(7);
    game.secondRollScore(1);

    expect(game.frameRolls[0]).toStrictEqual([7, 1]);
    expect(game.frameScore[0]).toStrictEqual(8);
  });

  test("[7,1] in Frame 1, [5,0] in Frame 2", () => {
    const game = new BowlingGame();
    game.firstRollScore(7);
    game.secondRollScore(1);

    game.firstRollScore(5);
    game.secondRollScore(0);

    expect(game.frameRolls[0]).toStrictEqual([7, 1]);
    expect(game.frameScore[0]).toStrictEqual(8);

    expect(game.frameRolls[1]).toStrictEqual([5, 0]);
    expect(game.frameScore[1]).toStrictEqual(5);
  });

  test("[7,3] in Frame 1, [5,0] in Frame 2", () => {
    const game = new BowlingGame();

    game.firstRollScore(7);
    game.secondRollScore(3);

    game.firstRollScore(5);
    game.secondRollScore(0);

    expect(game.frameRolls[0]).toStrictEqual([7, 3]);
    expect(game.frameScore[0]).toStrictEqual(15);

    expect(game.frameRolls[1]).toStrictEqual([5, 0]);
    expect(game.frameScore[1]).toStrictEqual(5);
  });

  test("strike in Frame 1, [5,3] in frame two ", () => {
    const game = new BowlingGame();

    game.firstRollScore(10);

    game.firstRollScore(5);
    game.secondRollScore(3);

    expect(game.frameRolls[0]).toStrictEqual([10]);
    expect(game.frameScore[0]).toStrictEqual(18);

    expect(game.frameRolls[1]).toStrictEqual([5, 3]);
    expect(game.frameScore[1]).toStrictEqual(8);
  });

  test("strike in Frame 1, strike in frame two, [5,3]  in frame three ", () => {
    const game = new BowlingGame();

    game.firstRollScore(10);
    game.firstRollScore(10);

    game.firstRollScore(5);
    game.secondRollScore(3);

    expect(game.frameRolls[0]).toStrictEqual([10]);
    expect(game.frameRolls[1]).toStrictEqual([10]);
    expect(game.frameRolls[2]).toStrictEqual([5, 3]);

    expect(game.frameScore[0]).toStrictEqual(25);
    expect(game.frameScore[1]).toStrictEqual(18);
    expect(game.frameScore[2]).toStrictEqual(8);
  });

  test("strike in Frame 1, strike in frame two, strike frame 3, [3,4]  in frame three  ", () => {
    const game = new BowlingGame();

    game.firstRollScore(10);

    game.firstRollScore(10);

    game.firstRollScore(10);

    game.firstRollScore(3);
    game.secondRollScore(4);

    expect(game.frameRolls[0]).toStrictEqual([10]);
    expect(game.frameRolls[1]).toStrictEqual([10]);
    expect(game.frameRolls[2]).toStrictEqual([10]);
    expect(game.frameRolls[3]).toStrictEqual([3, 4]);

    expect(game.frameScore[0]).toStrictEqual(30);
    expect(game.frameScore[1]).toStrictEqual(23);
    expect(game.frameScore[2]).toStrictEqual(17);
    expect(game.frameScore[3]).toStrictEqual(7);
  });

  test("[[10],[10],[2,4],[3,6],[5,5], [10], [10], [10], [1,7], [5,5,10]]", () => {
    const game = new BowlingGame();

    game.firstRollScore(10); //frame 1

    game.firstRollScore(10); //frame 2

    game.firstRollScore(2); //frame 3
    game.secondRollScore(4);

    game.firstRollScore(3); //frame 4
    game.secondRollScore(6);

    game.firstRollScore(5); //frame 5
    game.secondRollScore(5);

    game.firstRollScore(10); //frame 6

    game.firstRollScore(10); //frame 7

    game.firstRollScore(10); //frame 8

    game.firstRollScore(1); //frame 9
    game.secondRollScore(7);

    game.firstRollScore(5); //frame 10
    game.secondRollScore(5);
    game.bonusRollScore(10);

    expect(game.frameRolls[0]).toStrictEqual([10]);
    expect(game.frameRolls[1]).toStrictEqual([10]);
    expect(game.frameRolls[2]).toStrictEqual([2, 4]);
    expect(game.frameRolls[3]).toStrictEqual([3, 6]);
    expect(game.frameRolls[4]).toStrictEqual([5, 5]);
    expect(game.frameRolls[5]).toStrictEqual([10]);
    expect(game.frameRolls[6]).toStrictEqual([10]);
    expect(game.frameRolls[7]).toStrictEqual([10]);
    expect(game.frameRolls[8]).toStrictEqual([1, 7]);
    expect(game.frameRolls[9]).toStrictEqual([5, 5, 10]);

    expect(game.frameScore[0]).toStrictEqual(22);
    expect(game.frameScore[1]).toStrictEqual(16);
    expect(game.frameScore[2]).toStrictEqual(6);
    expect(game.frameScore[3]).toStrictEqual(9);
    expect(game.frameScore[4]).toStrictEqual(20);
    expect(game.frameScore[5]).toStrictEqual(30);
    expect(game.frameScore[6]).toStrictEqual(21);
    expect(game.frameScore[7]).toStrictEqual(18);
    expect(game.frameScore[8]).toStrictEqual(8);
    expect(game.frameScore[9]).toStrictEqual(20);

    expect(game.totalPartyScore).toStrictEqual(170);
  });

  test("[[10],[10],[2,4],[3,6],[5,5], [10], [10], [10], [1,7], [10,10,10]]", () => {
    const game = new BowlingGame();

    game.firstRollScore(10); //frame 1

    game.firstRollScore(10); //frame 2

    game.firstRollScore(2); //frame 3
    game.secondRollScore(4);

    game.firstRollScore(3); //frame 4
    game.secondRollScore(6);

    game.firstRollScore(5); //frame 5
    game.secondRollScore(5);

    game.firstRollScore(10); //frame 6

    game.firstRollScore(10); //frame 7

    game.firstRollScore(10); //frame 8

    game.firstRollScore(1); //frame 9
    game.secondRollScore(7);

    game.firstRollScore(10); //frame 10
    game.secondRollScore(10);
    game.bonusRollScore(10);

    expect(game.frameRolls[0]).toStrictEqual([10]);
    expect(game.frameRolls[1]).toStrictEqual([10]);
    expect(game.frameRolls[2]).toStrictEqual([2, 4]);
    expect(game.frameRolls[3]).toStrictEqual([3, 6]);
    expect(game.frameRolls[4]).toStrictEqual([5, 5]);
    expect(game.frameRolls[5]).toStrictEqual([10]);
    expect(game.frameRolls[6]).toStrictEqual([10]);
    expect(game.frameRolls[7]).toStrictEqual([10]);
    expect(game.frameRolls[8]).toStrictEqual([1, 7]);
    expect(game.frameRolls[9]).toStrictEqual([10, 10, 10]);

    expect(game.frameScore[0]).toStrictEqual(22);
    expect(game.frameScore[1]).toStrictEqual(16);
    expect(game.frameScore[2]).toStrictEqual(6);
    expect(game.frameScore[3]).toStrictEqual(9);
    expect(game.frameScore[4]).toStrictEqual(20);
    expect(game.frameScore[5]).toStrictEqual(30);
    expect(game.frameScore[6]).toStrictEqual(21);
    expect(game.frameScore[7]).toStrictEqual(18);
    expect(game.frameScore[8]).toStrictEqual(8);
    expect(game.frameScore[9]).toStrictEqual(30);

    expect(game.totalPartyScore).toStrictEqual(180);
  });
});
