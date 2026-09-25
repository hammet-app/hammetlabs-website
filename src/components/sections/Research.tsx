"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";
import { SectionLabel, CTA } from "@/components/ui-lab/CTA";

export function Research() {
  const { research } = siteContent;

  return (
    <section id="research" className="relative overflow-hidden py-28 md:py-36">
      <div
        className="research-shimmer animate-pulse-glow pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-transparent"
        aria-hidden
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <SectionLabel>{research.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-foreground md:text-5xl">
            {research.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {research.intro}
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border/60 md:grid-cols-2">
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

        <div className="mt-12">
          <CTA href={research.cta.href} variant="outline">
            {research.cta.label}
          </CTA>
        </div>
      </Container>
    </section>
  );
}