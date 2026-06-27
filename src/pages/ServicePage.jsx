import { useParams } from "react-router-dom";
import ServiceHero from "../components/services/ServiceHero";
import ServiceDetailSection from "../components/services/ServiceDetailSection";
import ServiceCTA from "../components/services/ServiceCTA";
import { services } from "../data/services";

function ServicePage() {
  const { slug } = useParams();
  const service = services[slug];

  if (!service) {
    return (
      <main className="service-page">
        <section className="service-section">
          <div className="service-container">
            <h1>Service not found</h1>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <main className="service-page">
        <section className="service-section">
          <div className="service-container">
            <ServiceHero service={service} />

            <div className="service-intro-card">
              <p>{service.intro}</p>
            </div>

            {service.highlights?.length > 0 && (
              <div className="service-highlight-grid">
                {service.highlights.map((item) => (
                  <div className="service-highlight" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            )}

            {service.sections.map((section) => (
              <ServiceDetailSection key={section.title} section={section} />
            ))}
          </div>
        </section>
      </main>

      <ServiceCTA />
    </>
  );
}

export default ServicePage;