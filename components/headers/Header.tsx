import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";

function LogoTitle() {
  return (
    <Image className="w-10 h-10" source={require("../../assets/logo.png")} />
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
        headerStyle: { backgroundColor: '#2D0097' },
        headerTitle: () => <LogoTitle />,
        headerTitleAlign: "center",
        headerRight: () => <CreateButton />,
      }}
    />
  );
}
