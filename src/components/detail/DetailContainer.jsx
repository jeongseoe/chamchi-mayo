import React, { useEffect } from "react";
import styled from "@emotion/styled";

import CommonButton from "../common/button/CommonButton";

const Container = styled.div`
  height: 60vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
`;

const BodyWrapper = styled.div`
  height: 50vh;
  padding: 12px 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailContainer = (props) => {
  return (
    <Container>
      <TitleWrapper>
        <div className="title">
          제목
        </div>
        <div className="writer">
          작성자
        </div>
      </TitleWrapper>
      <BodyWrapper>
        <div className="body">
          내용
        </div>
      </BodyWrapper>
      <ButtonWrapper>
        <CommonButton>
          <span>수정하기</span>
        </CommonButton>
      </ButtonWrapper>
    </Container>
  );
};

export default DetailContainer;