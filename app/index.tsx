import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import HeaderHidden from "../components/headers/HeaderHidden";

export default function index() {
  const [orderCode, onChangeOrderCode] = useState("a");

  return (
    <View className="flex-1 bg-gray-400 items-center">
      <HeaderHidden />
      <View className="mt-24 items-center">
        <Image className="w-20 h-20" source={require("../assets/logo.png")} />
        <Text className="font-bold text-3xl text-blue-700">
          Hortmann OrderFlow
        </Text>
      </View>

      <Text className="text-white text-xl font-bold mt-24">
        Por favor, insira o código do seu pedido.
      </Text>

      <TextInput
        placeholder="Insira o código do pedido"
        placeholderTextColor="black"
        className="h-14 w-11/12 p-3 bg-white text-black text-lg rounded-t-lg mt-16"
        onChangeText={onChangeOrderCode}
        value={orderCode}
      />
      <TouchableOpacity
        onPress={() => {
          router.push(`/${orderCode}`);
        }}
        className="bg-blue-700 w-11/12 h-14 items-center justify-center rounded-b-lg"
      >
        <Text className="text-white text-lg font-bold">VERIFICAR</Text>
      </TouchableOpacity>

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
    </View>
  );
}
