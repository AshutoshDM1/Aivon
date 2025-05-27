import { SignIn } from "@clerk/clerk-react";
import { motion } from "motion/react";

export default function SignInPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex justify-center items-center h-screen font-[system-ui]">
        <SignIn />
      </div>
    </motion.div>
  );
}
