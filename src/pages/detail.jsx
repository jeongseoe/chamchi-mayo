// 상세
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

import useFetchPosts from "../hooks/useFetchPosts";
import DetailContainer from "../components/detail/DetailContainer";
import Header from "../components/common/header/Header";
import Spinner from "../components/common/spinner/Spinner";

const Detail = () => {
  const params = useParams();
  const postId = parseInt(params.id);
  const post = useFetchPosts(postId);

  return (
    <main>
      { !post && <Spinner /> }
      <Header />
      <ArrowBackStyle>
        <span className="material-symbols-outlined" >
          arrow_back
        </span>
      </ArrowBackStyle>
      <DetailContainer post={ post } postId={ postId }/>
    </main>
  );
};

const ArrowBackStyle = styled.div`
  padding: 8px 12px;
  color: red;
  font-size: 24px;
  span {
    font-size: 36px;
  }
`;

export default Detail;