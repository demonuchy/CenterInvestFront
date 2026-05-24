import { useEffect, useState } from "react";

const DelayedFallbackSuspense = ({ children, fallback }) => {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // 200 мс
    return () => clearTimeout(timer); // Очистка таймера
  }, []);

  return isLoading ? fallback : children
};

export default DelayedFallbackSuspense;
