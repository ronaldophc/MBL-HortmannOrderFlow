import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Header from "../../../components/headers/Header";

import { orders } from "../../../mocks/mocks";
import { Picker } from "@react-native-picker/picker";
import { useGlobalSearchParams } from "expo-router";

export default function index() {
  const { code } = useGlobalSearchParams();
  const order = orders.find((order) => order.code === code);
  const [orderDescription, setOrderDescription] = useState(order?.description);

  return (
    <View className="flex-1 bg-gray-400">
      <Header />
      <View className="flex-1 items-center mt-8">
        <Text className="text-blue-700 text-3xl font-bold mb-8 text-center">
          PEDIDO {order?.code}
        </Text>

        <TextInput
          className="h-24 w-11/12 bg-white text-black text-lg rounded-lg mb-4"
          placeholder="Descrição da atualização"
          placeholderTextColor="black"
          value={orderDescription}
          onChangeText={setOrderDescription}
          multiline
        />

        <Picker
          selectedValue={order?.status}
          //   onValueChange={(itemValue) => setStatus(itemValue)}
          style={{
            width: "91%",
            height: 56,
            backgroundColor: "white",
            borderRadius: 8,
            marginBottom: 16,
          }}
        >
          <Picker.Item label="Pendente" value="pendente" />
          <Picker.Item label="Em produção" value="producao" />
          <Picker.Item label="Enviado" value="enviado" />
          <Picker.Item label="Entregue" value="entregue" />
        </Picker>
      </View>
    </View>
  );
}
