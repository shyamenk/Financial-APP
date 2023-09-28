import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GradientEffect from "../ui/Gradient";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative isolate z-0 bg-white px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-24">
        <GradientEffect />
        <div className="text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Your Bank Transaction Hub.
          </motion.h1>
          <motion.h3
            className="text-2xl mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <q>Streamline transactions, take control, and manage finances.</q>
          </motion.h3>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover a comprehensive financial management solution designed to
            simplify every aspect of your transactions. Our app empowers you to
            streamline payments, monitor expenses, and gain a comprehensive view
            of your financial health.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="/login"
              className="inline-flex items-center bg-gray-800 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800/80"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
