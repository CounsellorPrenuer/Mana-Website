import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import LegalContent from "@/components/sections/LegalContent";
import { CONTACTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund terms for the MANA | Mentoria AI Navigation Architect Certification programme.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Refund Policy" />
      <Section bg="white">
        <LegalContent
          updated="July 2026"
          sections={[
            {
              heading: "1. Before the Programme Begins",
              body: (
                <p>
                  If you wish to withdraw before your cohort&apos;s start date, contact us directly at{" "}
                  {CONTACTS[0].email} or {CONTACTS[1].email}. Refund eligibility and any applicable
                  processing timelines are confirmed on a case-by-case basis and communicated clearly before
                  you complete payment.
                </p>
              ),
            },
            {
              heading: "2. After the Programme Begins",
              body: (
                <p>
                  Given the live, cohort-based, facilitator-led nature of MANA, refund eligibility reduces
                  once live sessions begin and materials are accessed. Specific terms for your cohort are
                  confirmed in writing at the time of enrolment.
                </p>
              ),
            },
            {
              heading: "3. Founder's Offer & Promotional Pricing",
              body: (
                <p>
                  Founder&apos;s Offer and other promotional pricing is non-transferable between cohorts.
                  Standard refund terms above still apply to any fee paid under a promotional offer.
                </p>
              ),
            },
            {
              heading: "4. TMS 2.0 Subscription",
              body: (
                <p>
                  The ongoing TMS 2.0 subscription fee, where applicable, is billed and governed separately
                  from the one-time certification fee and is not covered by this policy.
                </p>
              ),
            },
            {
              heading: "5. How to Request a Refund",
              body: (
                <p>
                  Email {CONTACTS[0].name} at {CONTACTS[0].email} or {CONTACTS[1].name} at{" "}
                  {CONTACTS[1].email} with your enrolment details. We aim to acknowledge every request
                  within two business days.
                </p>
              ),
            },
          ]}
        />
      </Section>
    </>
  );
}
