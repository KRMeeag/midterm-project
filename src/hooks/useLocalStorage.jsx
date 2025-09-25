import { useEffect } from "react";

export function useLocalStorage(key, value) {
  // Creates a template for states in the context api to use the localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
}
