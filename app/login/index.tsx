import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import HeaderHidden from "../../components/headers/HeaderHidden";
import { router } from "expo-router";
import FullLogo from "../../components/FullLogo";

import { users } from "../../mocks/mocks";

export default function login() {
  const [email, onChangeemail] = useState("fulano@gmail.com");
  const [password, onChangePassword] = useState("123");

  return (
    <View className="flex-1 bg-gray-400 items-center">
      <HeaderHidden />
      <FullLogo />

      <TextInput
        className="h-14 w-11/12 p-3 bg-white text-black text-lg rounded-lg mt-24"
        placeholder="Seu Email"
        placeholderTextColor="black"
        onChangeText={onChangeemail}
        value={email}
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
          const user = users.find((user) => user.email === email);
          if (!user) {
            alert("Usuário não encontrado");
            return;
          }
          if (user.password !== password) {
            alert("Senha incorreta");
            return;
          }
          router.push("/home");
        }}
        className="bg-blue-700 w-11/12 h-14 items-center justify-center rounded-lg mt-6"
      >
        <Text className="text-white text-lg font-bold">ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/")} className="mt-4">
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
