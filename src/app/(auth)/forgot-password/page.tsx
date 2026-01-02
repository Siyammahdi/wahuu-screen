"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

        {/* Large background glow */}
        <div className="absolute inset-x-0 w-32 ml-auto rounded-lg opacity-50 bg-gradient-to-r from-purple-50 via-violet-200 to-purple-600 h-42 left-32 top-64 lg:w-96 lg:h-96 blur-3xl"></div>

        {/* Left Forgot Password Form */}
        <div className="relative flex items-center justify-center px-6 min-h-screen bg-gray-50">
          <div className="absolute inset-x-0 w-32 h-32 rounded-full opacity-30 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500 top-20 left-10 blur-3xl"></div>
          <div className="absolute w-48 h-48 rounded-full opacity-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 top-64 right-32 blur-3xl"></div>
          <div className="absolute w-36 h-36 rounded-full opacity-25 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bottom-20 left-20 blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg bg-white/50 backdrop-blur-lg rounded-2xl p-8 relative z-10"
          >
            {/* Logo */}
            <div className="mb-10">
              <h1 className="text-xl font-semibold text-purple-700">
                Wahuu
              </h1>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-semibold text-gray-900">
              Forgot your password?
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Enter your email address and we’ll send you a link to reset your password.
            </p>
            {/* Form */}
            <form className="mt-8 space-y-5">
              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-transparent bg-white px-4 py-3 text-sm outline-none focus:border-purple-400"
              />

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 py-3 text-sm font-medium text-white shadow-md hover:from-purple-600 hover:to-purple-800 transition-all"
              >
                Send Reset Link
              </motion.button>
            </form>

            {/* Footer */}
            <div className="mt-10 text-center text-xs text-gray-400">
              Remember your password?{" "}
              <Link href="/login" className="text-purple-600 hover:underline">
                Back to login
              </Link>
              <br />
              Contact support:{" "}
              <span className="text-purple-600">
                support@wahuu.com
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side Image Section */}
        <div className="h-[100vh] relative hidden lg:block">
          <Image
            src="/backgrounds/login-bg.jpg"
            width={800}
            height={600}
            alt="Background"
            className="h-full w-full object-cover"
          />

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/60 p-8 backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Password recovery
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              We’ll help you get back into your account quickly and securely.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
