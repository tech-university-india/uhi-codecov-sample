const {addition}=require('../index'); 
describe('Addition', () => {
  it('should give 5 on adding 2 and 3', () => {
    const num =addition(2,3);
    expect(num).toBe(5);
  });
});