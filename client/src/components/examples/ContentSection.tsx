import ContentSection from '../ContentSection';

export default function ContentSectionExample() {
  return (
    <ContentSection
      subtitle="Architectural Vision"
      title="Twisting Toward Tomorrow"
      description="This iconic spiral tower represents the pinnacle of modern architectural design, where form meets function in perfect harmony."
      highlights={[
        "60 Floors of Innovation",
        "Sustainable Design", 
        "Mixed-Use Spaces"
      ]}
    />
  );
}