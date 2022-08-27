// 상세
import styled from "@emotion/styled";

import { colors } from "../lib/constants/colors";
import DetailContainer from "../components/detail/DetailContainer";
import Header from "../components/common/header/Header";

const ArrowBackStyle = styled.div`
  padding: 8px 12px;
  color: red;
  font-size: 24px;
`;

const Detail = () => {
  return (
    <main>
      <Header />
      <ArrowBackStyle>
        <span className="material-symbols-outlined" style={ { color: colors.red, fontSize: "36px", } }>
          arrow_back
        </span>
      </ArrowBackStyle>
      <DetailContainer />
    </main>
  );
};

export default Detail;