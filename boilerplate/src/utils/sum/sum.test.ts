import sum from './sum';

describe('sum', () => {
  it('should sum', () => {
    const result = sum(6, 8);

    expect(result).toEqual(14);
  });
});
