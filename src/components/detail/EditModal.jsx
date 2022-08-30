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
} from "./DetailStyle";

const EditModal = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBdoy] = useState('');
  const URL = `http://localhost:3000/posts/${props.postId}`;
  const data = {
    title: title,
    body: body,
    timestamp: new Date().getTime(),
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeBody = (e) => {
    setBdoy(e.target.value);
  };

  const handleClickUpdatePost = async (URL, data = {}) => {
    const response = await axios.patch(URL, data);

    window.location.reload();
  };


  return (
    <Modal ref={ props.modalRef }>
        <TitleWrapper backgroundColor={ colors.ivory }>
          <StyledTextarea
            onChange={ handleChangeTitle }
            type="text" 
            placeholder="제목"
            backgroundColor={ colors.ivory } />
        </TitleWrapper>
        <BodyWrapper backgroundColor={ colors.ivory }>
          <StyledTextarea 
            onChange={ handleChangeBody }
            type="text" 
            placeholder="시원하게 속풀이 해요!!"
            backgroundColor={ colors.ivory } />
        </BodyWrapper>
        <ButtonWrapper>
          <CommonButton
            backgroundColor = { colors.white }
            bodyColor={ colors.red }>
            <span onClick={ () => handleClickUpdatePost(URL, data) }>수정하기</span>
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