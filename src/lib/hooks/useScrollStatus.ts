import {useCallback, useEffect, useState} from "react";

function useScrollStatus(scrollLimit = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = useCallback(() => {
    setIsScrolled(window.scrollY > scrollLimit);
  }, [scrollLimit]);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [checkScroll]);

  return isScrolled;
}
export default useScrollStatus;
