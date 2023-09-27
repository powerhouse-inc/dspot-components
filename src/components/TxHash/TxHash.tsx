import styled from '@emotion/styled';
import React from 'react';
import CopyIcon from '../common/CopyIcon/CopyIcon';
import lightTheme from '../../styles/theme/light';

interface TxHashProps {
  txHash: string | null;
  className?: string;
}

const TxHash: React.FC<TxHashProps> = ({ txHash, ...props }) => {
  const formattedHash = !txHash ? '' : txHash?.length <= 16 ? txHash : `${txHash.slice(0, 16)}...`;

  return (
    <TxHashContainer {...props}>
      <Hash href={`https://etherscan.io/tx/${txHash}`} target="_blank">
        {formattedHash}
      </Hash>
      <CopyIcon text={txHash ?? ''} defaultTooltip="Copy Transaction Hash" />
    </TxHashContainer>
  );
};

export default TxHash;

const TxHashContainer = styled.div({
  display: 'flex',
});

const Hash = styled.a(() => ({
  fontSize: 12,
  lineHeight: '15px',
  color: '#447AFB',

  [lightTheme.breakpoints.up('desktop_1194')]: {
    fontSize: 14,
    lineHeight: '17px',
  },
}));
