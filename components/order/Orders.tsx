import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import useCollection from "../../firebase/hooks/useCollection";
import Order from "../../types/Order";
import Loading from "../Loading";

export default function Orders() {
  const { data, loading } =
    useCollection<Order>("orders");

  if (loading) return <Loading />;

  return (
    <View className="flex-1 justify-center items-center mt-4">
      <View className="w-11/12 gap-4">
        {data.map((order, index) => (
          <TouchableOpacity
            onPress={() => {
              router.push(`/order/${order.id}`);
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
