import { View, Text } from "react-native";
import React from "react";
import { updates } from "../../mocks/mocks";
import InfoStatus from "./InfoStatus";

type UpdatesProps = {
  code: string;
};

export default function Updates({ code }: UpdatesProps) {
  return (
    <View className="w-11/12 mt-5 items-center gap-4">
      {updates
        .filter((update) => update.order_code == code)
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
