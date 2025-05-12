import { View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import HeaderHidden from "../../components/headers/HeaderHidden";
import InfoStatus from "../../components/order/InfoStatus";
import Track from "../../components/order/Track";
import FullLogo from "../../components/FullLogo";
import SugestLogin from "../../components/SugestLogin";
import { updates } from "../../mocks/mocks";

export default function index() {
  const { id } = useGlobalSearchParams();

  return (
    <View className="flex-1 bg-gray-400 items-center">
      <HeaderHidden />
      <FullLogo />

      <Track oldOrderCode={id as string} />

      <View className="w-11/12 mt-5 items-center gap-4">
        {updates
          .filter((update) => update.order_code == id)
          .map((update) => (
            <InfoStatus
              key={update.id}
              status={update.status}
              date={update.date}
              description={update.description}
            />
          ))}
      </View>

      <SugestLogin />
    </View>
  );
}
