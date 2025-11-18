export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "ProfessionalService", "LocalBusiness"],
    "name": "OCO Limited",
    "legalName": "OCO Limited",
    "alternateName": ["OCO Accounting & Advisory", "OCO Isle of Man", "OCO Accounting", "OCO Limited Accounting"],
    "description": "OCO Limited is a leading accounting and advisory practice based in the Isle of Man that empowers businesses to make confident financial decisions and achieve sustainable growth. Founded by ACCA Fellow Gary O'Connor, OCO provides expert accounting services, business valuation, and fractional CFO services.",
    "url": "https://www.ocoiom.com",
    "logo": "https://www.ocoiom.com/logo.svg",
    "image": "https://www.ocoiom.com/og-image.jpg",
    "telephone": "+44162400000",
    "email": "enquiries@ocoiom.com",
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
    "areaServed": {
      "@type": "Country",
      "name": "Isle of Man"
    },
    "priceRange": "$$",
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
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Certification",
          "name": "ACCA Fellow",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Association of Chartered Certified Accountants"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Certification",
          "name": "Certified Business Valuer",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Conseil Supérieur Ordre des Experts-Comptables (CSOEC)"
          }
        }
      ]
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
            "description": "Complete financial reporting to keep your business running smoothly and compliant",
            "serviceType": "Accounting",
            "provider": {
              "@type": "Organization",
              "name": "OCO Limited"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Advisory Services",
            "description": "Strategic guidance to optimise your business performance and achieve your long-term financial goals",
            "serviceType": "Business Advisory",
            "provider": {
              "@type": "Organization",
              "name": "OCO Limited"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CFO Services",
            "description": "Fractional CFO support providing executive-level financial leadership without the full-time cost",
            "serviceType": "Chief Financial Officer Services",
            "provider": {
              "@type": "Organization",
              "name": "OCO Limited"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Valuation",
            "description": "Independent business valuations by certified business valuer",
            "serviceType": "Business Valuation",
            "provider": {
              "@type": "Organization",
              "name": "OCO Limited"
            }
          }
        }
      ]
    },
    "sameAs": [
      "https://im.linkedin.com/in/gary-o-connor"
    ],
    "foundingDate": "2010",
    "numberOfEmployees": "1-10",
    "slogan": "Accounting / Advisory",
    "knowsAbout": [
      "Accounting Services",
      "Financial Reporting",
      "Business Valuation",
      "Tax Compliance",
      "CFO Services",
      "Fractional CFO",
      "Business Advisory",
      "Strategic Planning",
      "Corporate Governance",
      "Management Accounts",
      "Audit Liaison",
      "Financial Planning",
      "Isle of Man Accounting"
    ],
    "keywords": "OCO Limited, OCO accounting, OCO Isle of Man, accounting services Isle of Man, business valuation, fractional CFO, Gary O'Connor, ACCA accountant",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ocoiom.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.ocoiom.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://www.ocoiom.com/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.ocoiom.com/contact"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OCO Limited",
    "alternateName": "OCO Accounting & Advisory",
    "url": "https://www.ocoiom.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.ocoiom.com/services?q={search_term_string}"
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
        "name": "What accounting services does OCO Limited provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OCO Limited provides comprehensive accounting services including financial statement preparation (statutory and non-statutory), management accounts, tax compliance (personal and company tax returns, VAT returns), and audit liaison services. We handle everything from transaction recording to budget preparation and cash flow forecasts."
        }
      },
      {
        "@type": "Question",
        "name": "What is a fractional CFO service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fractional CFO services provide executive-level financial leadership without the full-time cost. OCO Limited offers strategic financial planning, board and stakeholder relations, cash flow management, M&A support, and exit planning. This service is ideal for businesses that need CFO expertise but don't require or can't afford a full-time CFO."
        }
      },
      {
        "@type": "Question",
        "name": "Does OCO Limited provide business valuation services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Gary O'Connor is a certified business valuer recognized by the Conseil Supérieur Ordre des Experts-Comptables (CSOEC). OCO Limited provides independent business valuations, complex dispute valuations, transaction valuations, and expert witness services."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Gary O'Connor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gary O'Connor is the Director and Founder of OCO Limited. He is a Fellow of the Association of Chartered Certified Accountants (ACCA) with over 25 years' experience in accounting, funds, and fiduciary services. He qualified with PricewaterhouseCoopers in 2004 and was the winner of the Isle of Man Institute of Directors (IoD) 'Director of the Year' award. Gary is also a certified business valuer."
        }
      },
      {
        "@type": "Question",
        "name": "Where is OCO Limited located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OCO Limited is based in the Isle of Man and primarily serves businesses in the Isle of Man region. We provide accounting, advisory, and CFO services to businesses of all sizes."
        }
      },
      {
        "@type": "Question",
        "name": "What makes OCO Limited different from other accounting firms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OCO Limited combines deep financial expertise with a modern, technology-driven approach. We offer proactive partnership rather than just reporting numbers, industry expertise across multiple sectors, technology-forward solutions for efficiency and real-time insights, and scalable solutions that grow with your business. With over 25 years of experience and specialized certifications in business valuation, we provide comprehensive financial guidance."
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
