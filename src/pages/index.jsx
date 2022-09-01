// 홈
import CommonButton from "../components/common/button/CommonButton";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../components/common/header/Header";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Header />
      <div>
        <StWriteInto onClick={() => {
          navigate('/write');
        }}>
          분노 작성하기 ..!!!!
        </StWriteInto>
        <StPostInto onClick={() => {
          navigate('/posts');
        }}>
          분노 목록 보러가기 !!
        </StPostInto>
      </div>

    </main>
  );
};

export default Home;

const StWriteInto = styled.div`
  background-color: #FAF6BF;
  border-radius: 10px;
  width: 60vw;
  text-align: center;
  font-size: 50px;
  margin:auto;
  margin: 50px auto 50px auto
`;

const StPostInto = styled.div`
  background-color: #FAF6BF;
  border-radius: 10px;
  width: 60vw;
  text-align: center;
  font-size: 50px;
  margin: 50px auto 50px auto
  
`;

// 