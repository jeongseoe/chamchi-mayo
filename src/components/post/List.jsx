import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const List = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <StContainer>
                <StBox onClick={() => {
                    navigate("/posts/${props.post.id}");
                }}>
                    <p style={{ fontSize: "30px", color: "#FD7F20" }}>
                        {props.post.title}
                    </p>

                    <p style={{ fontSize: "25px", marginLeft: "50px", color: "#FF0000", marginTop: "5px" }}>
                        {props.post.body}
                    </p>


                </StBox>

            </StContainer>

        </div >
    )
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
    /* grid-auto-flow: column;
    grid-template-columns: 1fr; */
`;

const StButton = styled.div`
    display: flex;
    justify-content: space-between;
`;
