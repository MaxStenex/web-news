import { useEffect, useRef } from "react";

export const useOnOtsideClick = <T>(handler: () => any) => {
  const elementRef = useRef<HTMLElement & T>(null);

  useEffect(() => {
    const clickListener = (e: any) => {
      if (!elementRef.current || elementRef.current.contains(e.target)) {
        return;
      }
      handler();
    };

    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, [elementRef, handler]);

  return elementRef;
};
