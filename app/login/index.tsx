import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import HeaderHidden from "../../components/headers/HeaderHidden";
import { router } from "expo-router";

export default function login() {
  const [username, onChangeUsername] = useState("fulano");
  const [password, onChangePassword] = useState("123");

  return (
    <View className="flex-1 bg-gray-400 items-center">
      <HeaderHidden />
      <View className="mt-24 items-center">
        <Image
          className="w-24 h-24"
          source={require("../../assets/logo.png")}
        />
        <Text className="text-blue-700 text-3xl font-bold mt-4">
          Hortmann OrderFlow
        </Text>
      </View>

      <TextInput
        className="h-14 w-11/12 p-3 bg-white text-black text-lg rounded-lg mt-24"
        placeholder="Seu Email"
        placeholderTextColor="black"
        onChangeText={onChangeUsername}
        value={username}
      />
      <TextInput
        secureTextEntry
        className="h-14 w-11/12 p-3 bg-white text-black text-lg rounded-lg mt-4"
        placeholder="Sua senha"
        placeholderTextColor="black"
        onChangeText={onChangePassword}
        value={password}
      />
      <TouchableOpacity
        onPress={() => {
          router.push("/home");
        }}
        className="bg-blue-700 w-11/12 h-14 items-center justify-center rounded-lg mt-6"
      >
        <Text className="text-white text-lg font-bold">ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
