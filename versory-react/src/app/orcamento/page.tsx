import type { Metadata } from 'next';
import OrcamentoClient from './OrcamentoClient';

export const metadata: Metadata = {
  title: 'Orçamento - Versiory | Preços Competitivos para Desenvolvimento Web',
  description:
    'Solicite seu orçamento personalizado para desenvolvimento web. Preços até 70% menores que o mercado. Sites, apps, e-commerce e sistemas de gestão.',
  keywords:
    'orçamento desenvolvimento web, preços sites, orçamento app, orçamento e-commerce, desenvolvimento web barato, preços competitivos',
  openGraph: {
    title:
      'Orçamento - Versiory | Preços Competitivos para Desenvolvimento Web',
    description:
      'Solicite seu orçamento personalizado para desenvolvimento web. Preços até 70% menores que o mercado.',
    url: 'https://versiory.com/orcamento',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Orçamento - Versiory | Preços Competitivos para Desenvolvimento Web',
    description:
      'Solicite seu orçamento personalizado para desenvolvimento web. Preços até 70% menores que o mercado.',
  },
  alternates: {
    canonical: 'https://versiory.com/orcamento',
  },
};

export default function OrcamentoPage() {
  return <OrcamentoClient />;
}
