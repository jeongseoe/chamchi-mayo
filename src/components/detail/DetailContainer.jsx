import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";

import CommonButton from "../common/button/CommonButton";

const Container = styled.div`
  height: 60vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
`;

const BodyWrapper = styled.div`
  height: 50vh;
  padding: 12px 12px;
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
      <TitleWrapper>
        <div className="title">
          { post.title }
        </div>
        <div className="writer">
          { post.writer }
        </div>
      </TitleWrapper>
      <BodyWrapper>
        <div className="body">
          { post.body }
        </div>
      </BodyWrapper>
      <ButtonWrapper>
        <CommonButton>
          <span>수정하기</span>
        </CommonButton>
      </ButtonWrapper>
    </Container>
  );
};

export default DetailContainer;