export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "name": "Propel",
    "legalName": "Propel",
    "alternateName": ["Propel Digital", "Propel AI Studio", "propel.im"],
    "description": "Propel is a modern digital and AI studio based in the Isle of Man that designs and builds web apps, automation systems and intelligent digital products. We specialise in UX design, AI engineering, legal and financial automation, document processing and creative technology.",
    "url": "https://www.propel.im",
    "logo": "https://www.propel.im/Propel-logo.svg",
    "image": "https://www.propel.im/og-image.jpg",
    "email": "enquiries@propel.im",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IM",
      "addressRegion": "Isle of Man",
      "addressLocality": "Isle of Man"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "54.2361",
      "longitude": "-4.5481"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Isle of Man"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital & AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Product & UX",
            "description": "We design intuitive interfaces and create modern web applications that feel fast, fluid and effortless to use",
            "serviceType": "UX Design",
            "provider": {
              "@type": "Organization",
              "name": "Propel"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web App Development",
            "description": "Fast, modern and scalable web applications using current technologies and best practices",
            "serviceType": "Web Development",
            "provider": {
              "@type": "Organization",
              "name": "Propel"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Systems & Agents",
            "description": "Intelligent tools that improve speed, accuracy and decision making",
            "serviceType": "AI Engineering",
            "provider": {
              "@type": "Organization",
              "name": "Propel"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automation",
            "description": "Streamline and automate time-sensitive processes for professional services",
            "serviceType": "Process Automation",
            "provider": {
              "@type": "Organization",
              "name": "Propel"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand & Creative",
            "description": "Visual systems that support function and strengthen perception",
            "serviceType": "Brand Design",
            "provider": {
              "@type": "Organization",
              "name": "Propel"
            }
          }
        }
      ]
    },
    "slogan": "Build intelligent products with speed, clarity and purpose",
    "knowsAbout": [
      "Digital Product Design",
      "UX Design",
      "Web App Development",
      "AI Engineering",
      "AI Agents",
      "Process Automation",
      "Document Automation",
      "Legal Tech",
      "Smart Search",
      "Brand Identity",
      "Creative Technology"
    ],
    "keywords": "Propel, propel.im, digital product design, AI engineering, automation studio, web app development, Isle of Man digital agency"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.propel.im"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.propel.im/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://www.propel.im/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.propel.im/contact"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Propel",
    "alternateName": "Propel Digital & AI Studio",
    "url": "https://www.propel.im",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.propel.im/services?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Propel provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Propel provides digital product design, UX/UI design, web app development, AI systems and agents, process automation for professional services, and brand creative services. We combine design and engineering into one streamlined process."
        }
      },
      {
        "@type": "Question",
        "name": "What is Propel's approach to AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Propel uses AI strategically to enhance core workflows such as search, reporting and decision support. We build intelligent tools including AI chat agents, smart search systems, automated summarisation, and document extraction capabilities."
        }
      },
      {
        "@type": "Question",
        "name": "Who does Propel work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Propel works with founders launching new products, professional service teams needing automation, legal, finance and corporate services, tech companies wanting clean UX, agencies needing specialist AI integration, and businesses modernising legacy systems."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Propel located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Propel is based in the Isle of Man and serves clients in the Isle of Man, UK and internationally. We operate remotely while maintaining close partnerships with our clients."
        }
      },
      {
        "@type": "Question",
        "name": "How do I start a project with Propel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every project begins with discovery and definition. Contact us at enquiries@propel.im with details about what you want to build, problems you're trying to solve, who the users are, important workflows, and timeframes. We respond with a clear, structured plan and proposal."
        }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
