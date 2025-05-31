import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "../../../components/headers/Header";

import { orders } from "../../../mocks/mocks";
import { Picker } from "@react-native-picker/picker";
import { useGlobalSearchParams } from "expo-router";
import DefaultInput from "../../../components/DefaultInput";

export default function index() {
  const { code } = useGlobalSearchParams();
  const order = orders.find((order) => order.code === code);
  const [orderDescription, setOrderDescription] = useState(order?.description);

  const handleNewUpdate = () => {
    if (!orderDescription || !order?.status) {
      alert("Preencha todos os campos!");
      return;
    }
    alert("Atualização criada com sucesso!");
  };

  return (
    <View className="flex-1 bg-gray-400">
      <Header />
      <View className="flex-1 items-start mt-8 w-full px-4">
        <Text className="text-blue-700 text-3xl font-bold mb-8 text-center">
          PEDIDO {order?.code}
        </Text>

        <Text className="text-black font-semibold mb-1">
          Descrição da atualização
        </Text>
        <DefaultInput
          className="h-24"
          value={orderDescription}
          onChangeText={setOrderDescription}
          multiline
        />

        <Text className="text-black font-semibold mb-1">
          Status da atualização
        </Text>
        <Picker
          selectedValue={order?.status}
          //   onValueChange={(itemValue) => setStatus(itemValue)}
          style={{
            width: "100%",
            height: 56,
            backgroundColor: "white",
            borderRadius: 8,
            marginBottom: 16,
          }}
        >
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
