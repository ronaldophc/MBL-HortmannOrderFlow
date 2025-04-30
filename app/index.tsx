import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import HeaderWithTitle from "../components/headers/Header";
import { router } from "expo-router";
import { DEFAULT_BACKGROUND_COLOR } from "../constants/globalStyles";

export default function index() {
  return (
    <View style={styles.container}>
      <HeaderWithTitle />
      <Text>index</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/login");
        }}
      >
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
