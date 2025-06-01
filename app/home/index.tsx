import { Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Header from "../../components/headers/Header";
import Order from "../../components/order/Orders";
import useAuth from "../../firebase/hooks/useAuth";
import { router } from "expo-router";
import Loading from "../../components/Loading";

export default function index() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (user == null) {
      router.replace("/");
    }
  }, [user]);

  if (loading) return <Loading />;

  return (
    <ScrollView className="flex-1 bg-gray-400">
      <Header />
      <Text className="text-blue-700 text-3xl font-bold mb-8 text-center mt-8">
        MEUS PEDIDOS
      </Text>
      <Order />
    </ScrollView>
  );
}
