"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/app/data/content";
import { Container } from "@/components/ui-lab/Container";
import { CTA } from "@/components/ui-lab/CTA";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { brand, nav } = siteContent;
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", homeHref: "#about", pageHref: "/about" },
    { label: "Our Work", homeHref: "#work", pageHref: "/#work" },
    { label: "Research", homeHref: "/research", pageHref: "/research" },
    { label: "RSP", homeHref: "/rsp", pageHref: "/rsp" },
    { label: "Careers", homeHref: "#careers", pageHref: "/#careers" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-primary" />
          <span className="text-base font-semibold tracking-tight text-foreground">
            {brand.name}
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((l) => {
            const href = isHome ? l.homeHref : l.pageHref;
            const isExternal = href.startsWith("/") && !href.startsWith("/#");

            return isExternal ? (
              <Link
                key={l.label}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <CTA href={nav.ctaSecondary.href} variant="filled">
            {nav.ctaSecondary.label}
          </CTA>
        </div>

      </Container>
    </motion.header>
  );
}