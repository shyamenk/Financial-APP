import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotAuthorized() {
  return (
    <div className="flex items-center justify-center px-2 md:px-0 py-10">
      <div>
        <p className="text-sm font-semibold text-black"></p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          Access Denied!
        </h1>
        <p className="mt-4 text-gray-500">
          You are not authorized to view this page. Please log in with
          appropriate credentials.
        </p>
        <div className="mt-6 flex items-center space-x-3">
          <Link
            to="/"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
