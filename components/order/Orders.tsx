import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { orders } from "../../mocks/mocks";
import { router } from "expo-router";

export default function Orders() {
  return (
    <View className="flex-1 justify-center items-center mt-4">
      <View className="w-11/12 gap-4">
        {orders.map((order, index) => (
          <TouchableOpacity
            onPress={() => {
              router.push(`/order/${order.code}`);
            }}
            key={index}
            className="bg-white p-4 rounded-lg shadow-md w-full"
          >
            <Text className="text-lg font-bold">{order.customer_name}</Text>
            <Text className="text-gray-500">
              {order.status} - Código: {order.code}
            </Text>
            <Text className="text-gray-600">{order.description}</Text>
            <Text className="text-gray-400">{order.date}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
