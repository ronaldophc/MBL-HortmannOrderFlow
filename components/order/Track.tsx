import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

type TrackProps = {
    oldOrderCode?: string;
};

export default function Track({ oldOrderCode }: TrackProps) {
  const [orderCode, onChangeOrderCode] = useState(oldOrderCode || "");

  return (
    <>
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
    </>
  );
}
