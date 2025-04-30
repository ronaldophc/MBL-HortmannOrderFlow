import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { DEFAULT_BACKGROUND_COLOR_HEADER } from "../../constants/globalStyles";

function LogoTitle() {
  return (
    <Image style={styles.image} source={require("../../assets/logo.png")} />
  );
}

function CreateButton() {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Ionicons name="add-circle-sharp" size={40} color="white" />
    </TouchableOpacity>
  );
}

export default function HeaderWithTitle() {
  return (
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: DEFAULT_BACKGROUND_COLOR_HEADER },
        headerTitle: () => <LogoTitle />,
        headerTitleAlign: "center",
        headerRight: () => <CreateButton />,
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
});
