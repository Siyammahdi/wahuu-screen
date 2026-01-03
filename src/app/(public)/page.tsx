"use client";

import React from "react";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Connect Talent,
              <br />
              Build Careers,
              <br />
              Share Knowledge
            </h1>

            <p className="mt-6 max-w-xl text-gray-600">
              A modern platform to discover jobs, hire skilled professionals,
              build your personal brand, and explore curated learning resources
              — all in one place.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white hover:bg-purple-700 transition"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <button className="rounded-lg border border-purple-300 px-6 py-3 text-sm text-purple-700 hover:bg-purple-50 transition">
                Explore Jobs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t bg-purple-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-10 md:grid-cols-3"
          >
            <Feature
              icon={<Briefcase />}
              title="Find the Right Job"
              description="Browse curated opportunities from startups to enterprises and apply with confidence."
            />
            <Feature
              icon={<Users />}
              title="Hire Top Talent"
              description="Connect with skilled professionals ready to make an impact on your team."
            />
            <Feature
              icon={<BookOpen />}
              title="Learn & Share"
              description="Access resources, guides, and insights shared by industry experts and creators."
            />
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 md:grid-cols-3"
          >
            <Step number="01" title="Create Your Profile" />
            <Step number="02" title="Discover or Post Opportunities" />
            <Step number="03" title="Connect & Grow" />
          </motion.div>
        </div>
      </section>

      {/* TRUST / STATS */}
      <section className="border-t bg-purple-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <Stat value="10k+" label="Professionals" />
            <Stat value="2k+" label="Companies" />
            <Stat value="500+" label="Resources" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 px-10 py-16 text-center text-white"
          >
            <h2 className="text-3xl font-semibold">
              Ready to Build Your Future?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Whether youre hiring, job hunting, or growing your personal brand — get started today.
            </p>
            <button className="mt-8 rounded-lg bg-white px-6 py-3 text-sm font-medium text-purple-700 hover:bg-purple-50 transition">
              Join the Platform
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    </div>
  );
}

interface FeatureProps { icon: React.ReactNode; title: string; description: string; }

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="rounded-xl border border-purple-100 bg-white p-6 hover:border-purple-300 transition">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
        {icon}
      </div>
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}

interface StepProps { number: string; title: string; }

function Step({ number, title }: StepProps) {
  return (
    <div>
      <span className="text-sm text-purple-400">{number}</span>
      <h4 className="mt-2 text-lg font-medium">{title}</h4>
    </div>
  );
}

interface StatProps { value: string; label: string; }

function Stat({ value, label }: StatProps) {
  return (
    <div>
      <h3 className="text-3xl font-semibold">{value}</h3>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
    </div>
  );
}
