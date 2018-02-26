import styled from "styled-components";

const Wrapper = styled.span`
  justify-self: end;
  padding: ${({ isSalonClicked }) =>
    isSalonClicked ? "0 0 0 15px" : "0 15px 0 0"};
`;

export default Wrapper;
