import React from 'react';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import FarmCard from "../../farm/card/FarmCard";

export default function FullNodeCardConnectionStatus() {
  const connected = useSelector(
    (state) => state.daemon_state.full_node_connected,
  );

  return (
    <FarmCard
      valueColor={connected ? 'primary' : 'textPrimary'}
      title={
        <Trans>Connection Status</Trans>
      }
      value={connected ? (
        <Trans>Connected</Trans>
      ) : (
        <Trans>Not connected</Trans>
      )}
    />
  );
}