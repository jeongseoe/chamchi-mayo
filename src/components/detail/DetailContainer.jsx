import { useRef, useState, } from "react";
import styled from "@emotion/styled";

import { colors } from "../../lib/constants/colors";
import CommonButton from "../common/button/CommonButton";
import EditModal from "./EditModal";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {
  TitleWrapper,
  BodyWrapper,
  ButtonWrapper,
} from "./DetailStyle";

const DetailContainer = ({ post }) => {
  const [isClickEdit, setIsClickEdit] = useState(false);
  const modalRef = useRef();
  const handleClickOutside = () => setIsClickEdit(false);

  useOnClickOutside(modalRef, handleClickOutside);

  return (
    <Container>
      {isClickEdit && 
        <EditModal
          post={post}
          modalRef={modalRef}/>
      }
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
/****************************** Styled Components ******************************/

export default DetailContainer;