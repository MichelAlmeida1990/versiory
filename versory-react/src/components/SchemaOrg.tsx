export default function SchemaOrg() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Versiory',
    description:
      'Especialistas em desenvolvimento web moderno e soluções digitais inovadoras',
    url: 'https://versiory.com',
    logo: 'https://versiory.com/images/image_025.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-95940-7653',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    sameAs: ['https://wa.me/5511959407653', 'mailto:versiory@gmail.com'],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressRegion: 'São Paulo',
    },
    foundingDate: '2024',
    services: [
      'Desenvolvimento Web',
      'Desenvolvimento de Aplicativos Mobile',
      'E-commerce',
      'Sistemas de Gestão',
      'Design UI/UX',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Versiory',
    url: 'https://versiory.com',
    description:
      'Especialistas em desenvolvimento web moderno e soluções digitais inovadoras',
    publisher: {
      '@type': 'Organization',
      name: 'Versiory',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://versiory.com/orcamento?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desenvolvimento Web',
    description:
      'Desenvolvimento de sites responsivos, aplicativos mobile, e-commerce e sistemas de gestão',
    provider: {
      '@type': 'Organization',
      name: 'Versiory',
    },
    areaServed: 'Brazil',
    serviceType: 'Desenvolvimento de Software',
    offers: {
      '@type': 'Offer',
      description: 'Desenvolvimento web com preços competitivos',
      priceCurrency: 'BRL',
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
