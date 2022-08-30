import { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import { colors } from "../../lib/constants/colors";
import CommonButton from "../common/button/CommonButton";
import Modal from "./Modal";
import {
  TitleWrapper,
  BodyWrapper,
  ButtonWrapper,
  StyledInput,
} from "./DetailStyle";

const isEmpty = (string) => {
  return (typeof string === 'undefined') || (string === null) || (string === '');
};

const EditModal = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const errors = {
    password: '비밀번호가 일치하지않습니다.',
    title: '제목이 비어있습니다.',
    body: '내용이 비어있습니다.',
  };

  const handleChangeInput = (e, setState) => {
    setState(e.target.value);
  };

  const handleClickUpdatePost = async () => {
    const isPasswordMatched = password === props.post.password;
    const isEmptyTitle = isEmpty(title);
    const isEmptyBody = isEmpty(body);
    const editable = isPasswordMatched && !isEmptyTitle && !isEmptyBody;

    if (editable) {
      const data = {
        title: title,
        body: body,
        password: password,
        timestamp: new Date().getTime(),
      };
      const URL = `${props.post.id}`
      const response = await axios.patch(URL, data);

      window.location.reload();
    } else {
      if (!isPasswordMatched) {
        setErrorMessages({
          errorType: "password",
          message: errors.password,
        });
      } else if (isEmptyTitle) {
        setErrorMessages({
          errorType: "title",
          message: errors.title,
        });
      } else if (isEmptyBody) {
        setErrorMessages({
          errorType: "body",
          message: errors.body,
        });
      }
    }
  };

  const renderErrorMessage = (errorType) => {
    return (errorType === errorMessages.errorType && (
      <strong style={ { color: colors.red } }>
        {errorMessages.message}
      </strong>
    ));
  };

  return (
    <Modal ref={ props.modalRef }>
      <p>비밀번호를 입력하세요.</p>
      <TitleWrapper backgroundColor={colors.ivory}>
        <StyledInput
          onChange={ (e) => handleChangeInput(e, setPassword) }
          type="password"
          placeholder="비밀번호"
          backgroundColor={colors.ivory} />
      </TitleWrapper>
      { renderErrorMessage("password") }  
        <TitleWrapper backgroundColor={ colors.ivory }>
          <StyledTextarea
            onChange={ (e) => handleChangeInput(e, setTitle) }
            type="text" 
            placeholder="제목"
            backgroundColor={ colors.ivory } />
        </TitleWrapper>
        { renderErrorMessage("title") }  
        <BodyWrapper backgroundColor={ colors.ivory }>
          <StyledTextarea 
            onChange={ (e) => handleChangeInput(e, setBody) }
            type="text" 
            placeholder="시원하게 속풀이 해요!!"
            backgroundColor={ colors.ivory } />
        </BodyWrapper>
        { renderErrorMessage("body") }  
        <ButtonWrapper>
          <CommonButton
            backgroundColor = { colors.white }
            bodyColor={ colors.red }>
            <div onClick={handleClickUpdatePost}>수정하기</div>
          </CommonButton>
        </ButtonWrapper>
      </Modal>
    );  
};

/****************************** Styled Components ******************************/
const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: ${prop => prop.backgroundColor};
  border: none;
  resize: none;
`;
/****************************** Styled Components ******************************/

export default EditModal;