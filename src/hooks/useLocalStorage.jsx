import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
}
