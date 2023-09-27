import { Link } from "react-router-dom";
import GradientEffect from "../ui/Gradient";

export default function Home() {
  return (
    <div className="relative isolate z-0 bg-white px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-24">
        <GradientEffect />
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to Your Bank Transaction Hub.
          </h1>
          <h3 className="text-2xl mt-4 ">
            <q>Streamline transactions, take control, and manage finances.</q>
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover a comprehensive financial management solution designed to
            simplify every aspect of your transactions. Our app empowers you to
            streamline payments, monitor expenses, and gain a comprehensive view
            of your financial health.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-2">
            <Link
              to="/login"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
