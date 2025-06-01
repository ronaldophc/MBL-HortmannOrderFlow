import { View, Text } from "react-native";
import React from "react";
import { updates } from "../../mocks/mocks";
import InfoStatus from "./InfoStatus";

type UpdatesProps = {
  id: string;
};

export default function Updates({ id }: UpdatesProps) {
  return (
    <View className="w-11/12 mt-5 items-center gap-4">
      {updates
        .filter((update) => update.order_code == id)
        .map((update, index) => (
          <InfoStatus
            key={index}
            status={update.status}
            date={update.date}
            description={update.description}
          />
        ))}
    </View>
  );
}
