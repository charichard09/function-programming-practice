import Triangle from './../src/js/triangle.js';

describe('Coin', () => {

  test('should return quarters dimes nickes and pennies', () => {
    expect(closureCounter(4.99)).toEqual("Quarters: 19 Dimes: 2 Nickles: 0 Pennies: 4");
  });
});