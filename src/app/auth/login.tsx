"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, Github, Mail } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-pink-500 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-indigo-500 blur-3xl"
      />

      {/* Card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-white/60">
              Sign in to continue building your future
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 space-y-5"
          >
            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm text-white/70">Email</label>
              <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 focus-within:border-pink-400">
                <Mail className="h-4 w-4 text-white/50" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-sm text-white/70">Password</label>
              <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 focus-within:border-purple-400">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white/50 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/50">Forgot password?</span>
              <span className="text-white/70 hover:text-white cursor-pointer">
                Reset
              </span>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-3 font-medium shadow-lg"
            >
              Sign In
            </motion.button>
          </motion.form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/40">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Social Login */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 text-sm hover:bg-white/10">
              <Github className="h-4 w-4" />
              Continue with GitHub
            </button>
          </motion.div>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-white/50">
            New here?{" "}
            <span className="cursor-pointer bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-medium text-transparent">
              Create an account
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
