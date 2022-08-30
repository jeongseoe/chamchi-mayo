import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const Spinner = () => {
  const Refresh = () => {
    return (
      <span className="material-symbols-outlined">
        refresh
      </span>
    );
  };

  return (
    <Outter>
      <Refresh />
    </Outter>
  );
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Outter = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    animation: ${rotate} 1s linear infinite;
    font-size: 200px;
  }
`;

export default Spinner;