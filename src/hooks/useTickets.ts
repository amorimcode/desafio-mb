import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

import { TicketsType } from "../types/Types";

export function useTickets() {
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState<TicketsType>();

  async function getTickets() {
    var ticketsArr: Array<Object> = [];
    const ticketsSnapshot = await getDocs(collection(db, "tickets"));

    if (ticketsSnapshot) {
      ticketsSnapshot.forEach((doc) => {
        ticketsArr.push(doc.data())
      });
    }
    setTickets(ticketsArr)
    setLoading(false);
  }

  useEffect(() => {
    getTickets();
  }, [])

  return { tickets, setTickets, loading };
}
