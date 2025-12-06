import React from "react";
import contactContent from "../content/contact.json";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function ContactPage() {
  const { sections } = contactContent;

  return (
    <>
      <section className="page-section">
        <SectionHeader title="Contact" />
        {sections.workWithMe && <TextBlock>{sections.workWithMe}</TextBlock>}
        <TextBlock>{sections.intro}</TextBlock>
        {sections.auroraNote && <TextBlock>{sections.auroraNote}</TextBlock>}
      </section>

      <section className="page-section">
        <ContactForm />
      </section>
    </>
  );
}
