import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "../../config/site";

const defaultTitle =
  `${SITE_NAME} | Men’s Health Clinic in Winter Haven, FL`;

const defaultDescription =
  "Private men’s healthcare in Winter Haven, FL, serving Auburndale, Lakeland, Bartow, and surrounding Central Florida communities.";

const defaultCanonical = SITE_URL;

const defaultImage = `${SITE_URL}/ultimate-health-men-og.jpeg`;

function SEO({
  title = defaultTitle,
  description = defaultDescription,
  canonical = defaultCanonical,
  image = defaultImage,
  type = "website",
  structuredData,
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE_NAME} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content={SITE_NAME} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;