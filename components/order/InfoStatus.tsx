import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SECOND_BACKGROUND_COLOR } from "../../constants/globalStyles";

type InfoStatusProps = {
  status: string;
  orderDate: string;
  orderDescription: string;
};

export default function InfoStatus({
  status,
  orderDate,
  orderDescription,
}: InfoStatusProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {status} {orderDate}
      </Text>
      <Text>{orderDescription}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: SECOND_BACKGROUND_COLOR,
    padding: 10,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
