import React from "react";
import RatingsIcon from "../Partials/RatingsIcon.jsx";
import ChevronRight from "../Partials/ChevronRight.jsx";
import styled from "styled-components";

const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 0.7fr 3fr 1fr;
  padding-top: 20px;
  font-size: 12px;
`;
const ColumnOne = styled.span`
  justify-self: end;
  font-size: 16px;
`;
const ColumnTwo = styled.span`
  padding-left: 15px;
`;
const ColumnThree = styled.span`
  justify-self: start;
  font-size: 16px;
`;
const SalonName = styled.span`
  font-size: 16px;
`;
const Ratings = styled.span`
  color: #666666;
`;
const StreetAddress = styled.span`
  font-size: 14px;
  color: ;
`;
const HaircutDuration = styled.span`
  color: #666666;
  display: inline-block;
  margin-top: 15px;
  font-size: 12px;
`;
const DividingLine = styled.hr`
  width: "90%";
  color: rgba(0, 0, 0, 0.1);
`;

const ListItem = ({ hairSalon }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <ColumnOne>{hairSalon.availableHours}</ColumnOne>
        <ColumnTwo>
          <SalonName>{hairSalon.salonName}</SalonName>
          <br />
          <RatingsIcon />
          <Ratings>{`  (${hairSalon.ratings})`}</Ratings>
          <br />
          <StreetAddress>{hairSalon.streetAddress}</StreetAddress>
        </ColumnTwo>

        <ColumnThree>
          {hairSalon.prices[0]} kr
          <br />
          <HaircutDuration>
            {hairSalon.haircutDuration} min
            <ChevronRight />
          </HaircutDuration>
        </ColumnThree>
        <DividingLine />
      </Wrapper>
    </React.Fragment>
  );
};

export default ListItem;
