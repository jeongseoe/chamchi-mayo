import styled from "@emotion/styled";
import { forwardRef } from "react";

const ModalForm = forwardRef((props, ref) => {
  return (
    <Background>
      <Content>
        <ModalContainer ref={ ref }>
          { props.children }
        </ModalContainer>
      </Content>
    </Background>
  );
});

/****************************** Styled Components ******************************/
const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 120%;
  width: 100%;
  margin-top: 5%;
  position: relative;
  overflow: scroll;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const ModalContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 40vw;
//   height: 70vh;
//   background-color: white;
//   border: 1px solid whitesmoke;
//   border-radius: 7.5%;
// `;



//modal
const ModalContainer = styled.div`
width: 50vw;
height: 30vw;
margin: auto;

font-size: 1.5rem;
color: gray;
background-color: #DDD;

border: none;
border-radius: 8px;

display: flex;
align-items: center;
justify-content: center;

`

// const ModalBtn = styled.button`
// color: gray;
// `





/****************************** Styled Components ******************************/

export default ModalForm;