// @flow
import * as React from 'react';
import styled from "styled-components";

type Props = {
  status?: string
};

export const Status = ({status}: Props) => {
  return (
    <StyledStatus $status={status}>
      {status}
    </StyledStatus>
  );
};

const StyledStatus = styled.div<{ $status?: string }>`
    background-color: ${(props) => {
        switch (props.$status) {
            case "Alive":
                return "green";
            case "Dead":
                return "red";
            default:
                return "gray";
        }
    }};
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    z-index: 1;
    opacity: 0.7;
`