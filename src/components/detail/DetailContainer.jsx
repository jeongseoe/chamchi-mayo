import { useRef, useState, } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import Modal from "./Modal";
import { colors } from "../../lib/constants/colors";
import CommonButton from "../common/button/CommonButton";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const DetailContainer = ({ post, postId }) => {
  const [isClickEdit, setIsClickEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBdoy] = useState('');
  const modalRef = useRef();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeBody = (e) => {
    setBdoy(e.target.value);
  };

  const URL = `http://localhost:3000/posts/${postId}`;
  const data = {
    title: title,
    body: body,
    timestamp: new Date().getTime(),
  };

  const handleUpdatePost = async (URL, data = {}) => {
    const response = await axios.patch(URL, data);

    window.location.reload();
  };

  const renderModalEdit = () => {
    return (
    <Modal ref={ modalRef }>
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
            <span onClick={ () => handleUpdatePost(URL, data) }>수정하기</span>
          </CommonButton>
        </ButtonWrapper>
      </Modal>
    );
  };

  const handleClickOutside = () => setIsClickEdit(false);

  useOnClickOutside(modalRef, handleClickOutside);

  return (
    <Container>
      { isClickEdit && renderModalEdit() }
      <TitleWrapper backgroundColor={ colors.ivory }>
        <div className="title">
          { post && post.title }
        </div>
        <div className="writer">
          { post && post.writer }
        </div>
      </TitleWrapper>
      <BodyWrapper backgroundColor={ colors.ivory }>
        <div className="body">
          { post && post.body }
        </div>
      </BodyWrapper>
      <ButtonWrapper>
        <CommonButton 
          type="button"
          backgroundColor={ colors.white }
          bodyColor={ colors.red }>
          <div onClick={ () => setIsClickEdit(true) }>수정하기</div>
        </CommonButton>
      </ButtonWrapper>
    </Container>
  );
};

/****************************** Styled Components ******************************/
const Container = styled.div`
  height: 60vh;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  margin: 3%;
  background-color: ${prop => prop.backgroundColor};
  border-radius: 12px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 25vh;
  padding: 3%;
  margin: 3%;
  background-color: ${prop => prop.backgroundColor};
  border-radius: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: ${prop => prop.backgroundColor};
  border: none;
  resize: none;
`;
/****************************** Styled Components ******************************/

export default DetailContainer;