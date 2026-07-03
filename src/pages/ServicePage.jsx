import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { services } from "../data/servicesData";
import SEO from "../components/seo/SEO";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
  return (
      <>
        <SEO
          title="Service Not Found | Ultimate Health Men"
          description="The requested service could not be found."
          canonical="https://ultimatehealthmen.com/services"
        />

      <main className="service-page">
        <section className="service-hero">
          <p className="eyebrow">Service not found</p>
          <h1>This service page does not exist.</h1>
          <Link to="/" className="primary-btn">
            Back to Home
          </Link>
        </section>
      </main>
      </>
    );
  }
  return (
    <>
    <SEO
      title={`${service.title} | Ultimate Health Men`}
      description={service.intro}
      canonical={`https://ultimatehealthmen.com/service/${service.slug}`}
    />
    <main className="service-page">
      <section className="service-hero">
        <Link to="/services" className="back-link">
          <ArrowLeft size={18} />
          Back to Services
        </Link>

        <p className="eyebrow">{service.eyebrow}</p>
        <h1>{service.title}</h1>
        <p className="service-intro">{service.intro}</p>

        <Link to="/contact" className="primary-btn">
          {service.cta}
        </Link>
      </section>

      <section className="service-content">
        {service.sections.map((section) => (
          <article className="service-card" key={section.heading}>
            <CheckCircle className="service-icon" size={24} />
            <div>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="service-bottom-cta">
        <h2>Ready to take the next step?</h2>
        <p>
          Ultimate Health Men is built for men who want direct, focused,
          confidential care.
        </p>
        
        <Link to="/contact" className="primary-btn">
          Contact Us
        </Link>
      </section>
    </main>
    </>
  );
}