import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderHidden from "../../components/headers/HeaderHidden";
import { router } from "expo-router";
import FullLogo from "../../components/FullLogo";

import DefaultInput from "../../components/DefaultInput";
import useAuth from "../../firebase/hooks/useAuth";
import Loading from "../../components/Loading";

export default function login() {
  const { user, login, loading } = useAuth();
  const [email, setEmail] = useState("fulano@gmail.com");
  const [password, setPassword] = useState("123456");

  useEffect(() => {
    if (loading) return;
    if (user) {
      router.replace("/home");
    }
  }, [user]);

  if (loading) return <Loading />;

  async function handleLogin() {
    try {
      await login(email, password);
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Login error", error.message.toString());
    }
  }

  function handleBack() {
    router.push("/");
  }

  return (
    <View className="flex-1 bg-gray-400 items-start mt-8 w-full px-4">
      <HeaderHidden />
      <FullLogo />

      <Text className="text-black font-semibold mb-1 mt-4">Seu Email</Text>
      <DefaultInput onChangeText={setEmail} value={email} />

      <Text className="text-black font-semibold mb-1">Sua senha</Text>
      <DefaultInput
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-700 w-full h-14 items-center justify-center rounded-lg"
      >
        <Text className="text-white text-lg font-bold">ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBack} className="mt-4 self-center">
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
