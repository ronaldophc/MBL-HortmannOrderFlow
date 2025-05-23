import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/headers/Header";

export default function CreateOrder() {
  const [customerName, setCustomerName] = useState("");
  const [orderDescription, setOrderDescription] = useState("");
  const [orderCode, setOrderCode] = useState("");

  const handleCreateOrder = () => {
    if (!customerName || !orderDescription || !orderCode) {
      alert("Preencha todos os campos!");
      return;
    }
    alert("Pedido criado com sucesso!");
  };

  return (
    <ScrollView className="flex-1 bg-gray-400">
      <Header />
      <View className="flex-1 items-center mt-8">
        <Text className="text-blue-700 text-3xl font-bold mb-8 text-center">
          CRIAR PEDIDO
        </Text>

        <TextInput
          className="h-14 w-11/12 bg-white text-black text-lg rounded-lg mb-4"
          placeholder="Nome do Cliente"
          placeholderTextColor="black"
          value={customerName}
          onChangeText={setCustomerName}
        />

        <TextInput
          className="h-24 w-11/12 bg-white text-black text-lg rounded-lg mb-4"
          placeholder="Descrição do Pedido"
          placeholderTextColor="black"
          value={orderDescription}
          onChangeText={setOrderDescription}
          multiline
        />

        <TextInput
          className="h-14 w-11/12 bg-white text-black text-lg rounded-lg mb-8"
          placeholder="Código do Pedido"
          placeholderTextColor="black"
          value={orderCode}
          onChangeText={setOrderCode}
        />

        <TouchableOpacity
          className="bg-blue-700 w-11/12 h-14 items-center justify-center rounded-lg"
          onPress={handleCreateOrder}
        >
          <Text className="text-white text-lg font-bold">CRIAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
