import React from "react";

import styled from "styled-components/native";

const Pagination = () => (
  <Container>
    <DotsContainer>
      <Dots active={true} />
      <Dots />
      <Dots />
      <Dots />
      <Dots />
    </DotsContainer>
  </Container>
);

const Container = styled.View`
  display: flex;
  margin-top: 10px;
  margin-left: 20px;
  width: 140px;
`;

export const PaginationText = styled.Text`
  font-size: 20px;
  margin-left: 30px;
  margin-top: 30px;
  font-weight: 600;
  font-variant: tabular-nums;
`;

const DotsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 120px;
  top: 10px;
`;

const Dots = styled.View<{ active?: boolean }>`
  height: 15px;
  width: 15px;

  border-radius: 50px;

  background-color: ${(props) => (props.active ? "#FF9292" : "#ccc")};
`;

export default Pagination;
