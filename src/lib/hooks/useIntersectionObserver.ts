import {useEffect} from "react";

export interface ObserverParams {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  callback: () => void,
  options: ObserverParams = {}
): void {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, options);

    const element = elementRef.current;
    if (!element) return;

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, callback, options]);
}

export default useIntersectionObserver;
