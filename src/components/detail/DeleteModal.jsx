import styled from "@emotion/styled";
import { useRef, useState } from "react";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import Modal from "./Modal";
import { colors } from "../../lib/constants/colors";
import CommonButton from "../common/button/CommonButton";
import {
  TitleWrapper,
  ButtonWrapper,
} from "../detail/DetailContainer";

const DeleteModal = (props) => {
  const handleClickDelete = () => console.log('zz');
  const handleClickOutSide = () => props.setIsClickDeleteIcon(false);

  useOnClickOutside(props.modalRef, handleClickOutSide);

  return (
    <Modal ref={props.modalRef}>
      <TitleWrapper backgroundColor={colors.ivory}>
        <StyledInput
          type="text" 
          placeholder="아이디"
          backgroundColor={colors.ivory} />
      </TitleWrapper>
      <TitleWrapper backgroundColor={colors.ivory}>
        <StyledInput 
          type="password"
          placeholder="비밀번호" 
          backgroundColor={colors.ivory}/>
      </TitleWrapper>
      <ButtonWrapper>
        <CommonButton 
          type="button"
          backgroundColor={colors.white} 
          bodyColor={colors.red}>
          <div onClick={handleClickDelete}>삭제하기</div>
        </CommonButton>
      </ButtonWrapper>
    </Modal>
  );
};

const StyledInput = styled.input`
  width: 100vw;
  background-color: ${prop => prop.backgroundColor};
  border: none;
`;

export default DeleteModal;