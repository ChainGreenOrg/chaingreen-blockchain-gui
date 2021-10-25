const chaingreen = require('../../util/chaingreen');

describe('chia', () => {
  it('converts number mojo to chia', () => {
    const result = chaingreen.mojo_to_chia(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to chia', () => {
    const result = chaingreen.mojo_to_chia('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to chaingreen string', () => {
    const result = chaingreen.mojo_to_chia_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to chaingreen string', () => {
    const result = chaingreen.mojo_to_chia_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number chaingreen to mojo', () => {
    const result = chaingreen.chia_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string chaingreen to mojo', () => {
    const result = chaingreen.chia_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = chaingreen.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = chaingreen.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = chaingreen.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = chaingreen.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = chaingreen.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = chaingreen.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
