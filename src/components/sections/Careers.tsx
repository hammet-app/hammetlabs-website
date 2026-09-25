"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";
import { SectionLabel, CTA } from "@/components/ui-lab/CTA";

export function Careers() {
  const { careers } = siteContent;

  return (
    <section id="careers" className="relative py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="grid items-start gap-10 md:grid-cols-[1fr_1.3fr]"
        >
          <div>
            <SectionLabel>{careers.label}</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-foreground md:text-5xl">
              {careers.title}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {careers.body}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {careers.values.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground"
                >
                  {v}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTA href={careers.cta.href} variant="filled">
                {careers.cta.label}
              </CTA>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}