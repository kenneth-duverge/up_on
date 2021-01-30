import React, { useState } from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

import * as Shapes from "../components/Shapes";

import Google from '../components/Icons/Google';

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const InnerContainer = styled.View`
  height: 70%;
  width: 100%;

  display: flex;

  padding: 0 20px;
`;

const Header = styled.Text`
  color: black;
  align-self: flex-start;

  font-size: 30px;
  font-weight: 700;
`;

const Text = styled.Text`
  color: black;
`;

const SubText = styled(Text)`
  margin-top: 20px;
  width: 250px;

  font-weight: 600;
`;

const Input = styled.TextInput`
  height: 48px;
  border-radius: 5px;
  width: 100%;
  background-color: white;
  padding-left: 16px;
  margin-top: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: #ff9292;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  align-self: center;
`;

const WhiteText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

const SignUpLink = styled(Text)`
  text-decoration: underline;
  text-align: center;
  top: 20px;
`;

const Facebook = styled.TouchableOpacity`
  background-color: white;
  width: 150px;
  height: 50px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  width: 100%;

  height: 150px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

interface Props {
  navigation: any;
}

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Shapes.Green />
      <Shapes.Yellow />
      <Shapes.Pink />
      <InnerContainer>
        <Header>Login</Header>
        <SubText>Please enter details to continue with the App</SubText>
        <Input
          placeholder="Enter E-mail Address"
          placeholderTextColor="#aaaaaa"
          onChangeText={setEmail}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Input
          secureTextEntry
          placeholder="Ented Password"
          placeholderTextColor="#aaaaaa"
          onChangeText={setPassword}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Button onPress={() => navigation.navigate("Landing")}>
          <WhiteText>Login</WhiteText>
        </Button>
        <SignUpLink onPress={() => navigation.navigate("SignUp")}>
          or
        </SignUpLink>
        <ButtonContainer>
          <Facebook>
            <Google />
            <Text style={{ left: 5 }}>Google</Text>
          </Facebook>
          <Facebook>
            <FontAwesome5 name="facebook" size={24} color="#3C5A9A" />
            <Text style={{ left: 5 }}>Facebook</Text>
          </Facebook>
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
}
