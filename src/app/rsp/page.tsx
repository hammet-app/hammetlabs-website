"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui-lab/Container";

export default function RSPPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="flex min-h-screen items-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl py-32 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Coming Soon
            </div>

            <h1 className="mt-8 text-4xl font-semibold tracking-[-0.025em] text-foreground md:text-6xl">
              Responsible Scaling Policy
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We are committed to publishing our full Responsible Scaling Policy publicly. This page will document how HammetLabs develops, evaluates, and deploys AI systems safely and responsibly.
            </p>

            <p className="mt-4 text-base text-muted-foreground">
              In the meantime, you can reach us at{" "}
              <a
                href="mailto:admin@hammetlabs.com"
                className="text-primary underline-offset-4 hover:underline"
              >
                admin@hammetlabs.com
              </a>
            </p>

            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
              >
                ← Back to HammetLabs
              </Link>
            </div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}