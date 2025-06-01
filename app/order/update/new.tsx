import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import Header from "../../../components/headers/Header";

import { Picker } from "@react-native-picker/picker";
import { router, useGlobalSearchParams } from "expo-router";
import DefaultInput from "../../../components/DefaultInput";
import useDocument from "../../../firebase/hooks/useDocument";
import Order from "../../../types/Order";
import Loading from "../../../components/Loading";
import useCollection from "../../../firebase/hooks/useCollection";
import Updates from "../../../types/Updates";

export default function index() {
  const { id } = useGlobalSearchParams();
  const { data: order, loading, upsert } = useDocument<Order>("orders", id as string);
  const { create, refreshData } = useCollection<Updates>("updates");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  if (loading || !order) return <Loading />;

  const handleNewUpdate = async () => {
    if (!description || !order) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      await create({
        order_id: order.id ?? "",
        status,
        date: new Date().toISOString(),
        description,
      });

      await upsert({
        ...order,
        status,
      });

      Alert.alert("Atualização criada com sucesso!");
      await refreshData();
      router.replace(`/order/${order.id}`);
    } catch (error: any) {
      console.error("Erro ao criar atualização:", error);
      alert("Erro ao criar atualização. Tente novamente.");
    }
  };

  return (
    <View className="flex-1 bg-gray-400">
      <Header />
      <View className="flex-1 items-start mt-8 w-full px-4">
        <Text className="text-blue-700 text-3xl font-bold mb-8 text-center">
          PEDIDO {order.code}
        </Text>

        <Text className="text-black font-semibold mb-1">
          Descrição da atualização
        </Text>
        <DefaultInput
          className="h-24"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <Text className="text-black font-semibold mb-1">
          Status da atualização
        </Text>
        <Picker
          selectedValue={status}
          onValueChange={(status) => setStatus(status)}
          style={{
            width: "100%",
            height: 56,
            backgroundColor: "white",
            borderRadius: 8,
            marginBottom: 16,
          }}
        >
          <Picker.Item label="Selecione um status" value="" />
          <Picker.Item label="Pendente" value="pending" />
          <Picker.Item label="Em separação" value="separation" />
          <Picker.Item label="Em produção" value="production" />
          <Picker.Item label="Enviado" value="sent" />
          <Picker.Item label="Entregue" value="delivered" />
        </Picker>

        <TouchableOpacity
          className="bg-blue-700 w-full h-14 items-center justify-center rounded-lg my-4"
          onPress={() => {
            handleNewUpdate();
          }}
        >
          <Text className="text-white text-lg font-bold">
            Criar atualização
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
