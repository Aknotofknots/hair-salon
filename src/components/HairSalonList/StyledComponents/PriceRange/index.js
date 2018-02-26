import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 0px;
  align-items: center;
  border-top: 1px solid #b69f58;
  border-bottom: 1px solid #b69f58;
  padding: 20px 0px;
`;

export const Range = styled.span`
  justify-self: "start";
  padding-left: 10px;
`;
