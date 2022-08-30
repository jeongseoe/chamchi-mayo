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
                    <p style={{ color: "#FD7F20" }}>
                        {props.post.title}
                    </p>
                    <p style={{ marginLeft: "50px", color: "#FF0000", marginTop: "5px" }}>
                        {props.post.writer}
                    </p>
                </StBox>
            </StContainer>
        </div >
    );
}

export default List;

const StContainer = styled.div`
    padding: 5px;
    
`;

const StBox = styled.div`
    background-color: #FAF6BF;
    border-radius: 3px;
    padding : 5px;
    display: flex;
    justify-content: space-between;
`;
