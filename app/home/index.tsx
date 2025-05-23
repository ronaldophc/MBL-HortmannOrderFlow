import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/headers/Header";
import Order from "../../components/order/Orders";

export default function index() {
  return (
    <ScrollView className="flex-1 bg-gray-400">
      <Header />
      <Text className="text-blue-700 text-3xl font-bold mb-8 text-center mt-8">
        MEUS PEDIDOS
      </Text>
      <Order />
    </ScrollView>
  );
}
