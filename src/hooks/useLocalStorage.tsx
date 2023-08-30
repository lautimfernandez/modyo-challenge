import { useState, useEffect } from "react";

const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const isClient = typeof window !== "undefined";

  const storedValue = isClient ? localStorage.getItem(key) : null;
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, isClient]);

  return [value, setValue];
};

export default useLocalStorage;
