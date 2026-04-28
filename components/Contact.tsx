"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, FileText, Globe, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const hasRealEmail = !siteConfig.email.includes("example.com");
const hasResume = siteConfig.resumeUrl !== "#";
const hasLinkedIn = Boolean(siteConfig.linkedin);
const hasWebsite = Boolean(siteConfig.website);
const hasPhone = Boolean(siteConfig.phone);

const contactLinks = [
  {
    label: "GitHub",
    href: siteConfig.github,
    icon: <GithubIcon size={20} />,
    description: "Code and projects.",
    disabled: false,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: <LinkedinIcon size={20} />,
    description: "Experience and updates.",
    disabled: !hasLinkedIn,
  },
  {
    label: "Website",
    href: hasWebsite ? siteConfig.website : "",
    icon: <Globe size={20} />,
    description: "Live profile and links.",
    disabled: !hasWebsite,
  },
  {
    label: "Email",
    href: hasRealEmail ? `mailto:${siteConfig.email}` : "",
    icon: <Mail size={20} />,
    description: "Direct contact.",
    disabled: !hasRealEmail,
  },
  {
    label: "Phone",
    href: hasPhone ? `tel:${siteConfig.phone.replace(/\s+/g, "")}` : "",
    icon: <Phone size={20} />,
    description: siteConfig.phone || "Direct call.",
    disabled: !hasPhone,
  },
  {
    label: "Resume",
    href: hasResume ? siteConfig.resumeUrl : "",
    icon: <FileText size={20} />,
    description: "Download the Word resume.",
    disabled: !hasResume,
  },
].filter((link) => !link.disabled);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      gsap.from(contentRef.current?.children ?? [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact">
      <div className="section-shell section-divider">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Contact"
            title="Let&apos;s"
            accent="connect."
            align="center"
          />
        </div>

        <div ref={contentRef} className="contact-layout">
          <div className="contact-panel surface-card">
            <span className="section-kicker">Open for opportunities</span>
            <h3>{siteConfig.availability}</h3>
            <p>Open to full stack, internship, freelance, and junior engineering opportunities in Karachi or remote-friendly teams.</p>

            <a
              className="button-primary contact-cta"
              href={
                hasRealEmail
                  ? `mailto:${siteConfig.email}`
                  : hasLinkedIn
                    ? siteConfig.linkedin
                    : siteConfig.github
              }
              target={hasRealEmail ? undefined : "_blank"}
              rel={hasRealEmail ? undefined : "noopener noreferrer"}
            >
              {hasRealEmail ? "Send an email" : hasLinkedIn ? "Message on LinkedIn" : "Open GitHub"}
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="contact-link-card surface-card"
              >
                <div className="contact-link-card__icon">{link.icon}</div>
                <h3 className="contact-link-card__title">
                  {link.label}
                  <ArrowUpRight size={16} />
                </h3>
                <p className="contact-link-card__copy">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
