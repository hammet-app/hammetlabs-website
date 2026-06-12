"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";

export function Partner() {
  const { partner } = siteContent;

  return (
    <section id="partner" className="relative py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color-mix(in_oklab,var(--primary)_92%,black)] via-primary to-[color-mix(in_oklab,var(--primary)_70%,var(--cyan-soft))] p-10 text-primary-foreground md:p-16"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/80">
              <span className="h-1 w-1 rounded-full bg-primary-foreground" />
              {partner.label}
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
              {partner.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85">
              {partner.body}
            </p>
            <div className="mt-8">
              <a
                href={partner.cta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-background/90"
              >
                {partner.cta.label}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}