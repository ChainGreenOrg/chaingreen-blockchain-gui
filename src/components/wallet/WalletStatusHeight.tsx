import React from 'react';
import { useSelector } from 'react-redux';
import { FormatLargeNumber, State, StateIndicator } from '@chia/core';
import type { RootState } from '../../modules/rootReducer';

export default function WalletStatusHeight() {
  const walletState = useSelector(
    (state: RootState) => state.wallet_state,
  );

  const currentHeight = walletState?.status?.height;

  if (currentHeight === undefined || currentHeight === null) {
    return null;
  }

  return (
    <>
      {'('}
      <FormatLargeNumber value={currentHeight} />
      {')'}
    </>
  );
}
