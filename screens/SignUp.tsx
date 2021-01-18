import React, { useState } from "react";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text<{ color?: string }>`
  color: ${(props) => props.color || "black"};
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

const SignUpLink = styled(Text)`
  text-decoration: underline;
`;

const Login = styled(Text)`
  margin-top: 10px;
`;

interface Props {
  navigation: any;
}

export default function SignUp({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <Container>
      <Text>Sign Up</Text>
      <Input
        placeholder="Full Name"
        placeholderTextColor="#aaaaaa"
        onChangeText={setName}
        value={name}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Input
        placeholder="E-mail"
        placeholderTextColor="#aaaaaa"
        onChangeText={setEmail}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Input
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="#aaaaaa"
        onChangeText={setPassword}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Input
        secureTextEntry
        placeholder="Confirm Password"
        placeholderTextColor="#aaaaaa"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Button onPress={() => {}}>
        <Text color="white">Create Account</Text>
      </Button>
      <Login>
        Already got an account?{" "}
        <SignUpLink onPress={() => navigation.navigate("Login")}>
          Login
        </SignUpLink>
      </Login>
    </Container>
  );
}
