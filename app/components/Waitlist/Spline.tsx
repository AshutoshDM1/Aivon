import SplineNext from "@splinetool/react-spline";
import { motion } from "framer-motion";

// https://prod.spline.design/mkHI03MKmKHk75Qj/scene.splinecode 1  full scene
// https://prod.spline.design/naSr5jNec-Ixl3Su/scene.splinecode 2  full scene
// https://prod.spline.design/jjqv5WzFTBqazsc7/scene.splinecode 3  only particals
const SplineComponent = () => {
  return (
    <main className="min-h-screen bg-transparent w-full overflow-hidden absolute z-[-10] pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <SplineNext
          className="min-h-[100vh] w-full absolute top-[7vh] z-[10] overflow-hidden bg-transparent"
          scene="https://prod.spline.design/t-5elAm01l5a21r2/scene.splinecode"
        />
      </motion.div>
    </main>
  );
};

export default SplineComponent;
