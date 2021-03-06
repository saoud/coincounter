import { Coin } from './../src/coinCounter.js';



describe('Coin', () => {
  let testCoin;
  // let testCoin2;

  beforeEach(() =>  {
    testCoin = new Coin(0,0,0,0);
    // testCoin2 = new Coin(0,0,0,0);
  })

  test('should correctly return coin', () => {
    expect(testCoin.coinCounter(0)).toEqual({"dime": 0, "nickle": 0, "penny": 0, "quarter": 0});
  });

  test('should correctly return coin', () => {
    expect(testCoin.coinCounter(4.99)).toEqual({"dime": 24, "nickle": 0, "penny": 4, "quarter": 19});
  });
});