import Big from 'big.js';

const MOJO_PER_CHIA = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  if (height < 4 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(50).times(7 / 8);
  }
  if (height < 8 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(25).times(7 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(12.5).times(7 / 8);
  }
  if (height < 16 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(6.25).times(7 / 8);
  }
  if (height < 20 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(3.125).times(7 / 8);
  }
  if (height < 24 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(1.5625).times(7 / 8);
  }
  if (height < 28 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(0.78125).times(7 / 8);
  }

  return MOJO_PER_CHIA.times(0).times(7 / 8);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height < 4 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(50).times(1 / 8);
  }
  if (height < 8 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(25).times(1 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(12.5).times(1 / 8);
  }
  if (height < 16 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(6.25).times(1 / 8);
  }
  if (height < 20 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(3.125).times(1 / 8);
  }
  if (height < 24 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(1.5625).times(1 / 8);
  }
  if (height < 28 * BLOCKS_PER_YEAR) {
    return MOJO_PER_CHIA.times(0.78125).times(1 / 8);
  }

  return MOJO_PER_CHIA.times(0).times(7 / 8);
}
