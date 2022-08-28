import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { colors } from "../../../lib/constants/colors";

const Header = () => {
  return (
    <HeaderStyle color={ colors.blue }>
      <Link to="/">
        <span className="material-symbols-outlined">
          home
        </span>
      </Link>
      <h1>화난 그대, 참치마요.</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: ${props => props.color};
  height: 10vh;
  padding: 8px 12px;
  pointer: cursor;
  span {
    font-size: 36px;
    color: ${colors.red};
  }
`;

export default Header;