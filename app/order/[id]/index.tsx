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
import DefaultInput from "../../../components/DefaultInput";

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
      <View className="flex-1 items-start mt-8 w-full px-4">
        <Text className="text-blue-700 text-3xl font-bold mb-8 text-center">
          PEDIDO {order?.code}
        </Text>
        <Text className="text-black font-semibold mb-1">Nome do Cliente</Text>
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

        <Text className="text-black font-semibold mb-1">Código do pedido</Text>
        <DefaultInput
          value={orderCode}
          onChangeText={setOrderCode}
          multiline
        />

        <TouchableOpacity
          className="bg-blue-700 w-full h-14 items-center justify-center rounded-lg"
          onPress={handleUpdateOrder}
        >
          <Text className="text-white text-lg font-bold">ATUALIZAR</Text>
        </TouchableOpacity>

        <Updates code={order?.code as string} />

        <TouchableOpacity
          className="bg-blue-700 w-full h-14 items-center justify-center rounded-lg my-4"
          onPress={() => {
            router.push(`/order/update/new?code=${order?.code}`);
          }}
        >
          <Text className="text-white text-lg font-bold">Criar atualização</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
