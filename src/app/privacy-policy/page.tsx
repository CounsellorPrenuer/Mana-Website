import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import LegalContent from "@/components/sections/LegalContent";
import { CONTACTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mentoria collects, uses, and protects your data on the MANA certification platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section bg="white">
        <LegalContent
          updated="July 2026"
          sections={[
            {
              heading: "1. What We Collect",
              body: (
                <p>
                  When you register for an Orientation session, request a download, join a waitlist, or
                  contact us, we collect the information you provide directly, typically your name, email
                  address, and WhatsApp number. We do not collect payment information through this website;
                  fees are discussed and processed separately.
                </p>
              ),
            },
            {
              heading: "2. How We Use It",
              body: (
                <p>
                  Your information is used to confirm Orientation registrations, send reminders and
                  programme updates, respond to enquiries, deliver requested resources (brochures,
                  curriculum overviews, and similar materials), and where you&apos;ve opted in, to keep
                  you informed about the MANA certification and future Mentoria Training &amp; Certification
                  programmes.
                </p>
              ),
            },
            {
              heading: "3. Third-Party Services",
              body: (
                <p>
                  Orientation registrations are collected via Google Forms; some communication happens over
                  WhatsApp. These services process data under their own respective privacy policies. We do
                  not sell your personal information to third parties.
                </p>
              ),
            },
            {
              heading: "4. Data Retention",
              body: (
                <p>
                  We retain enquiry and registration data for as long as reasonably necessary to fulfil the
                  purpose it was collected for, or as required by applicable law.
                </p>
              ),
            },
            {
              heading: "5. Your Rights",
              body: (
                <p>
                  You may request access to, correction of, or deletion of your personal data at any time by
                  contacting us at {CONTACTS[0].email} or {CONTACTS[1].email}.
                </p>
              ),
            },
            {
              heading: "6. Contact",
              body: (
                <p>
                  Questions about this policy can be directed to {CONTACTS[0].name} ({CONTACTS[0].email}) or{" "}
                  {CONTACTS[1].name} ({CONTACTS[1].email}).
                </p>
              ),
            },
          ]}
        />
      </Section>
    </>
  );
}
