"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";
import { SectionLabel } from "@/components/ui-lab/CTA";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
  const { team, mission, vision } = siteContent;

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
              <SectionLabel>About HammetLabs</SectionLabel>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground md:text-7xl">
                Who we are.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {mission.body}
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Mission and Vision */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid gap-10 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-border bg-card p-8 md:p-10"
              >
                <SectionLabel>{mission.label}</SectionLabel>
                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  {mission.statement}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="rounded-2xl border border-border bg-card p-8 md:p-10"
              >
                <SectionLabel>{vision.label}</SectionLabel>
                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  {vision.statement}
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Team */}
        <section className="pb-28 md:pb-36">
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
          </Container>
        </section>

      </main>
      <Footer />
    </div>
  );
}