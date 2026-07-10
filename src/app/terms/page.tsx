import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import LegalContent from "@/components/sections/LegalContent";
import { CONTACTS, FEES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing enrolment in the MANA — Mentoria AI Navigation Architect Certification.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <Section bg="white">
        <LegalContent
          updated="July 2026"
          sections={[
            {
              heading: "1. Programme Enrolment",
              body: (
                <p>
                  Enrolment in the MANA certification is confirmed only after fee payment and completion of
                  any required enrolment formalities, which are discussed in full at your Orientation
                  session. The certification fee, current Founder&apos;s Offer, and payment options are
                  confirmed live and are subject to change until enrolment is finalised.
                </p>
              ),
            },
            {
              heading: "2. Certification Standard",
              body: (
                <p>
                  The MANA Certificate is awarded only on successful completion of the Capstone gate — 4
                  human-evaluated TMS 2.0 counselling cases and 1 video-recorded AI Career Navigator
                  Workshop — as detailed on the Certification page. This gate is non-waivable regardless of
                  performance in earlier modules.
                </p>
              ),
            },
            {
              heading: "3. TMS 2.0 Subscription",
              body: (
                <p>
                  Active practice under the Mentoria brand after certification requires a separate,
                  ongoing TMS 2.0 subscription ({FEES.tms2Monthly}/month), which is not included in the
                  one-time certification fee.
                </p>
              ),
            },
            {
              heading: "4. Conduct & Ethics",
              body: (
                <p>
                  Participants are expected to uphold Mentoria&apos;s child-first, ethical counselling
                  standard throughout training and practice. Any Capstone case scoring 1/5 on the ethics or
                  child-first dimension results in automatic failure of that case, with no resit for six
                  months, as detailed on the Certification page.
                </p>
              ),
            },
            {
              heading: "5. Intellectual Property",
              body: (
                <p>
                  Curriculum materials, facilitator guides, assessment rubrics, and all associated content
                  provided during the programme remain the intellectual property of Mentoria and are
                  provided to enrolled participants for personal training use only. They may not be
                  reproduced or redistributed without written permission.
                </p>
              ),
            },
            {
              heading: "6. Changes to These Terms",
              body: <p>Mentoria may update these terms from time to time; the current version always applies.</p>,
            },
            {
              heading: "7. Contact",
              body: (
                <p>
                  For questions about these terms, contact {CONTACTS[0].name} ({CONTACTS[0].email}) or{" "}
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
