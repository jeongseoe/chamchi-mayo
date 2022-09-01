import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

import { colors } from "../../lib/constants/colors";
import ModalForm from "./ModalForm";

const Form = () => {
  const [input, setInput] = useState({ writer: "", title: "", body: "", password: "" });
  const [isKeyDown, setKeyDown] = useState(false);

  const [isClickedEdit, setIsClickedEdit] = useState(false);
  const modalRef = useRef();

  // mock API
  // 찾아보기

  const timestamp = new Date().getTime();
  // console.log(timestamp)

  //모달 영역을 벗어났는지 확인
  const isClickModalOutside = (e) => {
    if (isClickedEdit && !modalRef.current.contains(e.target)) {
      setIsClickedEdit(false);
    };
  };

  //clean-up
  useEffect(() => {
    document.addEventListener('mousedown', isClickModalOutside);

    return () => {
      document.removeEventListener('mousedown', isClickModalOutside)
    };
  });

  //모달 렌더
  const renderModalForm = () => {
    return (
      <ModalForm ref={modalRef}>
        <ModalWrap>
          <ModalContents>짜증을 추가 하시겠어요?</ModalContents>
          <ModalBtn onClick={addHandler} color={colors.blue}>확인</ModalBtn>
          <ModalBtn onClick={() => setIsClickedEdit(false)} color={colors.blue}>취소</ModalBtn>
        </ModalWrap>
      </ModalForm>
    );
  };

  // 구현 문의!!
  // 짜증 추가 기능
  const addHandler = async () => {
    const { writer, title, body, password } = input;
    const annoyance = {
      id: +timestamp, //id 넣는 것 확인
      writer: writer,
      title: title,
      body: body,
      password: password,
    };

    const URL = 'http://localhost:5001/posts';

    const response = await axios.post(URL, annoyance);

    if (response) window.location.href = '/';
  };

  //인풋 컨텐츠
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setKeyDown(!isKeyDown)
  };

  return (
    <ContentsWrap>
      {isClickedEdit && renderModalForm()}
      <StDiv color={colors.blue}>짜증 리스트 작성</StDiv>
      <InputWrap isKeyDown={isKeyDown}>
        <StLabel htmlFor="password">암호</StLabel>
        <StInput type="password" name="password" onChange={inputHandler} id="password" />
      </InputWrap>
      <InputWrap isKeyDown={isKeyDown}>
        <StLabel htmlFor="writer">작성자</StLabel>
        <StInput name="writer" onChange={inputHandler} id="writer" />
      </InputWrap>

      <InputWrap isKeyDown={isKeyDown}>
        <StLabel htmlFor="title">제목</StLabel>
        <StInput name="title" onChange={inputHandler} id="title" />
      </InputWrap>

      <StTextarea name="body" color={colors.ivory} placeholder="내용"
        onChange={inputHandler} isKeyDown={isKeyDown}
      >
      </StTextarea>
      <AddBtn color={colors.blue}
        disabled={!input.writer || !input.title || !input.body || !input.password}
        onClick={() => setIsClickedEdit(true)}
      >짜증 추가하기</AddBtn>
    </ContentsWrap>
  );
};

export default Form;

/****************************** Styled Components ******************************/
const ContentsWrap = styled.div`
  width: 95%;
  align-items: center;
  justify-content: center;
  animation: ${(props) => props.isKeyDown ? css`${vibration} 0.1s` : null};
`;

const StDiv = styled.div`
  width: fit-content;
  padding: 6px 20px;
  margin: 10px;
  border-radius: 30px;
  background-color:  ${props => props.color};
  color: white;
`;

//Inputs
const InputWrap = styled.div`
  width: 95%;
  border: none;
  border-radius: 8px;
  margin: 1.5% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${(props) => props.isKeyDown ? css`${vibration} 0.1s` : null};
`;

const StLabel = styled.label`
  width: 10vw;
  min-width: 70px;
  height: 45px;
  margin-right: 1.5%;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;    
  background-color: ${colors.ivory};
`;

const StInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;    
  background-color: ${colors.ivory};
`;

//Animation Keys
const vibration = keyframes`
  from {transform: rotate(-1deg);}
  to {transform: rotate(1deg);}    
`;

const annoyingColor = keyframes`
  0%{
    color: black
  }
  10%{
    color: ${colors.orange};
  }
  20% {
      color: ${colors.red};
  }
  85% {
      color: darkgray
  }
  100% {
      color: black
  }
`;

const StTextarea = styled.textarea`
  width: 95%;
  height: 50vh;
  margin: auto;
  padding: 15px 2%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.color};

  ::placeholder {
      color: black;
      font-size: 1rem;
  }

  /* Animaation */
  animation: ${annoyingColor} 3s linear ;
  animation: ${(props) => props.isKeyDown ? css`${vibration} 0.1s` : null};
`;
//button
const AddBtn = styled.button`
  background-color: ${props => props.color};
  width: 150px;
  height: 40px;
  margin-left: 10px;
  margin-top: 3%;
  

  font-size: 1rem;

  border-radius: 20px;
  border: none;
  cursor: pointer;
  color: white;


  :disabled {
      color: rgba(255,255,255,0.5);
      pointer-events: none;
  }
`;

//modal
const ModalWrap = styled.div`

`;

const ModalContents = styled.div`
  margin-bottom: 30px;
`;

const ModalBtn = styled.button`
  width: 100px;
  height: 35px;
  margin: 10px;
  border: none;
  border-radius: 4px;

  font-size: 0.7em;
  background-color: ${props => props.color};
  color: #DDD;

  :hover {
      color: white;
  }
`;

/****************************** Styled Components ******************************/