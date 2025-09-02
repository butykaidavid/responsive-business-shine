import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO = ({
  title = "BauHub - Professzionális építési és felújítási szolgáltatások",
  description = "Borsod-Abaúj-Zemplén megye vezető építési vállalkozása. 15+ év tapasztalat, 200+ sikeres projekt. Lakásfelújítás, szigetelés, festés, gipszkartonozás.",
  keywords = "építkezés, felújítás, szigetelés, festés, gipszkartonozás, kőműves munkák, burkolás, nyílászáró csere, Miskolc, Borsod-Abaúj-Zemplén",
  image = "/hero-construction.jpg",
  url = "https://bauhub.hu",
  type = "website",
  structuredData
}: SEOProps) => {
  const fullTitle = title.includes("BauHub") ? title : `${title} | BauHub`;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BauHub",
    "description": description,
    "url": url,
    "telephone": "+36306616016",
    "email": "info@bauhub.hu",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Borsod-Abaúj-Zemplén",
      "addressCountry": "HU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.1035",
      "longitude": "20.7784"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Borsod-Abaúj-Zemplén megye"
    },
    "serviceType": [
      "Építési szolgáltatások",
      "Felújítás",
      "Homlokzati szigetelés",
      "Festés és mázolás",
      "Gipszkartonozás",
      "Kőműves munkák",
      "Burkolás",
      "Nyílászáró csere"
    ],
    "openingHours": "Mo-Fr 08:00-18:00",
    "image": image,
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="BauHub" />
      <meta property="og:locale" content="hu_HU" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="BauHub" />
      <meta name="language" content="Hungarian" />
      <meta name="geo.region" content="HU-BZ" />
      <meta name="geo.placename" content="Borsod-Abaúj-Zemplén" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;