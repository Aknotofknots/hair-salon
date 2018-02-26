import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  font-family: "Helvetica Neue", "MillerBanner", sans-serif;
  font-weight: lighter;
`;
export const SalonInfo = styled.div`
  grid-column: 1/2;
  justify-self: center;
  padding-top: 20px;
  font-family: "Helvetica Neue", "MillerBanner", sans-serif;
  font-weight: normal;
`;
export const SalonSchema = styled.div`
  grid-column: 2/3;
  justify-self: center;
  padding-top: 20px;
  font-family: "Helvetica Neue", "MillerBanner", sans-serif;
  font-weight: normal;
`;

export const UnderLine = styled.hr`
  grid-row: 2;
  justify-self: start;
  align-self: center;
  width: 100%;
  border: 1px solid #b69f58;
`;

export const Address = styled.div`
  grid-column: 1/3;
  grid-row: 3;
  justify-self: start;
  padding-left: 15px;
  padding-top: 20px;
`;
export const Open = styled.div`
  grid-column: 1/3;
  grid-row: 4;
  justify-self: start;
  padding-left: 15px;
  padding-top: 20px;
`;
export const Contact = styled.div`
  grid-column: 1/3;
  grid-row: 5;
  justify-self: start;
  padding-left: 15px;
  padding-top: 20px;
`;

export const WebAddress = styled.span`
grid-column; 1 / -1;
grid-row: 6;
justify-self: start;
padding-left: 15px;
padding-top: 20px;
white-space: nowrap;
`;

export const Info = styled.span`
  grid-column: 1 / -1;
  grid-row: 7;
  justify-self: start;
  padding: 50px 15px;
`;
