import { ScrollView, View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import HeaderHidden from "../../components/headers/HeaderHidden";
import Track from "../../components/order/Track";
import FullLogo from "../../components/FullLogo";
import SugestLogin from "../../components/SugestLogin";
import Updates from "../../components/order/Updates";
import Loading from "../../components/Loading";
import useOrderByCode from "../../firebase/hooks/userOrderByCode";

export default function index() {
  const { id } = useGlobalSearchParams();
  const { order, loading } = useOrderByCode(id as string);

  if (loading || !order) {
    return <Loading />;
  }

  return (
    <ScrollView className="flex-1 bg-gray-400">
      <View className="flex-1 bg-gray-400 items-center">
        <HeaderHidden />
        <FullLogo />

        <Track oldOrderCode={id as string} />

        <Updates id={order.id as string} />

        <SugestLogin />
      </View>
    </ScrollView>
  );
}
