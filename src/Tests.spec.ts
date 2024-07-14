import {expect, it, describe, beforeEach} from "vitest";

class Game {
    sumOfDices(dices: number[]) {
        return dices.reduce((sum, num) => sum + num, 0);
    }

    yatzyScore(dices: number[]) {
        const isYatzy = new Set(dices).size === 1;
        return isYatzy ? 50 : 0
    }

    numberScore(dices: number[], on: number) {
        return this.sumOfDices(dices.filter(num => num === on))
    }

    pairScore(dices: number[]) {
        // check highest number *
       const highest =  dices.reduce((highest, curr) => Math.max(highest, curr));
        //check pairs of this number
        const group = dices.reduce((group, dice) => {
            return {...group, [dice]:group[dice]? group[dice]+1 : 1,}
        }, {} as Record<number, number>);
        Object.entries(group).filter(([key, value]) => value >= 2);

        const isPair = dices.filter((value) => value === highest).length >= 2

        if (isPair) {
            return highest * 2
        } else return 0;
    }
}

describe("Yatzy Game", () => {
    beforeEach(() => {})
    describe("Chance", () => {
    it.each([{
        dices:[1, 1, 3, 3, 6],
        sum:14
    }, {
        dices:[4, 5, 5, 6, 1],
        sum:21
    }])("It should do sum $sum of all dices $dices", ({dices, sum}) => {
        const game = new Game();
        expect(game.sumOfDices(dices)).toBe(sum)
    })
    })
    describe("Yatzy", ()=> {
        it('should return 50 if dices [1,1,1,1,1]', () =>{
            const game = new Game()
            expect(game.yatzyScore([1,1,1,1,1])).toBe(50)
        })
        it('should return 0 if dices [1,1,1,1,2]', () =>{
            const game = new Game()
            expect(game.yatzyScore([1,1,1,1,2])).toBe(0)
        })
        it('should return 0 if dices [1,1,1,1,2]', () =>{
            const game = new Game()
            expect(game.yatzyScore([2,2,2,2,2])).toBe(50)
        })
    })
    describe("NumberSum", () => {
        it('should do the sum of dices 1', () => {
            const game = new Game()
            expect(game.numberScore([1, 2, 3, 4, 5], 1)).toBe(1)
        })
        it('should do the sum of dices 1', () => {
            const game = new Game()
            expect(game.numberScore([3, 2, 3, 4, 5], 1)).toBe(0)
        })
        it('should do the sum of dices 3', () => {
            const game = new Game()
            expect(game.numberScore([3, 2, 3, 4, 5], 3)).toBe(6)
        })
    })
    describe("Pair", () => {
        it('should score 8 of [3,3,3,4,4]', () => {
            const game = new Game();
            expect(game.pairScore([3,3,3,4,4])).toBe(8)
        });
        it('should score 0 of [2,1,3,5,4]', () => {
            const game = new Game();
            expect(game.pairScore([2,1,3,5,4])).toBe(0)
        } )
    })
});
