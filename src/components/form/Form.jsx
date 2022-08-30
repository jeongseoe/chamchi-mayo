import React, { useState, useRef } from "react";
import useFetchPost from "../../hooks/useFetchPost";

import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";
import { css, keyframes } from "@emotion/react";




const Form = (props) => {
    const [input, setInput] = useState({writer:"", title:"", body:""});

    const [isClickedEdit, setIsClickedEdit] = useState(false);
    const modalRef = useRef();
    
    
    const timestamp = new Date().getTime();
    // console.log(timestamp)

    // 구현 문의!!
    // 짜증 추가 기능
    const addHandler = () => {
        const { writer, title, body } = input
        const annoyance = {
            id: +timestamp, //id 넣는 것 확인
            writer: writer,
            title: title,
            body: body
        }

        // if (title === '' || desc === '' ) return            //빈 데이터로 추가시 반환
            
    }

    //인풋 컨텐츠
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInput({...input, [name]: value});
    };
        
    

    //keytyping use onKeyDown
    // const keytyping = (e) => {
    //     const angry =  
    //     // e.preventDefault();
    //     // console.log(e.key)
    //     css`
    //     animation: ${vibration} 0.1s;
    //     background-color: red;
    //     `
    //     return(angry)
    //     // :null
    //     // console.log(e.target)
    // }

    // console.log(input)
    
    
    // var onkeydown: ((this: Window, ev: KeyboardEvent) => any) | null

    return (
        <ContentsWrap>
                <StDiv color={colors.blue}>짜증 리스트 작성</StDiv>
                <InputWrap>
                    <StLabel htmlFor="writer">작성자</StLabel>
                        <StInput name="writer" onChange={inputHandler} id="writer"/>
                    
                </InputWrap>

                <InputWrap>
                    <StLabel htmlFor="title">제목</StLabel>
                        <StInput name="title" onChange={inputHandler} id="title"/>
                    
                </InputWrap>
                                
                <StTextarea name="body" onChange={inputHandler} color={colors.yellow} placeholder="내용"
                // className={input.body!==''? annoyingBody:StTextarea}
                // onKeyUp={keytyping}
                
                >
                </StTextarea>
                <AddBtn color={colors.blue}
                disabled={!input.writer || !input.title || !input.body}
                onClick={addHandler}
                >짜증 추가하기</AddBtn>

                {/* <ModalContainer>
                    <div>짜증을 추가 하시겠어요?</div>
                    <ModalBtn>확인</ModalBtn>
                    <ModalBtn>취소</ModalBtn>
                </ModalContainer> */}
                    
                
        </ContentsWrap>
        
    )
}


export default Form;








/****************************** Styled Components ******************************/
//
    const ContentsWrap = styled.div`
        width: 95%;
        
        /* display: flex; */
        align-items: center;
        justify-content: center;
    `
    const StDiv = styled.div`
        width: fit-content;
        padding: 6px 20px;
        margin: 10px;
        border-radius: 30px;
        background-color:  ${props => props.color};
        color: white;
    `

//Inputs
    const InputWrap = styled.div`
        width: 95%;
        
        border: none;
        border-radius: 8px;    
        /* background-color: ${ colors.yellow }; */
        
        margin: 1.5% auto;

        display: flex;
        align-items: center;
        justify-content: center;
    `

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
        background-color: ${colors.yellow};
    `

    const StInput = styled.input`
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 8px;    
        background-color: ${colors.yellow};
    `
    //Animation Keys
    const vibration = keyframes`
        from {
            transform: rotate(-1deg);
        }
        to {
            transform: rotate(1deg);
        }    
    `;  

    const StTextarea = styled.textarea`
        width: 95%;
        height: 50vh;

        margin: auto;
        padding: 15px 2%;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 8px;
        background-color: ${props => props.color};
        /* ${(props) => props.key|| css`background-color:rgba(255,0,0,0.1)`}; */
        

        ::placeholder {
            color: black;
            font-size: 1rem;
        }
        /* animation: ${vibration} 0.1s;    */
        animation: ${(props) => props.onKeyUp ? css`${vibration} 0.1s` : null};

      
       
        
        `;

    //Animation
    // const annoyingBody = styled(StTextarea)`
    //     animation: ${vibration} 0.1s;
    //     animation: ${(props) => props.onKeyUp||`${vibration} 0.1s `};
    // `
    


//button
    const AddBtn = styled.button`
        background-color: ${props => props.color};
        width: 150px;
        height: 40px;
        margin-left: 10px;
        margin-top: 3%;
        /* padding-top: 10px; */
        
        font-size: 1rem;

        border-radius: 20px;
        border: none;
        cursor: pointer;
        color: white;

        :disabled {
            color: rgba(255,255,255,0.5);
        }
        
    `
/****************************** Styled Components ******************************/