import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import HeaderHidden from "../components/headers/HeaderHidden";
import Track from "../components/order/Track";
import FullLogo from "../components/FullLogo";
import SugestLogin from "../components/SugestLogin";

export default function index() {
  return (
    <View className="flex-1 bg-gray-400 items-center">
      <HeaderHidden />
      <FullLogo />

      <Text className="text-white text-xl font-bold mt-24">
        Por favor, insira o código do seu pedido.
      </Text>

      <Track />

      <SugestLogin />
    </View>
  );
}
