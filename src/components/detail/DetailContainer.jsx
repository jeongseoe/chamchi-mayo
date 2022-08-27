import { useRef, useState, } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

import useFetchPosts from "../../hooks/useFetchPosts";
import ModalEdit from "./ModalEdit";
import { colors } from "../../lib/constants/colors";
import CommonButton from "../common/button/CommonButton";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const DetailContainer = (props) => {
  const [isClikedEdit, setIsClikedEdit] = useState(false);
  const modalRef = useRef();
  const params = useParams();
  const postId = parseInt(params.id);
  const post = useFetchPosts(postId, false);
  
  const onClickEdit = () => setIsClikedEdit(state => !state);

  useOnClickOutside(modalRef, onClickEdit);

  const renderModalEdit = () => {
    return (
    <ModalEdit ref={ modalRef }>
        <TitleWrapper backgroundColor={ colors.ivory }>
          <StyledTextarea
            type="text" 
            placeholder={ post && post.title } 
            backgroundColor={ colors.ivory } />
        </TitleWrapper>
        <BodyWrapper backgroundColor={ colors.ivory }>
          <StyledTextarea 
            type="text" 
            placeholder="시원하게 속풀이 해요!!"
            backgroundColor={ colors.ivory } />
        </BodyWrapper>
        <ButtonWrapper>
          <CommonButton
            backgroundColor = { colors.white }
            bodyColor={ colors.red }>
            등록하기
          </CommonButton>
        </ButtonWrapper>
      </ModalEdit>
    );
  };

  return (
    <Container>
      { isClikedEdit && renderModalEdit() }
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
          <span onClick={ onClickEdit }>수정하기</span>
        </CommonButton>
      </ButtonWrapper>
    </Container>
  );
};

/****************************** Styled Components ******************************/
const Container = styled.div`
  height: 60vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  margin: 3%;
  background-color: ${prop => prop.backgroundColor};
  border-radius: 12px;
`;

const BodyWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 25vh;
  padding: 3%;
  margin: 3%;
  background-color: ${prop => prop.backgroundColor};
  border-radius: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: ${prop => prop.backgroundColor};
  border: none;
  resize: none;
`;
/****************************** Styled Components ******************************/

export default DetailContainer;