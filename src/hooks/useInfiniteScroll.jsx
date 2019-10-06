import { useEffect, useState } from "react";
import { MAX_STORIES, INCREMENT_BY } from "../constants/constants";
import { debounce } from "../utils/debounce";
export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(INCREMENT_BY);
  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }
    setLoading(true);
  }, 500);
  useEffect(() => {
    if (!loading) {
      return;
    }
    if (count + INCREMENT_BY >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + INCREMENT_BY);
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { count };
};
