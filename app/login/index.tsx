import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HeaderHidden from "../../components/headers/HeaderHidden";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_COLOR,
  DEFAULT_TEXT_COLOR,
} from "../../constants/globalStyles";
import { router } from "expo-router";

export default function login() {
  const [username, onChangeUsername] = useState("fulano");
  const [password, onChangePassword] = useState("123");

  return (
    <View style={styles.container}>
      <HeaderHidden />
      <View style={styles.header}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
        <Text style={styles.title}>Hortmann OrderFlow</Text>
      </View>

      <TextInput
        style={[styles.input]}
        placeholder="Seu Email"
        placeholderTextColor="black"
        onChangeText={onChangeUsername}
        value={username}
      />
      <TextInput
        secureTextEntry
        placeholder="Sua senha"
        placeholderTextColor="black"
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
      />
      <TouchableOpacity
        onPress={() => {
          router.push("/home");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 30,
    color: DEFAULT_TEXT_COLOR,
    fontWeight: "bold",
  },
  header: {
    marginTop: 100,
    alignItems: "center",
    marginBottom: 100,
  },
  input: {
    height: 60,
    width: "90%",
    padding: 10,
    backgroundColor: "white",
    color: "black",
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: DEFAULT_COLOR,
    width: "90%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
