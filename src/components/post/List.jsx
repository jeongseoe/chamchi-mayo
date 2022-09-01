import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const List = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <StContainer>
                <StBox onClick={() => {
                    navigate(`/posts/${props.post.id}`);
                }}>
                    <p style={{ fontSize: "25px", color: "#FD7F20", marginTop: "5px" }}>
                        {props.post.title}
                    </p>
                    <p style={{ fontSize: "25px", color: "#FF0000", marginTop: "5px" }}>
                        {props.post.writer}
                    </p>
                </StBox>
            </StContainer>
        </div >
    );
}

export default List;



const StContainer = styled.div`
    padding: 10px;
    
`;

const StBox = styled.div`
    width: 65vw;
    margin: auto;
    height: 60px;
    background-color: #FAF6BF;
    border-radius: 10px;
    padding : 5px;
    display: flex;
    justify-content: space-between;
`;
