import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";

import { colors } from "../../lib/constants/colors";
import CommonButton from "../common/button/CommonButton";

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
  height: 50vh;
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

const DetailContainer = (props) => {
  const [post, setPost] = useState([]);
  const params = useParams();
  const postId = parseInt(params.id);

  const fetchPosts = async() => {
    const URL = 'http://localhost:5001/posts';
    const response = await axios.get(URL).catch(error => console.log(error));
    
    setPost(response.data[postId - 1]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <TitleWrapper backgroundColor={ colors.yellow }>
        <div className="title">
          { post.title }
        </div>
        <div className="writer">
          { post.writer }
        </div>
      </TitleWrapper>
      <BodyWrapper backgroundColor={ colors.yellow }>
        <div className="body">
          { post.body }
        </div>
      </BodyWrapper>
      <ButtonWrapper>
        <CommonButton backgroundColor={ colors.white } bodyColor={ colors.red } >
          수정하기
        </CommonButton>
      </ButtonWrapper>
    </Container>
  );
};

export default DetailContainer;