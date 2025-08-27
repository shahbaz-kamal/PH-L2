import  { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingComponent = () => {
  const spinnerRef = useRef(null);

  useEffect(() => {
    // Continuous rotation animation
    gsap.to(spinnerRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 1.2,
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen text-light-primary dark:text-dark-primary text-foreground">
      <div
        ref={spinnerRef}
        className="w-12 h-12 border-4 border-t-transparent border-foreground rounded-full"
      ></div>
    </div>
  );
};

export default LoadingComponent;
