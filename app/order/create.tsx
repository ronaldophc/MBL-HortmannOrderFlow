import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/headers/Header";
import DefaultInput from "../../components/DefaultInput";

export default function CreateOrder() {
  const [customerName, setCustomerName] = useState("");
  const [orderDescription, setOrderDescription] = useState("");
  const [orderCode, setOrderCode] = useState("");

  const handleCreateOrder = () => {
    if (!customerName || !orderDescription || !orderCode) {
      alert("Preencha todos os campos!");
      return;
    }
    console.log({
      customerName,
      orderDescription,
      orderCode,
    });
    alert("Pedido criado com sucesso!");
  };

  return (
    <ScrollView className="flex-1 bg-gray-400">
      <Header />
      <View className="flex-1 items-start mt-8 w-full px-4">
        <Text className="text-blue-700 text-3xl font-bold mb-8 text-center">
          CRIAR PEDIDO
        </Text>

        <Text className="text-black font-semibold mb-1">Nome do cliente</Text>
        <DefaultInput
          value={customerName}
          onChangeText={setCustomerName}
        />

        <Text className="text-black font-semibold mb-1">
          Descrição do Pedido
        </Text>
        <DefaultInput
        className="h-24"
          value={orderDescription}
          onChangeText={setOrderDescription}
          multiline
        />

        <Text className="text-black font-semibold mb-1">
          Código do pedido
        </Text>
        <DefaultInput
          value={orderCode}
          onChangeText={setOrderCode}
        />

        <TouchableOpacity
          className="bg-blue-700 w-full h-14 items-center justify-center rounded-lg"
          onPress={handleCreateOrder}
        >
          <Text className="text-white text-lg font-bold">CRIAR PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
