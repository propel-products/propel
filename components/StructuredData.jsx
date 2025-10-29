export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "OCO Limited",
    "alternateName": "OCO Accounting & Advisory",
    "description": "Expert accounting and advisory services for businesses in the Isle of Man. Gary O'Connor, ACCA Fellow, provides comprehensive financial solutions including bookkeeping, tax preparation, CFO services, and business valuation.",
    "url": "https://oco.com",
    "logo": "https://oco.com/logo.svg",
    "image": "https://oco.com/og-image.jpg",
    "telephone": "+44162400000",
    "email": "hello@ocoiom.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IM",
      "addressRegion": "Isle of Man"
    },
    "founder": {
      "@type": "Person",
      "name": "Gary O'Connor",
      "jobTitle": "Director and Founder",
      "description": "ACCA Fellow with over 25 years' experience in accounting, funds and fiduciary industry",
      "url": "https://im.linkedin.com/in/gary-o-connor",
      "alumniOf": "PricewaterhouseCoopers",
      "award": "Isle of Man Institute of Directors (IoD) 'Director of the Year' award",
      "knowsAbout": [
        "Financial Reporting",
        "Business Valuation",
        "Audit",
        "Tax Compliance",
        "Corporate Governance",
        "Strategic Planning"
      ]
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Isle of Man"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Accounting and Advisory Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Accounting Services",
            "description": "Complete financial reporting to keep your business running smoothly and compliant"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Advisory Services",
            "description": "Strategic guidance to optimise your business performance and achieve your long-term financial goals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CFO Services",
            "description": "Fractional CFO support providing executive-level financial leadership without the full-time cost"
          }
        }
      ]
    },
    "sameAs": [
      "https://im.linkedin.com/in/gary-o-connor"
    ],
    "foundingDate": "2010",
    "numberOfEmployees": "1-10",
    "slogan": "Financial Clarity for Modern Businesses"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://oco.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://oco.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://oco.com/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://oco.com/contact"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Resources",
        "item": "https://oco.com/resources"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
