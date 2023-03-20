import { db } from "@/src/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useCollection(path: string) {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, path), (res) => {
      setData(res.docs.map((item) => item.data()));
    });
    return () => unsubscribe();
  }, [path]);
  return data;
}
