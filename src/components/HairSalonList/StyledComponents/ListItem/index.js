import styled from "styled-components";

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 0.7fr 2.2fr 1fr;
  padding-top: 20px;
  font-size: 12px;
`;
export const ColumnOne = styled.span`
  justify-self: end;
  font-size: 16px;
`;
export const ColumnTwo = styled.span`
  padding-left: 15px;
`;

export const ColumnThree = styled.span`
  justify-self: start;
  align-self: start;
  padding: 8px 8px;
  font-size: 16px;
  border-radius: 2px;
  margin-right: 4px;
  box-shadow: 1px 1px 3px #888888;
  word-wrap: break-word;

  &:hover {
    box-shadow: inset 0 0 3px lightgrey;
    cursor: pointer;
  }
  &:active {
    border: 1px solid #b69f58;
  }
`;

export const SalonName = styled.span`
  font-size: 16px;
`;
export const Ratings = styled.span`
  color: #666666;
`;
export const StreetAddress = styled.span`
  font-size: 14px;
  color: ;
`;
export const HaircutDuration = styled.span`
  color: #666666;
  margin-top: 15px;
  font-size: 12px;
`;
export const DividingLine = styled.hr`
  width: 90%;
  color: rgba(0, 0, 0, 0.1);
`;
