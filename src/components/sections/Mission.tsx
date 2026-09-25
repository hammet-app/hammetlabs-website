"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";
import { SectionLabel } from "@/components/ui-lab/CTA";

export function Mission() {
  const { mission, vision } = siteContent;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const words = mission.statement.split(" ");

  return (
    <section id="about" className="relative py-28 md:py-40">
      <Container>
        <div ref={ref} className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <SectionLabel>{mission.label}</SectionLabel>
          </div>

          <h2 className="mt-8 text-balance text-3xl font-medium leading-[1.2] tracking-[-0.02em] text-foreground md:text-5xl">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: words.length * 0.05 + 0.2 }}
            className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {mission.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: words.length * 0.05 + 0.45 }}
            className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border/70 bg-surface/60 p-8 text-left backdrop-blur-sm md:p-10"
          >
            <SectionLabel>{vision.label}</SectionLabel>
            <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">
              {vision.statement}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}