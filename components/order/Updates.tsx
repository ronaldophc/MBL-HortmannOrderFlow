import { View } from "react-native";
import React, { useEffect, useState } from "react";
import InfoStatus from "./InfoStatus";
import Loading from "../Loading";
import useCollection from "../../firebase/hooks/useCollection";
import Updates from "../../types/Updates";
import { formatDateBR, getStatusLabel } from "../../helper/format";

type UpdatesProps = {
  id: string;
};

export default function Update({ id }: UpdatesProps) {
  const { loading, findByOrderId } = useCollection<Updates>("updates", false);
  const [updates, setUpdates] = useState<Updates[]>([]);

  useEffect(() => {
    const loadOrder = async () => {
      const result = await findByOrderId(id);
      setUpdates(result);
    };

    loadOrder();
  }, []);

  if (loading || !updates) return <Loading />;

  return (
    <View className="w-11/12 mt-5 items-center gap-4">
      {updates.map((update, index) => (
        <InfoStatus
          key={index}
          status={getStatusLabel(update.status)}
          date={formatDateBR(update.date)}
          description={update.description}
        />
      ))}
    </View>
  );
}
