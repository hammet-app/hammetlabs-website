"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: 36, label: "Schools reached" },
  { value: 3, label: "Schools active" },
  { value: 68, label: "Students engaged" },
];

const researchPillars = [
  {
    number: "01",
    title: "AI safety for African contexts",
    description:
      "Researching how AI systems can be designed, deployed and governed with African realities in mind.",
  },
  {
    number: "02",
    title: "AI literacy and education",
    description:
      "Building practical ways for people to understand, use and critically evaluate artificial intelligence.",
  },
  {
    number: "03",
    title: "Responsible AI deployment",
    description:
      "Developing frameworks for deploying AI responsibly in environments where infrastructure and resources vary.",
  },
  {
    number: "04",
    title: "African language and cultural representation",
    description:
      "Exploring how African languages, cultures and perspectives can be better represented in AI systems.",
  },
];

const values = [
  {
    title: "Build with purpose",
    description:
      "We work on problems that matter and products that create tangible value.",
  },
  {
    title: "Safety first",
    description:
      "Responsible development is part of the foundation, not something added later.",
  },
  {
    title: "Think independently",
    description:
      "We question assumptions, investigate deeply and form our own conclusions.",
  },
  {
    title: "Build for Africa",
    description:
      "African realities are part of the design context, not an afterthought.",
  },
];

function AnimatedCounter({
  value,
  duration = 1200,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value, duration]);

  return (
    <span
      ref={() => {
        if (!started) setStarted(true);
      }}
    >
      {count}
    </span>
  );
}

function SectionReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function LogoMark() {
  return (
    <Image
      src="/favicon.ico"
      alt="Hammet"
      width={32}
      height={32}
      className="h-8 w-8 shrink-0"
      priority
    />
  );
}

function OrbitalMark() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[8%] rounded-full border border-[#D8CFEA]"
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#19C3D6]" />
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[22%] rounded-full border border-[#4B2A8A]/30"
      >
        <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#0B7285]" />
      </motion.div>

      <div className="absolute inset-[36%] rounded-full bg-[#24123F] shadow-[0_20px_70px_rgba(36,18,63,0.22)]">
        <div className="absolute inset-3 rounded-full border border-white/20" />

        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19C3D6]" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E4D9C6]" />
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FBF7F0] text-[#24123F]">
      {/* Header */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#E4D9C6] bg-[#FBF7F0]/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="HammetLabs home"
          >
            <LogoMark />

            <span className="font-[Bricolage_Grotesque] text-lg font-semibold tracking-[-0.03em]">
              HammetLabs
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#what-we-build"
              className="text-sm font-medium text-[#4A3A66] transition-colors hover:text-[#24123F]"
            >
              What we build
            </a>

            <a
              href="#research"
              className="text-sm font-medium text-[#4A3A66] transition-colors hover:text-[#24123F]"
            >
              Research
            </a>

            <a
              href="#who-we-are"
              className="text-sm font-medium text-[#4A3A66] transition-colors hover:text-[#24123F]"
            >
              Who we are
            </a>

            <a
              href="#careers"
              className="text-sm font-medium text-[#4A3A66] transition-colors hover:text-[#24123F]"
            >
              Careers
            </a>

            <a
              href="#partner"
              className="rounded-full bg-[#24123F] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Partner with us
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4D9C6] lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#E4D9C6] bg-[#FBF7F0] px-5 py-6 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2">
              {[
                ["What we build", "#what-we-build"],
                ["Research", "#research"],
                ["Who we are", "#who-we-are"],
                ["Careers", "#careers"],
                ["Partner with us", "#partner"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[#4A3A66] transition-colors hover:bg-[#F1E9DA]"
                >
                  {label}
                  <ChevronRight className="h-4 w-4" />
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-28 sm:pt-32">
        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-24">
          <SectionReveal>
            <div className="max-w-3xl">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D8CFEA] bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#4B2A8A]">
                An African AI research and product company
              </p>

              <h1 className="font-[Bricolage_Grotesque] text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#24123F]">
                Building safe AI for the{" "}
                <span className="text-[#0B7285]">African century.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4A3A66] sm:text-xl">
                We build AI products, conduct research and develop practical
                systems that help Africa participate meaningfully in the next
                era of artificial intelligence.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#partner"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#24123F] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#4B2A8A]"
                >
                  Partner with us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#what-we-build"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#24123F]/20 bg-white/50 px-6 py-3.5 text-sm font-semibold text-[#24123F] transition-colors hover:bg-white"
                >
                  Explore our work
                </a>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="relative">
            <OrbitalMark />
          </SectionReveal>
        </div>

        {/* Structure strip */}
        <div className="border-y border-[#E4D9C6] bg-[#F1E9DA]/70">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#E4D9C6] px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
            {[
              ["HammetLabs Inc.", "Research & technology"],
              ["Hammet Limited", "Products & operations"],
              ["Hammet Research Foundation", "Research & public interest"],
            ].map(([name, description]) => (
              <div
                key={name}
                className="flex items-center justify-between gap-5 py-6 md:block md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <p className="font-[Bricolage_Grotesque] font-semibold text-[#24123F]">
                  {name}
                </p>

                <p className="mt-1 text-sm text-[#4A3A66]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F1E9DA]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0B7285]">
              Our mission
            </p>
          </SectionReveal>

          <SectionReveal>
            <h2 className="max-w-5xl font-[Bricolage_Grotesque] text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#24123F] sm:text-5xl lg:text-6xl">
              Make AI useful, understandable and safe for the people and
              systems that will shape Africa&apos;s future.
            </h2>
          </SectionReveal>
        </div>
      </section>

      {/* What we build */}
      <section id="what-we-build" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <SectionReveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0B7285]">
                  What we build
                </p>

                <h2 className="mt-4 max-w-3xl font-[Bricolage_Grotesque] text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  Products designed around real problems.
                </h2>
              </div>

              <p className="max-w-md text-[#4A3A66]">
                Our product work sits at the intersection of artificial
                intelligence, education, research and African contexts.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            <SectionReveal>
              <Link
                href="https://hammetedu.com"
              >
                <article className="group h-full rounded-[28px] border border-[#E4D9C6] bg-white/60 p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(36,18,63,0.08)] sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#D8CFEA] px-3 py-1.5 text-xs font-semibold text-[#4B2A8A]">
                      Live
                    </span>

                    <ArrowRight className="h-5 w-5 text-[#4B2A8A] transition-transform group-hover:translate-x-1" />
                  </div>

                  <h3 className="mt-12 font-[Bricolage_Grotesque] text-3xl font-semibold tracking-[-0.035em]">
                    Hammet AI Literacy Platform
                  </h3>

                  <p className="mt-4 leading-7 text-[#4A3A66]">
                    Practical AI education designed to help students and
                    professionals understand and use AI properly.
                  </p>
                </article>
              </Link>
            </SectionReveal>

            <SectionReveal>
              <article className="group h-full rounded-[28px] border border-[#E4D9C6] bg-[#F1E9DA] p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(36,18,63,0.08)] sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#24123F] px-3 py-1.5 text-xs font-semibold text-white">
                    Coming soon
                  </span>

                  <ArrowRight className="h-5 w-5 text-[#24123F] transition-transform group-hover:translate-x-1" />
                </div>

                <h3 className="mt-12 font-[Bricolage_Grotesque] text-3xl font-semibold tracking-[-0.035em]">
                  LACE
                </h3>

                <p className="mt-4 leading-7 text-[#4A3A66]">
                  A research-driven system exploring new approaches to
                  responsible AI deployment.
                </p>
              </article>
            </SectionReveal>

            <SectionReveal>
              <article className="group h-full rounded-[28px] border border-[#D8CFEA] bg-[#24123F] p-7 text-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(36,18,63,0.18)] sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#19C3D6]">
                    In development
                  </span>

                  <ArrowRight className="h-5 w-5 text-[#19C3D6] transition-transform group-hover:translate-x-1" />
                </div>

                <h3 className="mt-12 font-[Bricolage_Grotesque] text-3xl font-semibold tracking-[-0.035em]">
                  More products
                </h3>

                <p className="mt-4 leading-7 text-white/65">
                  We are continuously exploring products where AI can solve
                  meaningful problems across African markets.
                </p>
              </article>
            </SectionReveal>
          </div>

          {/* Stats */}
          <SectionReveal>
            <div className="mt-20 grid border-y border-[#E4D9C6] sm:grid-cols-3 sm:divide-x sm:divide-[#E4D9C6]">
              {stats.map((stat) => (
                <div key={stat.label} className="py-8 sm:px-8">
                  <p className="font-[Bricolage_Grotesque] text-5xl font-semibold tracking-[-0.05em] text-[#24123F]">
                    <AnimatedCounter value={stat.value} />
                  </p>

                  <p className="mt-2 text-sm text-[#4A3A66]">{stat.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Research */}
      <section
        id="research"
        className="scroll-mt-24 bg-[#24123F] text-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <SectionReveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#19C3D6]">
                Research
              </p>

              <h2 className="mt-5 font-[Bricolage_Grotesque] text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Research grounded in African realities.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
                We investigate the technical, social and cultural questions
                that emerge as artificial intelligence becomes part of
                everyday life.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-20 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2">
            {researchPillars.map((pillar) => (
              <SectionReveal key={pillar.number}>
                <article className="h-full bg-[#24123F] p-7 sm:p-10">
                  <span className="text-sm font-semibold text-[#19C3D6]">
                    {pillar.number}
                  </span>

                  <h3 className="mt-12 max-w-md font-[Bricolage_Grotesque] text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-white/60">
                    {pillar.description}
                  </p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Africa */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <SectionReveal>
            <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0B7285]">
                  Why Africa
                </p>

                <h2 className="mt-5 max-w-lg font-[Bricolage_Grotesque] text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl">
                  The next chapter of AI cannot be written without Africa.
                </h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="font-[Bricolage_Grotesque] text-5xl font-semibold tracking-[-0.05em]">
                    60%
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#4A3A66]">
                    of Africa&apos;s population is under 25.
                  </p>
                </div>

                <div>
                  <p className="font-[Bricolage_Grotesque] text-5xl font-semibold tracking-[-0.05em]">
                    2.5bn
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#4A3A66]">
                    people are projected to live in Africa by 2050.
                  </p>
                </div>

                <div>
                  <p className="font-[Bricolage_Grotesque] text-5xl font-semibold tracking-[-0.05em]">
                    0.83%
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#4A3A66]">
                    of global research spending is attributed to Africa.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          <p className="mt-16 text-xs text-[#4A3A66]">
            Sources: UN population projections, UNESCO and related public
            research datasets.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#F1E9DA]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <SectionReveal>
            <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0B7285]">
                  Our approach
                </p>

                <h2 className="mt-5 max-w-4xl font-[Bricolage_Grotesque] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  Safety is not a feature.
                  <br />
                  <span className="text-[#4B2A8A]">It is the foundation.</span>
                </h2>
              </div>

              <div>
                <p className="leading-8 text-[#4A3A66]">
                  We believe responsible AI development requires deliberate
                  decisions about how systems are researched, built and
                  deployed.
                </p>

                <a
                  href="/rsp"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#24123F]"
                >
                  Responsible Scaling Policy
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Who we are */}
      <section id="who-we-are" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0B7285]">
              Who we are
            </p>

            <h2 className="mt-5 max-w-3xl font-[Bricolage_Grotesque] text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              A small team building for a very large future.
            </h2>
          </SectionReveal>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              ["Engr. Prince Obinna", "CEO & Co-founder"],
              ["Angel Nwafor", "CPO & Co-founder"],
              ["Oluebube Okafor", "CTO & Co-founder"],
            ].map(([name, role]) => (
              <SectionReveal key={name}>
                <article className="rounded-[28px] border border-[#E4D9C6] bg-white/60 p-7 sm:p-9">
                  <div className="aspect-[4/5] rounded-[20px] bg-[#D8CFEA]" />

                  <h3 className="mt-7 font-[Bricolage_Grotesque] text-2xl font-semibold tracking-[-0.03em]">
                    {name}
                  </h3>

                  <p className="mt-2 text-sm text-[#4A3A66]">{role}</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="scroll-mt-24 bg-[#24123F] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <SectionReveal>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#19C3D6]">
                Partner with us
              </p>

              <h2 className="mt-5 font-[Bricolage_Grotesque] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Let&apos;s build what Africa needs next.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
                We work with organisations, researchers, educators and
                technology partners who share an interest in building useful
                and responsible AI systems.
              </p>

              <a
                href="mailto:hello@hammetlabs.com"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#19C3D6] px-6 py-3.5 text-sm font-semibold text-[#24123F] transition-transform hover:-translate-y-0.5"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <SectionReveal>
            <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0B7285]">
                  Careers
                </p>

                <h2 className="mt-5 font-[Bricolage_Grotesque] text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  Build the future with us.
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-lg leading-8 text-[#4A3A66]">
                  We are interested in people who care deeply about their
                  craft, think independently and want to work on difficult
                  problems with real-world consequences.
                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {values.map((value) => (
                    <div
                      key={value.title}
                      className="rounded-2xl border border-[#E4D9C6] bg-white/60 p-6"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#0B7285]" />

                        <h3 className="font-semibold text-[#24123F]">
                          {value.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-[#4A3A66]">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:careers@hammetlabs.com"
                  className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#24123F]"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E4D9C6] bg-[#F1E9DA]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <LogoMark />

                <span className="font-[Bricolage_Grotesque] text-lg font-semibold tracking-[-0.03em]">
                  HammetLabs
                </span>
              </div>

              <p className="mt-5 max-w-sm text-sm leading-6 text-[#4A3A66]">
                An African AI research and product company building safe AI
                for the African century.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4B2A8A]">
                Products
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-[#4A3A66]">
                <a href="#what-we-build" className="hover:text-[#24123F]">
                  AI Literacy Platform
                </a>

                <a href="#what-we-build" className="hover:text-[#24123F]">
                  LACE
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4B2A8A]">
                Organization
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-[#4A3A66]">
                <a href="#research" className="hover:text-[#24123F]">
                  Research
                </a>

                <a href="#who-we-are" className="hover:text-[#24123F]">
                  Who we are
                </a>

                <a href="#careers" className="hover:text-[#24123F]">
                  Careers
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4B2A8A]">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-[#4A3A66]">
                <a
                  href="mailto:hello@hammetlabs.com"
                  className="hover:text-[#24123F]"
                >
                  admin@hammetlabs.com
                </a>

                <a
                  href="#partner"
                  className="hover:text-[#24123F]"
                >
                  Partner with us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-[#E4D9C6] pt-6 text-xs text-[#4A3A66] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} HammetLabs. All rights reserved.</p>

            <p>Built in Africa. Designed for the future.</p>
          </div>
        </div>
      </footer>

      {/* Scroll indicator */}
      <a
        href="#what-we-build"
        aria-label="Scroll to content"
        className="fixed bottom-5 right-5 hidden h-11 w-11 items-center justify-center rounded-full border border-[#E4D9C6] bg-[#FBF7F0]/90 text-[#24123F] shadow-sm backdrop-blur-md transition-transform hover:-translate-y-1 sm:flex"
      >
        <ArrowDown className="h-4 w-4" />
      </a>
    </main>
  );
}