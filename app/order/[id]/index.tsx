import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { router, useGlobalSearchParams } from "expo-router";
import { orders } from "../../../mocks/mocks";
import Header from "../../../components/headers/Header";
import Updates from "../../../components/order/Updates";

export default function index() {
  const { id } = useGlobalSearchParams();
  const order = orders.find((order) => order.code === id);
  const [customerName, setCustomerName] = useState(order?.customer_name);
  const [orderDescription, setOrderDescription] = useState(order?.description);
  const [orderCode, setOrderCode] = useState(order?.code);

  const handleUpdateOrder = () => {
    if (!customerName || !orderDescription || !orderCode) {
      alert("Preencha todos os campos!");
      return;
    }
    alert("Pedido atualizado com sucesso!");
  };

  return (
    <ScrollView className="flex-1 bg-gray-400">
      <Header />
      <View className="flex-1 items-center mt-8">
        <Text className="text-blue-700 text-3xl font-bold mb-8 text-center">
          PEDIDO {order?.code}
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
          onPress={handleUpdateOrder}
        >
          <Text className="text-white text-lg font-bold">ATUALIZAR</Text>
        </TouchableOpacity>

        <Updates code={order?.code as string} />

        <TouchableOpacity
          onPress={() => {
            router.push(`/order/update/new?code=${order?.code}`);
          }}
        >
          <Text>Criar atualização</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
