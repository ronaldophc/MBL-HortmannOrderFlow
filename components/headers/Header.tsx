import React from "react";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity } from "react-native";
import useAuth from "../../firebase/hooks/useAuth";

function LogoTitle() {
  return (
    <Image className="w-10 h-10" source={require("../../assets/logo.png")} />
  );
}

function CreateButton() {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/order/create");
      }}
    >
      <Ionicons name="add-circle-sharp" size={40} color="white" />
    </TouchableOpacity>
  );
}

export default function Header() {
  const { logout } = useAuth();
  return (
    <Stack.Screen
      options={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={async () => {
              try {
                await logout();
                router.replace("/");
              } catch (error) {
                console.error("Erro ao sair:", error);
                alert("Erro ao sair. Tente novamente.");
              }
            }}
          >
            <Text className="text-white text-2xl">Sair</Text>
          </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: "#2D0097" },
        headerTitle: () => <LogoTitle />,
        headerTitleAlign: "center",
        headerRight: () => <CreateButton />,
        headerTintColor: "white",
      }}
    />
  );
}
