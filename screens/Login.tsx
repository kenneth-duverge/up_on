import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: black;
  text-align: center;
`;

const Input = styled.TextInput`
  height: 48px;
  border-radius: 5px;
  width: 80%;
  background-color: white;
  margin: 10px 30px;
  padding-left: 16;
`;

const Button = styled.TouchableOpacity`
  background-color: #788eec;
  margin: 20px 30px 0 30px;
  height: 48px;
  width: 80%;
  border-radius: 5;
  align-items: center;
  justify-content: center;
`;

const WhiteText = styled(Text)`
  color: white;
`;

const SignUpLink = styled(Text)`
  text-decoration: underline;
`;

const SignUp = styled(Text)`
  margin-top: 10px;
`;

interface Props {
  navigation: any;
}

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Text>Login</Text>
      <Input
        placeholder="E-mail"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Input
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Button onPress={() => {}}>
        <WhiteText>Log in</WhiteText>
      </Button>
      <SignUp>
        Don't have an account?{" "}
        <SignUpLink onPress={() => navigation.navigate("SignUp")}>
          Sign Up
        </SignUpLink>
      </SignUp>
    </Container>
  );
}
