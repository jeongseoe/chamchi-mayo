import styled from "@emotion/styled";
import { useRef, useState, } from "react";
import { useNavigate, } from "react-router-dom";

import DeleteModal from "./DeleteModal";

const Toolbar = (props) => {
  const [isClickDeleteIcon, setIsClickDeleteIcon] = useState(false);
  const modalRef = useRef();
  const navigate = useNavigate();
  const handleClickArrowBack = () => navigate(-1);
  const handleClickDeleteIcon = () => setIsClickDeleteIcon(true);
  
  return (
    <ToolbarStyle>
      {isClickDeleteIcon && 
        <DeleteModal 
          modalRef={modalRef} 
          isClickDeleteIcon={isClickDeleteIcon} 
          setIsClickDeleteIcon={setIsClickDeleteIcon} 
          post={props.post} />}
      <span 
        className="material-symbols-outlined" 
        onClick={handleClickArrowBack}>
        arrow_back
      </span>
      <span 
        className="material-symbols-outlined"
        onClick={handleClickDeleteIcon}>
        delete
      </span>
    </ToolbarStyle>
  );
};

/****************************** Styled Components ******************************/
const ToolbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  color: red;
  font-size: 24px;
  span {
    font-size: 36px;
  }
`;
/****************************** Styled Components ******************************/

export default Toolbar;