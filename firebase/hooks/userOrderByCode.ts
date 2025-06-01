import { useState, useEffect } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import useFirebase from "./useFirebase";
import Order from "../../types/Order";

export default function useOrderByCode(code: string | undefined) {
  useFirebase();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!code) return;
    const fetchOrder = async () => {
      setLoading(true);
      const db = getFirestore();
      const q = query(collection(db, "orders"), where("code", "==", code));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        setOrder({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as Order);
      } else {
        setOrder(null);
      }
      setLoading(false);
    };
    fetchOrder();
  }, [code]);

  return { order, loading };
}