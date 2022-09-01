import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { colors } from "../../lib/constants/colors";

const List = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <div>
      <StContainer>
        <StBox ref={ref} onClick={() => {
          navigate(`/posts/${props.post.id}`);
        }}>
          <p style={{ marginTop: "5px", color: colors.orange }}>
            {props.post.title}
          </p>
          <p style={{color: colors.red, marginTop: "5px" }}>
            {props.post.writer}
          </p>
        </StBox>
      </StContainer>
    </div >
  );
});

export default List;



const StContainer = styled.div`
    padding: 10px;
    
`;

const StBox = styled.div`
    width: 65vw;
    margin: auto;
    height: 60px;
    background-color: #FAF6BF;
    border-radius: 10px;
    padding : 5px;
    display: flex;
    justify-content: space-between;
`;
