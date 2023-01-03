import { useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function fn() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(fn, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
