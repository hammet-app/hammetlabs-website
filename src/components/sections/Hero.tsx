"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";
import { CTA } from "@/components/ui-lab/CTA";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="top"
      className="hero-grid-bg relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
    >
      <div className="hero-dots pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-medium uppercase tracking-[0.22em] text-primary"
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground md:text-7xl">
          {hero.headline.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              {i === 0 ? (
                line
              ) : (
                <span className="bg-gradient-to-r from-primary to-[color-mix(in_oklab,var(--primary)_55%,var(--cyan-soft))] bg-clip-text text-transparent">
                  {line}
                </span>
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <CTA href={hero.ctaPrimary.href} variant="filled">
            {hero.ctaPrimary.label}
          </CTA>
          <CTA href={hero.ctaSecondary.href} variant="outline">
            {hero.ctaSecondary.label}
          </CTA>
        </motion.div>
      </Container>
    </section>
  );
}