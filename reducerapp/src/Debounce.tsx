import { useRef, useCallback, useState, useEffect } from "react";

// interface UseDebounceProps<T extends (...args: any[]) => void> {
//   callback: T;
//   delay: number;
// }

// const useDebounce = <T extends (...args: any[]) => void>({
//   callback,
//   delay,
// }: UseDebounceProps<T>) => {
//   const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const debounce = useCallback(
//     (...args: Parameters<T>) => {
//       if (timerRef.current) {
//         clearTimeout(timerRef.current);
//       }
//       timerRef.current = setTimeout(() => {
//         callback(...args);
//       }, delay);
//     },
//     [callback, delay]
//   );
//   return debounce;
// };

const useDebounce = (serach: string, delay: number) => {
  const [debouncevalue, setDebouncevalue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncevalue(serach);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [serach, delay]);
  return debouncevalue;
};
