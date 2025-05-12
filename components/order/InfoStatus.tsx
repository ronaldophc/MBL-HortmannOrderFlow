import { View, Text } from "react-native";
import React from "react";

type InfoStatusProps = {
  status: string;
  date: string;
  description: string;
};

export default function InfoStatus({
  status,
  date,
  description,
}: InfoStatusProps) {
  return (
    <View className="bg-gray-300 w-full p-2">
      <Text className="font-bold text-lg">
        {status} {date}
      </Text>
      <Text>{description}</Text>
    </View>
  );
}
