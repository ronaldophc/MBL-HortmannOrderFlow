import { router, useGlobalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderHidden from "../../components/headers/HeaderHidden";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_COLOR,
  DEFAULT_TEXT_COLOR,
} from "../../constants/globalStyles";
import InfoStatus from "../../components/order/InfoStatus";

export default function index() {
  const { id } = useGlobalSearchParams();

  const [orderCode, onChangeOrderCode] = useState(id as string);

  return (
    <View style={styles.container}>
      <HeaderHidden />
      <View style={styles.header}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
        <Text style={styles.title}>Hortmann OrderFlow</Text>
      </View>

      <TextInput
        placeholder="Insira o código do pedido"
        placeholderTextColor="black"
        style={styles.input}
        onChangeText={onChangeOrderCode}
        value={orderCode}
      />
      <TouchableOpacity
        onPress={() => {
          router.push("/1");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>VERIFICAR</Text>
      </TouchableOpacity>

      <View style={styles.statuses}>
        <InfoStatus
          status="Pedido enviado"
          orderDate="15/03/2025 17:30"
          orderDescription="Pedido enviado. Para mais informações entre em contato com (42) 99999-9999."
        />
        <InfoStatus
          status="Pedido em produção"
          orderDate="15/03/2025 10:00"
          orderDescription="Pedido sendo produzido."
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          router.push("/login");
        }}
        style={styles.buttonLogin}
      >
        <Text style={styles.buttonLoginText1}>Possui cadastro? </Text>
        <Text style={styles.buttonLoginText2}>Entre aqui!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 30,
    color: DEFAULT_TEXT_COLOR,
    fontWeight: "bold",
  },
  header: {
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    height: 60,
    width: "90%",
    padding: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: "white",
    color: "black",
    fontSize: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: DEFAULT_COLOR,
    width: "90%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  statuses: {
    width: "90%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  buttonLoginText1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonLoginText2: {
    color: DEFAULT_COLOR,
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationColor: DEFAULT_COLOR,
  },
  buttonLogin: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
