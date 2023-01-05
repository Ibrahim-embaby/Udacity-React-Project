import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useDebounce = (val, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(val);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(val);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [val, delay]);
  return debouncedValue;
};

useDebounce.propTypes = {
  val: PropTypes.string,
  delay: PropTypes.number,
};

export default useDebounce;
