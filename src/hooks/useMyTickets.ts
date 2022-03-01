import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

import { TicketsType } from "../types/Types";
import { useAuth } from "./useAuth";

export function useMyTickets() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [myTickets, setMyTickets] = useState<TicketsType>();

  async function handleGetMyTickets() {
    var ticketsArr: Array<Object> = [];

    const querySnapshot = await getDocs(collection(db, `users/${user.uid}/myTickets`));
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      docData.map((item: {}) => {
        console.log(item)
      })

      ticketsArr.push(docData);
    });

    setLoading(false);
    setMyTickets(ticketsArr);
    console.log(myTickets)
  }

  useEffect(() => {
    handleGetMyTickets();
  }, []);

  return { myTickets, setMyTickets, loading };
}
