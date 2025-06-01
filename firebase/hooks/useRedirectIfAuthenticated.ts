import { View, Text } from "react-native";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { router } from "expo-router";

export default function useRedirectIfAuthenticated() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (user == null) {
      router.replace("/");
    }
  }, [user]);
}
