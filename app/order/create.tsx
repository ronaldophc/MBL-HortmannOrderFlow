import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/headers/Header";
import DefaultInput from "../../components/DefaultInput";
import useCollection from "../../firebase/hooks/useCollection";
import Order from "../../types/Order";
import useAuth from "../../firebase/hooks/useAuth";
import Loading from "../../components/Loading";
import { router } from "expo-router";
import useRedirectIfAuthenticated from "../../firebase/hooks/useRedirectIfAuthenticated";

export default function CreateOrder() {
  const { user, loading } = useAuth();
  const { create, data } = useCollection<Order>("orders");
  const [customerName, setCustomerName] = useState("");
  const [orderDescription, setOrderDescription] = useState("");
  const [orderCode, setOrderCode] = useState("");

  useRedirectIfAuthenticated();
  
  if (loading) return <Loading />;

  async function handleCreateOrder() {
    if (!customerName || !orderDescription || !orderCode) {
      alert("Preencha todos os campos!");
      return;
    }

    if (data.some((order) => order.code === orderCode)) {
      alert("Já existe um pedido com esse código!");
      return;
    }

    try {
      await create({
        code: orderCode,
        status: "Pendente",
        date: new Date().toISOString(),
        description: orderDescription,
        user_id: user!.uid,
        customer_name: customerName,
      });

      router.push("/home");
    } catch (error: any) {
      console.error("Erro ao criar pedido:", error);
      alert("Erro ao criar pedido. Tente novamente.");
    }
  }

  return (
    <ScrollView className="flex-1 bg-gray-400">
      <Header />
      <View className="flex-1 items-start mt-8 w-full px-4">
        <Text className="text-blue-700 text-3xl font-bold mb-8 text-center">
          CRIAR PEDIDO
        </Text>

        <Text className="text-black font-semibold mb-1">Nome do cliente</Text>
        <DefaultInput value={customerName} onChangeText={setCustomerName} />

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
        <DefaultInput value={orderCode} onChangeText={setOrderCode} />

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
