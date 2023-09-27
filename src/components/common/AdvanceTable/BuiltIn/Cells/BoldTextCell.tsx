import styled from "@emotion/styled";
import React from "react";
import BasicCell from "./BasicCell";
import type { GenericCell } from "../../types";
import { useThemeContext } from "../../../../../context/ThemeContext";
import { WithIsLight } from "../../../../../utils/typesHelpers";
import lightTheme from "../../../../../styles/theme/light";

interface BoldTextCellProps {
  cell: GenericCell;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const BoldTextCell: React.FC<BoldTextCellProps> = ({ cell, className, as }) => {
  const { isLight } = useThemeContext();

  return (
    <BoldCell
      className={className}
      as={as ?? cell.isHeader ? "th" : "td"}
      isLight={isLight}
      cell={cell}
    />
  );
};

export default BoldTextCell;

const BoldCell = styled(BasicCell)<WithIsLight>(({ isLight }) => ({
  textTransform: "none",
  fontWeight: 700,
  fontSize: 14,
  lineHeight: "17px",
  letterSpacing: 0,
  color: isLight ? "#231536" : "#FFFFFF",

  [lightTheme.breakpoints.up("desktop_1194")]: {
    fontSize: 16,
    lineHeight: "19px",
  },
}));
