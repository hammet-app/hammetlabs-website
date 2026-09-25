"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui-lab/Container";
import { SectionLabel } from "@/components/ui-lab/CTA";
import { siteContent } from "@/app/_data/content";

export default function ResearchPage() {
  const { research } = siteContent;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-32">

        {/* Header */}
        <section className="hero-grid-bg relative overflow-hidden pb-24 pt-16 md:pb-32">
          <div className="hero-dots pointer-events-none absolute inset-0" aria-hidden />
          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>{research.label}</SectionLabel>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground md:text-7xl">
                A research-driven organisation.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {research.intro}
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Research Areas */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border/60 md:grid-cols-2">
              {research.areas.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-card p-8 transition-colors hover:bg-surface md:p-10"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {a.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Coming Soon notice */}
        <section className="pb-28 md:pb-36">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                Coming Soon
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                Research publications on the way.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We are working on our first set of research publications covering AI safety for African contexts, AI literacy, and responsible deployment frameworks. Sign up to be notified when they are available.
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                In the meantime, reach us at{" "}
                <a
                  href="mailto:admin@hammetlabs.com"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  admin@hammetlabs.com
                </a>
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
                >
                  ← Back to HammetLabs
                </Link>
              </div>
            </motion.div>
          </Container>
        </section>

      </main>
      <Footer />
    </div>
  );
}