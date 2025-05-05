import { View, Text } from "react-native";
import React from "react";

type InfoStatusProps = {
  status: string;
  orderDate: string;
  orderDescription: string;
};

export default function InfoStatus({
  status,
  orderDate,
  orderDescription,
}: InfoStatusProps) {
  return (
    <View className="bg-gray-300 w-full p-2">
      <Text className="font-bold text-lg">
        {status} {orderDate}
      </Text>
      <Text>{orderDescription}</Text>
    </View>
  );
}
