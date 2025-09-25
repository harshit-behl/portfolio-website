import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const PathDrawAnimation = ({ 
  path, 
  strokeWidth = 2, 
  stroke = "currentColor", 
  fill = "none",
  className = "",
  delay = 0,
  duration = 2,
  ease = "easeInOut"
}) => {
  const pathRef = useRef(null);
  const isInView = useInView(pathRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, duration, ease },
          opacity: { delay, duration: 0.3 }
        }
      });
    }
  }, [isInView, controls, delay, duration, ease]);

  return (
    <motion.svg
      ref={pathRef}
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <motion.path
        d={path}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={controls}
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }}
      />
    </motion.svg>
  );
};

// Staggered path animation component
const StaggeredPathDrawing = ({ paths, className = "", staggerDelay = 40 }) => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={className}>
      {paths.map((pathData, index) => (
        <PathDrawAnimation
          key={index}
          path={pathData.path}
          stroke={pathData.stroke || "currentColor"}
          strokeWidth={pathData.strokeWidth || 2}
          delay={index * (staggerDelay / 1000)} // Convert ms to seconds
          duration={pathData.duration || 2}
          ease={pathData.ease || "easeInOut"}
          className={pathData.className || ""}
        />
      ))}
    </div>
  );
};



export { StaggeredPathDrawing };
export default PathDrawAnimation;