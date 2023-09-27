import styled from "@emotion/styled";
import React from "react";
import CUReserves from "./components/CUReserves/CUReserves";
import ExpensesComparison from "./components/ExpensesComparison/ExpensesComparison";
import FundingOverview from "./components/FundingOverview/FundingOverview";
import useAccountsSnapshot from "./useAccountsSnapshot";
import { ResourceType, Snapshots } from "./types";

export interface AccountsSnapshotProps {
  snapshot: Snapshots;
  snapshotOwner?: string;
  sinceDate?: Date;
  resourceType?: ResourceType;
}

const AccountsSnapshot: React.FC<AccountsSnapshotProps> = ({
  snapshot,
  snapshotOwner,
  sinceDate,
  resourceType,
}) => {
  const {
    enableCurrencyPicker,
    expensesComparisonRows,
    includeOffChain,
    toggleIncludeOffChain,
    startDate,
    endDate,
    mainBalance,
    transactionHistory,
    cuReservesBalance,
    onChainData,
    offChainData,
    hasOffChainData,
    hasActualsComparison,
  } = useAccountsSnapshot(snapshot);

  return (
    <Wrapper>
      <FundingOverview
        enableCurrencyPicker={enableCurrencyPicker}
        snapshotOwner={snapshotOwner}
        startDate={startDate}
        endDate={endDate}
        balance={mainBalance}
        transactionHistory={transactionHistory}
        sinceDate={sinceDate}
        resourceType={resourceType}
      />
      <CUReserves
        snapshotOwner={snapshotOwner}
        includeOffChain={includeOffChain}
        toggleIncludeOffChain={toggleIncludeOffChain}
        startDate={startDate}
        endDate={endDate}
        balance={cuReservesBalance}
        onChainData={onChainData}
        offChainData={offChainData}
      />
      {hasActualsComparison && (
        <ExpensesComparison
          rows={expensesComparisonRows}
          hasOffChainData={hasOffChainData}
        />
      )}
    </Wrapper>
  );
};

export default AccountsSnapshot;

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 64,
  marginBottom: 64,
});
