"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";
import { SectionLabel, CTA } from "@/components/ui-lab/CTA";

export function ResponsibleScaling() {
  const { rsp } = siteContent;

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="grid items-start gap-10 rounded-3xl border border-border bg-card p-10 md:grid-cols-[1fr_1.4fr] md:p-14"
        >
          <div>
            <SectionLabel>{rsp.label}</SectionLabel>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-4xl">
              {rsp.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {rsp.body}
            </p>
            <div className="mt-8">
              <CTA href={rsp.cta.href} variant="outline">
                {rsp.cta.label}
              </CTA>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}