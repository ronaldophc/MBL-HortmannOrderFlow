import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function SugestLogin() {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/login");
      }}
      className="flex-row items-center justify-center mt-12"
    >
      <Text className="text-white text-xl font-bold">Possui cadastro? </Text>
      <Text className="text-blue-700 text-xl font-bold underline">
        Entre aqui!
      </Text>
    </TouchableOpacity>
  );
}
