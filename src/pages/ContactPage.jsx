// src/pages/ContactPage.jsx
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

        {/* Professional positioning */}
        {sections.workWithMe && (
          <TextBlock>{sections.workWithMe}</TextBlock>
        )}

        {/* Primary invitation */}
        

        {/* Learning / feedback invitation */}
        {sections.learningNote && (
          <TextBlock className="contact-learning-note">
            {sections.learningNote}
          </TextBlock>
        )}
      </section>

      <section className="page-section">
        <ContactForm />
      </section>
    </>
  );
}