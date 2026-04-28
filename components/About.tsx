"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Layers, Palette, Zap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { aboutHighlights, siteConfig } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={22} />,
  Layers: <Layers size={22} />,
  Palette: <Palette size={22} />,
  Zap: <Zap size={22} />,
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 36,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(storyRef.current, {
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 28,
        opacity: 0,
        duration: 0.8,
        delay: 0.08,
        ease: "power3.out",
      });

      gsap.from(cardsRef.current?.children ?? [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 22,
        opacity: 0,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about">
      <div className="section-shell section-divider">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="About"
            title="Building products with"
            accent="clarity."
            description="I focus on clean, scalable code, strong fundamentals, and web apps that are practical to use."
          />
        </div>

        <div className="about-grid">
          <div ref={storyRef} className="about-story surface-card">
            <div className="about-story__lead">
              <span className="about-story__label">About me</span>
              <p>
                I&apos;m <strong>{siteConfig.name}</strong>, a full stack web
                developer working with React, PHP, .NET, and modern frontend
                fundamentals.
              </p>
            </div>

            <p>
              Alongside building dynamic web applications, I also support
              technical instruction, which has strengthened how I debug
              problems, explain concepts, and build cleaner user experiences.
            </p>

            <div className="about-snapshot outline-card">
              <span className="section-kicker">Working style</span>
              <ul className="about-detail-list">
                <li className="about-detail-item">
                  Clean code that stays readable and scalable.
                </li>
                <li className="about-detail-item">
                  Frontend and backend work that support each other well.
                </li>
                <li className="about-detail-item">
                  Strong communication shaped by real teaching support.
                </li>
              </ul>
            </div>
          </div>

          <div ref={cardsRef} className="about-principles">
            {aboutHighlights.map((item) => (
              <article key={item.title} className="principle-card surface-card">
                <div className="principle-icon">{iconMap[item.icon]}</div>
                <h3 className="principle-title">{item.title}</h3>
                <p className="principle-copy">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
