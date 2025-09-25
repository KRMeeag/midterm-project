import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const UserContext = createContext({ data: null });

export function UserProvider({ children }) {
  // Log-In States
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn") || "false")
  );

  // Reservation List
  const [reservedList, setReserveList] = useState(
    JSON.parse(localStorage.getItem("reserved") || "[]")
  );
  const [reserveCtr, setReserveCtr] = useState(
    JSON.parse(localStorage.getItem("reserveCtr") || "0")
  );
  const [newReserveCtr, setNewReserveCtr] = useState(
    JSON.parse(localStorage.getItem("newReserveCtr") || "0")
  );

  // For every change incurred by both addReservation and removeReservation

  useLocalStorage("reserved", reservedList);
  useLocalStorage("reserveCtr", reserveCtr);
  useLocalStorage("newReserveCtr", newReserveCtr);

  function addReservation(reserved) {
    // Adds Reservation to List
    setReserveList((prevList) => {
      const newList = { ...reserved, index: reserveCtr };
      const newListBuffer = [...prevList, newList];
      return newListBuffer;
    });

    // Increments index to prevent collisions in deletion
    setReserveCtr((prev) => {
      const newCount = prev + 1;
      return newCount;
    });

    setNewReserveCtr((prev) => {
      const newCount = prev + 1;
      return newCount;
    });
  }

  function removeReservation(currentIndex) {
    // Deletes Entry in Reservation
    setReserveList((prevList) => {
      const newList = prevList.filter((prev) => prev.index !== currentIndex);
      return newList;
      // localStorage.removeItem("reserved");
      // return [];
    });
  }

  useLocalStorage("loggedIn", isLoggedIn);

  // Logs the user in
  function authLog() {
    setIsLoggedIn(true);
  }

  //  Logs the user out
  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <UserContext.Provider
      value={{
        reservedList,
        isLoggedIn,
        newReserveCtr,
        setNewReserveCtr,
        addReservation,
        removeReservation,
        authLog,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
