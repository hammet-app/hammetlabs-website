"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";
import { SectionLabel } from "@/components/ui-lab/CTA";

function CountUp({
  value,
  decimals = 0,
  suffix = "",
  start,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  start: boolean;
}) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => latest.toFixed(decimals));
  const [display, setDisplay] = useState(
    decimals > 0 ? (0).toFixed(decimals) : "0"
  );

  useEffect(() => {
    if (!start) return;
    const controls = animate(mv, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [start, value, mv, rounded]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function WhyAfrica() {
  const { whyAfrica } = siteContent;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="relative bg-surface-muted/60 py-28 md:py-36">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>{whyAfrica.label}</SectionLabel>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-foreground md:text-5xl">
            {whyAfrica.title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{whyAfrica.intro}</p>
        </div>

        <div ref={ref} className="mt-16 grid gap-8 md:grid-cols-3">
          {whyAfrica.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="border-t border-border pt-6"
            >
              <div className="text-5xl font-semibold tracking-[-0.03em] text-foreground md:text-6xl">
                <CountUp
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  suffix={s.suffix}
                  start={inView}
                />
              </div>
              <p className="mt-4 text-base font-medium text-foreground">
                {s.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}