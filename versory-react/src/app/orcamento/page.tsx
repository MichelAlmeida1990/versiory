'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Check, Star, Zap, Globe, Smartphone, Palette, Database, Code, Shield, TrendingUp, Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import TetrisBackground from '@/components/TetrisBackground';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
  category: 'web' | 'mobile' | 'design' | 'system';
  features: string[];
  basePrice: number;
  marketPrice: number;
  ourPrice: number;
  deliveryTime: string;
  color: string;
  gradient: string;
}

const OrcamentoPage = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const services: Service[] = [
    {
      id: 1,
      title: "Site Institucional",
      description: "Sites responsivos e otimizados para conversão com design moderno e SEO avançado.",
      icon: Globe,
      category: "web",
      features: ["Design Responsivo", "SEO Otimizado", "Performance", "Analytics", "Formulário de Contato", "Integração com Redes Sociais"],
      basePrice: 2500,
      marketPrice: 8000,
      ourPrice: 1800,
      deliveryTime: "15-20 dias",
      color: "from-versiory-pink to-versiory-azure",
      gradient: "bg-gradient-to-br from-versiory-pink to-versiory-azure"
    },
    {
      id: 2,
      title: "Landing Page",
      description: "Landing pages de alta conversão com A/B testing e otimização contínua.",
      icon: Zap,
      category: "web",
      features: ["A/B Testing", "Conversão", "Integração", "Tracking", "Formulário de Lead", "Call-to-Action"],
      basePrice: 800,
      marketPrice: 3000,
      ourPrice: 600,
      deliveryTime: "7-10 dias",
      color: "from-versiory-azure to-versiory-blue",
      gradient: "bg-gradient-to-br from-versiory-azure to-versiory-blue"
    },
    {
      id: 3,
      title: "App de Delivery",
      description: "Aplicativos de delivery completos com geolocalização e pagamentos integrados.",
      icon: Smartphone,
      category: "mobile",
      features: ["GPS", "Pagamentos", "Notificações", "Tracking", "Painel Admin", "Relatórios"],
      basePrice: 8000,
      marketPrice: 25000,
      ourPrice: 6500,
      deliveryTime: "45-60 dias",
      color: "from-versiory-green to-versiory-brown",
      gradient: "bg-gradient-to-br from-versiory-green to-versiory-brown"
    },
    {
      id: 4,
      title: "E-commerce",
      description: "Plataformas de e-commerce completas com gestão de produtos e vendas.",
      icon: Database,
      category: "system",
      features: ["Carrinho", "Pagamentos", "Estoque", "Relatórios", "Painel Admin", "Integração com Marketplaces"],
      basePrice: 5000,
      marketPrice: 15000,
      ourPrice: 3800,
      deliveryTime: "30-40 dias",
      color: "from-versiory-blue to-versiory-pink",
      gradient: "bg-gradient-to-br from-versiory-blue to-versiory-pink"
    },
    {
      id: 5,
      title: "Design UI/UX",
      description: "Design de interfaces modernas focadas na experiência do usuário.",
      icon: Palette,
      category: "design",
      features: ["Wireframes", "Prototipagem", "Design System", "Usabilidade", "Testes de Usuário", "Documentação"],
      basePrice: 1200,
      marketPrice: 5000,
      ourPrice: 900,
      deliveryTime: "10-15 dias",
      color: "from-versiory-pink to-versiory-green",
      gradient: "bg-gradient-to-br from-versiory-pink to-versiory-green"
    },
    {
      id: 6,
      title: "Sistema de Gestão",
      description: "Sistemas de gestão empresarial com módulos integrados e dashboard.",
      icon: Code,
      category: "system",
      features: ["Dashboard", "Módulos", "Relatórios", "API", "Backup", "Suporte"],
      basePrice: 8000,
      marketPrice: 25000,
      ourPrice: 6000,
      deliveryTime: "60-90 dias",
      color: "from-versiory-brown to-versiory-azure",
      gradient: "bg-gradient-to-br from-versiory-brown to-versiory-azure"
    }
  ];

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setShowDetails(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const calculateSavings = (marketPrice: number, ourPrice: number) => {
    return Math.round(((marketPrice - ourPrice) / marketPrice) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-versiory-black to-versiory-blue/10 relative">
      <TetrisBackground />
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/"
            className="flex items-center space-x-2 text-versiory-azure hover:text-versiory-green transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Voltar ao site</span>
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-versiory-green via-versiory-azure to-versiory-pink bg-clip-text text-transparent">
                ORÇAMENTO
              </span>
            </h1>
            <p className="text-xl mt-2 text-white/80">
              Escolha seu serviço e receba um orçamento personalizado
            </p>
          </div>
          
          <div className="w-32"></div> {/* Spacer for centering */}
        </div>

        {/* Market Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-6 rounded-2xl backdrop-blur-sm border bg-gradient-to-r from-versiory-green/10 to-versiory-azure/10 border-versiory-green/30"
        >
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp size={24} className="text-versiory-green" />
            <h3 className="text-xl font-bold text-white">
              Análise de Mercado
            </h3>
          </div>
          <p className="text-white/80">
            Nossos preços são baseados em pesquisas de mercado atual, oferecendo soluções de qualidade 
            a preços ultra-competitivos para empresas em crescimento. Economize até <span className="font-bold text-versiory-green">70%</span> em relação ao mercado.
            <br /><br />
            <span className="font-semibold text-versiory-green">💡 Ideal para startups e pequenas empresas que querem qualidade sem comprometer o orçamento!</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative cursor-pointer bg-gradient-to-br from-versiory-blue/5 to-versiory-azure/5 rounded-2xl p-6 border border-versiory-azure/30 hover:border-versiory-green/50 transition-all duration-300"
              onClick={() => handleServiceSelect(service)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white">
                {service.title}
              </h3>
              
              <p className="text-sm mb-4 text-white/70">
                {service.description}
              </p>

              <div className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 text-white/60">
                    <Check size={14} className="text-versiory-green" />
                    <span className="text-xs">{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <div className="text-xs text-white/50">
                    +{service.features.length - 3} recursos adicionais
                  </div>
                )}
              </div>

              <div className="border-t border-versiory-azure/20 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Preço VERSIORY:</span>
                  <span className="text-lg font-bold text-versiory-green">{formatPrice(service.ourPrice)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/40">Mercado:</span>
                  <span className="text-sm line-through text-white/40">
                    {formatPrice(service.marketPrice)}
                  </span>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-xs bg-versiory-green/20 text-versiory-green px-2 py-1 rounded-full">
                    Economia de {calculateSavings(service.marketPrice, service.ourPrice)}%
                  </span>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-versiory-green rounded-full flex items-center justify-center">
                  <ArrowLeft size={16} className="text-white transform rotate-180" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flexible Payment Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12 p-8 rounded-2xl backdrop-blur-sm border bg-gradient-to-r from-versiory-pink/10 to-versiory-azure/10 border-versiory-pink/30"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">
              💳 Planos de Pagamento Flexíveis
            </h3>
            <p className="text-lg text-white/80">
              Escolha a forma que melhor se adapta ao seu fluxo de caixa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-versiory-green/10 border border-versiory-green/30">
              <div className="w-16 h-16 bg-versiory-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1x</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">
                Pagamento à Vista
              </h4>
              <p className="text-sm text-white/70">
                Desconto de 10% no valor total
              </p>
              <div className="mt-3">
                <span className="text-xs bg-versiory-green/20 text-versiory-green px-3 py-1 rounded-full">
                  Melhor Custo-Benefício
                </span>
              </div>
            </div>

            <div className="text-center p-6 rounded-xl bg-versiory-azure/10 border border-versiory-azure/30">
              <div className="w-16 h-16 bg-versiory-azure rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3x</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">
                Parcelado em 3x
              </h4>
              <p className="text-sm text-white/70">
                Sem juros, sem taxas adicionais
              </p>
              <div className="mt-3">
                <span className="text-xs bg-versiory-azure/20 text-versiory-azure px-3 py-1 rounded-full">
                  Mais Popular
                </span>
              </div>
            </div>

            <div className="text-center p-6 rounded-xl bg-versiory-pink/10 border border-versiory-pink/30">
              <div className="w-16 h-16 bg-versiory-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">6x</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">
                Parcelado em 6x
              </h4>
              <p className="text-sm text-white/70">
                Para projetos de maior valor
              </p>
              <div className="mt-3">
                <span className="text-xs bg-versiory-pink/20 text-versiory-pink px-3 py-1 rounded-full">
                  Flexibilidade Total
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-white/60">
              💡 <span className="font-semibold">Todos os planos incluem:</span> Suporte por 3 meses, atualizações gratuitas e garantia de satisfação!
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-12 p-8 rounded-2xl backdrop-blur-sm border bg-gradient-to-r from-versiory-green/10 to-versiory-azure/10 border-versiory-green/30"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">
              📞 Entre em Contato
            </h3>
            <p className="text-lg text-white/80">
              Estamos prontos para transformar sua ideia em realidade!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
              href="https://wa.me/5511959407653"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center p-6 rounded-xl bg-green-500/20 border border-green-500/30 hover:bg-green-500/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">
                WhatsApp Principal
              </h4>
              <p className="text-sm text-white/70 mb-2">
                (11) 95940-7653
              </p>
              <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                Resposta Rápida
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/5511958540171"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center p-6 rounded-xl bg-versiory-azure/20 border border-versiory-azure/30 hover:bg-versiory-azure/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-versiory-azure rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">
                WhatsApp Secundário
              </h4>
              <p className="text-sm text-white/70 mb-2">
                (11) 95854-0171
              </p>
              <span className="text-xs bg-versiory-azure/20 text-versiory-azure px-3 py-1 rounded-full">
                Suporte Técnico
              </span>
            </motion.a>

            <motion.a
              href="mailto:versiory@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center p-6 rounded-xl bg-versiory-pink/20 border border-versiory-pink/30 hover:bg-versiory-pink/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-versiory-pink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">
                Email
              </h4>
              <p className="text-sm text-white/70 mb-2">
                versiory@gmail.com
              </p>
              <span className="text-xs bg-versiory-pink/20 text-versiory-pink px-3 py-1 rounded-full">
                Propostas Detalhadas
              </span>
            </motion.a>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-white/60">
              💡 <span className="font-semibold">Horário de atendimento:</span> Segunda a Sexta, das 9h às 18h
            </p>
          </div>
        </motion.div>

        {/* Service Details Modal */}
        {showDetails && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-versiory-black to-versiory-blue/20 rounded-2xl p-8 border border-versiory-azure/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-versiory-azure/20 rounded-full flex items-center justify-center hover:bg-versiory-azure/30 transition-colors"
              >
                <span className="text-2xl text-versiory-azure">&times;</span>
              </button>

              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${selectedService.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <selectedService.icon size={40} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-2 text-white">
                  {selectedService.title}
                </h2>
                <p className="text-lg text-white/80">
                  {selectedService.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Recursos Inclusos
                  </h3>
                  <div className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 text-white/80">
                        <Check size={20} className="text-versiory-green flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Detalhes do Projeto
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-versiory-blue/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">Preço VERSIORY</span>
                        <span className="text-2xl font-bold text-versiory-green">{formatPrice(selectedService.ourPrice)}</span>
                      </div>
                      <div className="text-sm text-versiory-green">
                        Economia de {calculateSavings(selectedService.marketPrice, selectedService.ourPrice)}% em relação ao mercado
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-versiory-pink/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">Preço de Mercado</span>
                        <span className="text-lg line-through text-gray-500">{formatPrice(selectedService.marketPrice)}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Média das grandes empresas do setor
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-versiory-green/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">Prazo de Entrega</span>
                        <span className="text-lg font-bold text-versiory-green">{selectedService.deliveryTime}</span>
                      </div>
                      <div className="text-sm text-versiory-green">
                        Desenvolvimento ágil e eficiente
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-versiory-green/20 to-versiory-azure/20">
                  <h4 className="text-lg font-bold mb-2 text-white">
                    Por que escolher a VERSIORY?
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Star size={16} className="text-versiory-green" />
                      <span>Qualidade Premium</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap size={16} className="text-versiory-azure" />
                      <span>Entrega Rápida</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield size={16} className="text-versiory-pink" />
                      <span>Suporte 24/7</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://wa.me/5511959407653?text=Olá! Gostaria de solicitar um orçamento para o serviço de %0A%0A*${selectedService.title}*%0A%0APreço: ${formatPrice(selectedService.ourPrice)}%0A%0APode me ajudar?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-versiory-green text-white font-bold rounded-full hover:bg-versiory-green/90 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Solicitar Orçamento</span>
                    <MessageCircle size={20} />
                  </a>
                  
                  <a
                    href={`mailto:versiory@gmail.com?subject=Orçamento - ${selectedService.title}&body=Olá!%0A%0AGostaria de solicitar um orçamento detalhado para:%0A%0A*Serviço:* ${selectedService.title}%0A*Preço:* ${formatPrice(selectedService.ourPrice)}%0A*Prazo:* ${selectedService.deliveryTime}%0A%0APode me enviar mais informações?%0A%0AObrigado!`}
                    className="px-8 py-4 border-2 border-versiory-azure text-versiory-azure font-bold rounded-full hover:bg-versiory-azure hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Enviar Email</span>
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OrcamentoPage; 