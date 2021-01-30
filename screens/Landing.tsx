import React from "react";
import styled from "styled-components/native";

import { Flowers } from "../components/Shapes";

import { AntDesign } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

interface MessageProps extends Props {}

const Message = ({ navigation }: MessageProps) => {
  return (
    <MessageContainer>
      <Text>Up.on</Text>
      <SubText>
        Listen, Feel, Heard what you want to and get inspired...
      </SubText>
      <GetStarted onPress={() => navigation.navigate("Login")}>
        <GetStartedText>Get Started</GetStartedText>
        <AntDesign name="arrowright" size={24} color="white" />
      </GetStarted>
    </MessageContainer>
  );
};

const Text = styled.Text`
  font-size: 30px;
  font-weight: 700;
`;

const SubText = styled.Text`
  font-size: 15px;
  width: 200px;
  top: 10px;
`;

const GetStarted = styled.TouchableOpacity`
  background-color: #ff9292;
  width: 200px;
  height: 50px;
  border-radius: 10px;

  top: 30px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const GetStartedText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;

  right: 10px;
`;

const MessageContainer = styled.View`
  width: 100%;
  height: 300px;
  padding-left: 20px;
`;

const Landing = ({ navigation }: Props) => {
  return (
    <Container>
      <Message navigation={navigation} />
      <Flowers />
      <Flowers position="bottom" />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export default Landing;
