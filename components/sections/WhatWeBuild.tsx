"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";
import { SectionLabel } from "@/components/ui-lab/CTA";

export function WhatWeBuild() {
  const { work } = siteContent;

  return (
    <section id="work" className="relative py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>{work.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-foreground md:text-5xl">
            {work.title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{work.intro}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {work.products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                "group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 " +
                (p.available
                  ? "border-border bg-card hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
                  : "border-dashed border-border bg-surface-muted/50")
              }
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {p.kind}
                </span>
                {p.available && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                    Live
                  </span>
                )}
              </div>

              <h3 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
                {p.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.audience}</p>
              <p className="mt-5 text-base leading-relaxed text-foreground/80">
                {p.description}
              </p>

              {p.available && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
                >
                  {p.cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </Container>
    </section >
  );
}