import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import HeaderHidden from "../components/headers/HeaderHidden";
import Track from "../components/order/Track";
import FullLogo from "../components/FullLogo";
import SugestLogin from "../components/SugestLogin";
import useAuth from "../firebase/hooks/useAuth";
import Loading from "../components/Loading";

export default function index() {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (loading) return;
    if (user) {
      router.replace("/home");
    }
  }, [user]);

  if (loading) return <Loading />;

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
