import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Header from "../components/common/header/Header";
import { colors } from "../lib/constants/colors";

const Home = () => {
  return (
    <main>
      <Header />
      <Container>
        <Link to="/write">
          <Wrapper>
            <div>짜증내보리기</div>
          </Wrapper>
        </Link>
        <Link to="/posts">
          <Wrapper>
            <div>그들의 분노</div>
          </Wrapper>
        </Link>
        <ImgContainer />
      </Container>
    </main>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 30vw;
  height: 30vw;
  background-image: url('https://user-images.githubusercontent.com/75208324/187640039-558f3c5e-490a-4997-9862-a17fb01b3a72.jpeg');
  background-size: cover;
`;

const Wrapper = styled.div`
  margin-top: 1.5%;
  padding-bottom: 1.5%;
  width: 30vw;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blue};
  color: ${colors.white}
`;

export default Home;