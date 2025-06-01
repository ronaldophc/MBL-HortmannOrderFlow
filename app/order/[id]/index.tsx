import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useGlobalSearchParams } from "expo-router";
import Header from "../../../components/headers/Header";
import Updates from "../../../components/order/Updates";
import DefaultInput from "../../../components/DefaultInput";
import useCollection from "../../../firebase/hooks/useCollection";
import Order from "../../../types/Order";
import Loading from "../../../components/Loading";
import useDocument from "../../../firebase/hooks/useDocument";

export default function index() {
  const { id } = useGlobalSearchParams();
  const {
    data: order,
    loading,
    upsert,
    refresh,
  } = useDocument<Order>("orders", id as string);
  const { data } = useCollection<Order>("orders");
  const [customerName, setCustomerName] = useState("");
  const [orderDescription, setOrderDescription] = useState("");
  const [orderCode, setOrderCode] = useState("");

  useEffect(() => {
    if (order) {
      if (customerName !== order.customer_name)
        setCustomerName(order.customer_name);
      if (orderDescription !== order.description)
        setOrderDescription(order.description);
      if (orderCode !== order.id) setOrderCode(order.code);
    }
  }, [order]);

  if (loading || !order) return <Loading />;

  const handleUpdateOrder = async () => {
    if (!customerName || !orderDescription || !orderCode) {
      alert("Preencha todos os campos!");
      return;
    }
    if (data.some((order) => order.code === orderCode) && orderCode !== order.code) {
      alert("Já existe um pedido com esse código!");
      return;
    }

    try {
      await upsert({
        ...order,
        code: orderCode,
        description: orderDescription,
        customer_name: customerName,
      });
      refresh();
    } catch (error) {
      console.error("Erro ao atualizar o pedido:", error);
      alert("Erro ao atualizar o pedido. Tente novamente.");
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-400">
      <Header />
      <View className="flex-1 items-start mt-8 w-full px-4">
        <Text className="text-blue-700 text-3xl font-bold mb-8 text-center self-center">
          PEDIDO {order.code}
        </Text>
        <Text className="text-black font-semibold mb-1">Nome do Cliente</Text>
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
        <DefaultInput value={orderCode} onChangeText={setOrderCode} multiline />

        <TouchableOpacity
          className="bg-blue-700 w-full h-14 items-center justify-center rounded-lg"
          onPress={handleUpdateOrder}
        >
          <Text className="text-white text-lg font-bold">ATUALIZAR</Text>
        </TouchableOpacity>

        <Updates id={order.id as string} />

        <TouchableOpacity
          className="bg-blue-700 w-full h-14 items-center justify-center rounded-lg my-4"
          // onPress={() => {
          //   router.push(`/order/update/new?id=${order.id}`);
          // }}
        >
          <Text className="text-white text-lg font-bold">
            Criar atualização
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
