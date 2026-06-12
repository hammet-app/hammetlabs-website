"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";
import { SectionLabel } from "@/components/ui-lab/CTA";

export function Team() {
  const { team } = siteContent;

  return (
    <section className="relative py-28 md:py-36">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>{team.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-foreground md:text-5xl">
            {team.title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{team.intro}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {team.members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40"
            >
              <div className="flex aspect-[5/4] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-surface-muted to-[color-mix(in_oklab,var(--cyan-soft)_20%,var(--surface-muted))]">
                <span className="text-4xl font-semibold tracking-tight text-primary/80">
                  {m.initials}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground">{m.name}</h3>
                <p className="mt-1 text-sm text-primary">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            Learn more about who we are
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}