const chaingreen = require('../../util/chaingreen');

describe('chaingreen', () => {
  it('converts number mio to chaingreen', () => {
    const result = chaingreen.mio_to_chaingreen(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mio to chaingreen', () => {
    const result = chaingreen.mio_to_chaingreen('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mio to chaingreen string', () => {
    const result = chaingreen.mio_to_chaingreen_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mio to chaingreen string', () => {
    const result = chaingreen.mio_to_chaingreen_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number chaingreen to mio', () => {
    const result = chaingreen.chaingreen_to_mio(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string chaingreen to mio', () => {
    const result = chaingreen.chaingreen_to_mio('0.000001');

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
