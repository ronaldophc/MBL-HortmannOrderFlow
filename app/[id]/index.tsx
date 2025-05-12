import { View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import HeaderHidden from "../../components/headers/HeaderHidden";
import InfoStatus from "../../components/order/InfoStatus";
import Track from "../../components/order/Track";
import FullLogo from "../../components/FullLogo";
import SugestLogin from "../../components/SugestLogin";

export default function index() {
  const { id } = useGlobalSearchParams();

  return (
    <View className="flex-1 bg-gray-400 items-center">
      <HeaderHidden />
      <FullLogo />

      <Track oldOrderCode={id as string} />

      <View className="w-11/12 mt-5 items-center gap-4">
        <InfoStatus
          status="Pedido enviado"
          orderDate="15/03/2025 17:30"
          orderDescription="Pedido enviado. Para mais informações entre em contato com (42) 99999-9999."
        />
        <InfoStatus
          status="Pedido em produção"
          orderDate="15/03/2025 10:00"
          orderDescription="Pedido sendo produzido."
        />
      </View>

      <SugestLogin />
    </View>
  );
}
