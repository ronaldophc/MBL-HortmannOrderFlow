import { View, Text, Image } from "react-native";
import React from "react";

export default function FullLogo() {
  return (
    <View className="w-full mt-10 items-center">
      <Image className="w-20 h-20" source={require("../assets/logo.png")} />
      <Text className="text-blue-700 text-3xl font-bold mt-2 self-center">
        Hortmann OrderFlow
      </Text>
    </View>
  );
}
