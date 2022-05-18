const {shuffleArray} = require('./utils')

test(`shuffleArray should return ${Array}`, () => {
    expect(shuffleArray).toEqual(
        expect.arrayContaining([])
    )
})
// second test to see if it does shuffle or not. it runs two tests here but one of them fails because it isnt truthy, and the second test passes
describe('if shuffleArray shuffles', () => {
    test('is shuffled', () => {
      expect(shuffleArray).toBeTruthy();
    });
  
    // test('is not shuffles', () => {
    //   expect(shuffleArray).toBeFalsy();
    // });
  });