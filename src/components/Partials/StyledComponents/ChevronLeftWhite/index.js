import styled from "styled-components";

const Wrapper = styled.span`
  position: absolute;
  justify-self: start;
  margin-top: 10px;
  margin-left: 5px;
  padding: 10px;
  z-index: 2;

  &:hover {
    cursor: pointer;
    transition: transform 0.4s;
    transform: translateY(1px);
  }
  &:active {
    transition: transform 0.4s;
    transform: translateY(1px);
  }
`;

export default Wrapper;
