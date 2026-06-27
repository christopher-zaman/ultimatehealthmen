import SectionHeading from "../ui/SectionHeading";

function ServiceHero({ service }) {
  return (
    <div className="service-hero">
      <SectionHeading
        eyebrow={service.eyebrow}
        title={service.title}
        subtitle={service.subtitle}
      />
    </div>
  );
}

export default ServiceHero;