import React from "react";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: green;
`;

export default function TabTwoScreen() {
  return (
    <Container>
      <StyledText>Signup Screen.</StyledText>
    </Container>
  );
}
