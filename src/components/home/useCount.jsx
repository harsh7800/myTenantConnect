import { useState, useEffect } from "react";

function useCount({
  start = 0,
  end = 0,
  duration = 1000,
  delay = 0,
  separator = ",",
  decimals = 0,
}) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let animationFrameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const nextCount = start + progress * (end - start);
      setCount(nextCount.toFixed(decimals));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      if (delay > 0) {
        setTimeout(() => {
          requestAnimationFrame(animate);
        }, delay);
      } else {
        requestAnimationFrame(animate);
      }
    };

    startAnimation();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [start, end, duration, delay, separator, decimals]);

  return count;
}

export default useCount;
