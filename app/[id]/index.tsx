import { ScrollView, View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import HeaderHidden from "../../components/headers/HeaderHidden";
import Track from "../../components/order/Track";
import FullLogo from "../../components/FullLogo";
import SugestLogin from "../../components/SugestLogin";
import Updates from "../../components/order/Updates";

export default function index() {
  const { id } = useGlobalSearchParams();

  return (
    <ScrollView className="flex-1 bg-gray-400">
      <View className="flex-1 bg-gray-400 items-center">
        <HeaderHidden />
        <FullLogo />

        <Track oldOrderCode={id as string} />

        <Updates code={id as string} />

        <SugestLogin />
      </View>
    </ScrollView>
  );
}
