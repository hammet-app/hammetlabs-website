"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";

export function Footer() {
  const { brand, footer } = siteContent;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-border bg-surface-muted/40 py-16"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-sm bg-primary" />
              <span className="text-base font-semibold tracking-tight text-foreground">
                {brand.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {footer.tagline}
            </p>
            <div className="mt-6 space-y-1 text-sm text-muted-foreground">
              <p>
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-foreground"
                >
                  {brand.email}
                </a>
              </p>
              <p>{brand.website}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footer.columns.map((c) => (
              <div key={c.title}>
                <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("/") ? (
                        <Link
                          href={l.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>{footer.copyright}</p>
          <p>Built in Africa.</p>
        </div>
      </Container>
    </motion.footer>
  );
}