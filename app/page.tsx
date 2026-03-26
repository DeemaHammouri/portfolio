"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Globe,
  Menu,
  X,
  Sparkles,
  Download,
  BadgeCheck,
} from "lucide-react";
import { useRef, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    title: "UX & Research",
    items: [
      "User Research",
      "User Personas",
      "Journey Mapping",
      "Usability Testing",
      "Information Architecture",
      
    
    ],
  },
  {
    title: "UI & Interaction",
    items: [
      "Wireframing",
      "Interactive Prototyping",
      "Design Systems",
      "Interaction Design",
      "Responsive Design",
      "Accessibility Basics",
    ],
  },
  {
    title: "Tools",
    items: ["Figma", "FigJam", "Miro", "Notion", "Adobe Illustrator"],
  },
  {
    title: "Strengths",
    items: [
      "Human-Centered Thinking",
      "Attention to Detail",
      "Structured Design Process",
      "Clear Visual Hierarchy",
      "Software Engineering Mindset",
    ],
  },
];

const processSteps = [
  {
    title: "Discover",
    short: "Understanding",
    text: "I begin by exploring the product context, business goals, user needs, and the overall problem space before moving into solutions.",
  },
  {
    title: "Research",
    short: "Insights",
    text: "I gather insights through research methods such as interviews, observation, competitor review, and user behavior analysis to understand real needs and pain points.",
  },
  {
    title: "Define",
    short: "Clarity",
    text: "I turn research findings into a clear design direction by identifying key challenges, priorities, opportunities, and experience goals.",
  },
  {
    title: "Structure",
    short: "Flows",
    text: "I organize information, user flows, and content structure to create experiences that feel intuitive, clear, and easy to navigate.",
  },
  {
    title: "Design",
    short: "Visuals",
    text: "I translate ideas into polished interfaces with strong hierarchy, consistency, and visual systems that support both usability and aesthetics.",
  },
  {
    title: "Prototype",
    short: "Interaction",
    text: "I create interactive prototypes to test how screens, flows, and interactions work together before development.",
  },
  {
    title: "Refine",
    short: "Iteration",
    text: "I improve the experience through feedback, testing, and iteration to make the final product more effective, usable, and user-centered.",
  },
];
function ProcessMap() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.2"],
  });

  const pinY = useTransform(scrollYProgress, [0, 1], ["2%", "92%"]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={sectionRef}
      className="relative grid gap-10 lg:grid-cols-[220px_1fr]"
    >
      <div className="relative hidden lg:block">
        <div className="sticky top-28 h-[760px]">
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-[#ead6dd]" />

          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-1/2 top-0 h-full w-[4px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-[#d48ea0] via-[#e6a9b9] to-[#f3dce3]"
          />

          {processSteps.map((_, index) => {
            const top = `${(index / (processSteps.length - 1)) * 100}%`;

            return (
              <div
                key={index}
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top }}
              >
                <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-[0_8px_22px_rgba(0,0,0,0.05)]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#d48ea0]" />
                </div>
              </div>
            );
          })}

          <motion.div
            style={{ top: pinY }}
            className="absolute left-1/2 z-20 -translate-x-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#d48ea0]/20 blur-md" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#d48ea0]/30 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.10)]">
                <MapPin className="h-5 w-5 fill-[#d48ea0] text-[#d48ea0]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="space-y-6">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="rounded-[2rem] border border-black/5 bg-white/90 p-7 shadow-[0_14px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm md:p-8"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#d48ea0]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#1f1a1c]">
                  {step.title}
                </h3>
              </div>

              <span className="rounded-full bg-[#faedf1] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#b56f82]">
                {step.short}
              </span>
            </div>

            <p className="max-w-3xl leading-8 text-[#5e5659]">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-[#fff8fa] text-[#1e1a1c] selection:bg-[#d48ea0] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fff8fa]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
          <a
            href="#"
            className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d48ea0]"
          >
            Deema
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm text-[#6d6367] transition-colors duration-300 hover:text-[#1e1a1c]"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 rounded-full bg-[#f7e8ed] opacity-0 scale-90 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          

          <a
            href="#contact"
            className="hidden rounded-full bg-[#1e1a1c] px-5 py-2.5 text-sm text-white transition hover:opacity-90 md:inline-flex"
          >
            Contact
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-black/10 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-black/5 bg-[#fff8fa] px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-[#6d6367] transition hover:bg-[#f7e8ed] hover:text-black"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute left-[-100px] top-10 h-[260px] w-[260px] rounded-full bg-[#f7dce4]/60 blur-3xl" />
        <div className="absolute right-[-80px] top-28 h-[260px] w-[260px] rounded-full bg-[#f4d7df]/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[180px] w-[180px] rounded-full bg-[#fbe9ee]/70 blur-3xl" />

        <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.36em] text-[#d48ea0]">
              UI/UX Designer
            </p>

            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.9] tracking-[-0.04em] md:text-8xl xl:text-[7rem]">
              Deema
              <br />
              Hammouri
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#665c60] md:text-xl">
              I design meaningful digital experiences with a focus on culture,
              clarity, usability, and emotional connection.
            </p>

            <div className="mt-8 space-y-3 text-[#665c60]">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#d48ea0]" />
                <span>Amman, Jordan</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#d48ea0]" />
                <a
                  href="mailto:deemamohammad395@gmail.com"
                  className="transition hover:text-black"
                >
                  deemamohammad395@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#project"
                className="inline-flex items-center gap-2 rounded-full bg-[#1e1a1c] px-6 py-3 text-white transition hover:-translate-y-0.5 hover:opacity-95"
              >
                View Project
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://www.behance.net/deemahammouri"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d48ea0] px-6 py-3 text-[#1e1a1c] transition hover:bg-[#d48ea0] hover:text-white"
              >
                <Globe className="h-4 w-4" />
                Behance
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1pxgd0iiMb6xMs-BJm-wzgGamRp0CIGwH"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 transition hover:border-[#d48ea0] hover:text-[#b85f78]"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#f3d9e1]" />
            <div className="relative mx-auto max-w-[460px] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
              <img
                src="/profile.jpg"
                alt="Deema Hammouri"
                className="h-[540px] w-full object-cover transition duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#d48ea0]">
              About
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              I care about designing products that feel intuitive, elegant, and
              genuinely meaningful.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-[#655c60]">
            <p>
              My approach combines human-centered design with structured thinking.
              I’m interested in how users move through interfaces, what builds
              trust, and how design can turn information into connection.
            </p>
            <p>
              With a background in Software Engineering, I bring both visual
              sensitivity and analytical problem-solving into every project.
            </p>
          </div>
        </motion.div>
      </section>

      <section
        id="project"
        className="border-y border-black/5 bg-[#fff2f6] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#d48ea0]">
              Featured Project
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Hikayat Makan
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#655c60]">
              A heritage storytelling experience designed to reconnect people
              with Jordan’s cultural places through story, memory, and more
              meaningful discovery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2.2rem] border border-white/60 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[430px]">
                <img
                  src="/hekayat-cover.jpg"
                  alt="Hikayat Makan project preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <p className="text-sm uppercase tracking-[0.28em] text-[#f2d3dc]">
                    Case Study
                  </p>
                  <h3 className="mt-3 max-w-2xl text-3xl font-semibold text-white md:text-4xl">
                    Designing a story-first way to explore heritage and place.
                  </h3>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="mb-8 flex flex-wrap gap-2">
                    {["UX Research", "Storytelling", "UI Design", "Prototype"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#fbeaf0] px-4 py-2 text-sm text-[#b56f82]"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  <p className="leading-8 text-[#655c60]">
                    Hikayat Makan transforms heritage exploration from a simple
                    visit into a deeper cultural journey shaped by narrative,
                    atmosphere, and human memory.
                  </p>
                </div>

                <div className="mt-10">
                  <a
                    href="https://www.behance.net/deemahammouri"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#b56f82] transition hover:gap-3"
                  >
                    View Full Case Study
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="skills"
        className="border-y border-black/5 bg-[#fff8fa] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#d48ea0]">
              Skills
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              What supports my design approach
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-white/70 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
              >
                <h3 className="mb-5 text-2xl font-semibold">{group.title}</h3>
                <ul className="space-y-3 text-[#554d50]">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#d48ea0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#d48ea0]">
            Experience
          </p>
          <h2 className="text-4xl font-semibold md:text-5xl">My background</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_14px_38px_rgba(0,0,0,0.04)] md:p-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">UI/UX Intern</h3>
              <p className="mt-1 text-lg text-[#d48ea0]">
                Al-Hussein Technical University (HTU)
              </p>
            </div>
            <p className="text-[#6b6b6b]">Oct 2025 – Feb 2026</p>
          </div>

          <p className="mt-6 text-base font-medium text-[#b56f82]">
            340+ hours of intensive UX/UI training and hands-on practice
          </p>

          <ul className="mt-8 space-y-4 text-[#4e4e4e]">
            <li>• Designed end-to-end UX/UI solutions across the full design lifecycle.</li>
            <li>• Conducted research to uncover user needs and behavior patterns.</li>
            <li>• Built personas, journeys, wireframes, and prototypes in Figma.</li>
            <li>• Applied usability principles, design systems, and accessibility basics.</li>
            <li>• Combined design thinking with technical understanding to improve product clarity.</li>
          </ul>
        </motion.div>
      </section>

      <section className="border-y border-black/5 bg-[#fff2f6] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#d48ea0]">
              Why Work With Me
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Thoughtful, structured, and user-focused
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              "I design with purpose, not assumptions.",
              "I combine creativity with structured thinking.",
              "I focus on real user problems and usable solutions.",
              "I care about clarity, accessibility, and consistency.",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-white/70 bg-white p-6 text-left shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
              >
                <p className="text-lg leading-8 text-[#4e4e4e]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#d48ea0]">
            Process Journey
          </p>
          <h2 className="text-4xl font-semibold md:text-5xl">
            Following the design route from insight to experience
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#655c60]">
            The moving location pin follows the project as it develops through
            research, direction, structure, design, and refinement.
          </p>
        </motion.div>

        <ProcessMap />
      </section>

      <section
        id="contact"
        className="border-t border-black/5 bg-[#1f1a1c] px-6 py-24 text-white md:px-10 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#efbcc9]">
            Contact
          </p>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            Let’s create digital experiences with more clarity, warmth, and meaning.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            I’m open to junior UI/UX opportunities and thoughtful
            creative collaborations.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 text-white/80">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#efbcc9]" />
              <a
                href="mailto:deemamohammad395@gmail.com"
                className="hover:text-white"
              >
                deemamohammad395@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#efbcc9]" />
              <span>Amman, Jordan</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/deema-hammouri-6178ba37b/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition hover:opacity-90"
            >
              <span className="font-semibold">in</span>
              LinkedIn
            </a>

            <a
              href="https://www.behance.net/deemahammouri"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-[#efbcc9] hover:text-[#efbcc9]"
            >
              <Globe className="h-4 w-4" />
              Behance
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=1pxgd0iiMb6xMs-BJm-wzgGamRp0CIGwH"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-[#efbcc9] hover:text-[#efbcc9]"
            >
              <Download className="h-4 w-4" />
              CV
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}