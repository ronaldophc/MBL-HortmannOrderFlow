import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useGlobalSearchParams } from "expo-router";
import HeaderHidden from "../../components/headers/HeaderHidden";
import InfoStatus from "../../components/order/InfoStatus";

export default function index() {
  const { id } = useGlobalSearchParams();
  const [orderCode, onChangeOrderCode] = useState(id as string);

  return (
    <View className="flex-1 bg-gray-400 items-center">
      <HeaderHidden />
      <View className="mt-10 items-center">
        <Image
          className="w-20 h-20"
          source={require("../../assets/logo.png")}
        />
        <Text className="text-blue-700 text-3xl font-bold mt-2">
          Hortmann OrderFlow
        </Text>
      </View>

      <TextInput
        placeholder="Insira o código do pedido"
        placeholderTextColor="black"
        className="h-14 w-11/12 p-3 bg-white text-black text-lg rounded-t-lg mt-5"
        onChangeText={onChangeOrderCode}
        value={orderCode}
      />
      <TouchableOpacity
        onPress={() => {
          router.push("/1");
        }}
        className="bg-blue-700 w-11/12 h-14 items-center justify-center rounded-b-lg"
      >
        <Text className="text-white text-lg font-bold">VERIFICAR</Text>
      </TouchableOpacity>

      <View className="w-11/12 mt-5 items-center gap-4">
        <InfoStatus
          status="Pedido enviado"
          orderDate="15/03/2025 17:30"
          orderDescription="Pedido enviado. Para mais informações entre em contato com (42) 99999-9999."
        />
        <InfoStatus
          status="Pedido em produção"
          orderDate="15/03/2025 10:00"
          orderDescription="Pedido sendo produzido."
        />
      </View>

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
