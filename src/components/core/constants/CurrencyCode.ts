import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.CHAINGREEN]: IS_MAINNET ? 'CGN' : 'TCGN',
};
