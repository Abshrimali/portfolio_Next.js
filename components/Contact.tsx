"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, FileText, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const LINKEDIN_BADGE_SCRIPT_ID = "linkedin-profile-badge-script";

const hasRealEmail = !siteConfig.email.includes("example.com");
const hasResume = siteConfig.resumeUrl !== "#";
const hasLinkedIn = Boolean(siteConfig.linkedin);
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
    if (document.getElementById(LINKEDIN_BADGE_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = LINKEDIN_BADGE_SCRIPT_ID;
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

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

            <div className="linkedin-badge-wrap">
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="dark"
                data-type="VERTICAL"
                data-vanity="abhijeet-shrimali-39aa20224"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://pk.linkedin.com/in/abhijeet-shrimali-39aa20224?trk=profile-badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abhijeet Shrimali
                </a>
              </div>
            </div>
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
