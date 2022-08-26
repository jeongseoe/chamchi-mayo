import React from "react";
import styled from "@emotion/styled";
import { signatureColor } from "../../../lib/constants/colors";

const Button = styled.button`
  background-color: ${props => props.color};
  width: 80px;
  height: 30px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;
`;

const CommonButton = (props) => {
  return (
    <Button color={ signatureColor }>
      { props.children }
    </Button>
  );
};

export default CommonButton;