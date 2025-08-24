'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ArrowLeft, Check, Star, Zap, Globe, Smartphone, Palette, Database, Code, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

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
  const { theme } = useTheme();
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
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-versiory-black to-versiory-blue/10' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/"
            className="flex items-center space-x-2 text-versiory-azure hover:text-versiory-green transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Voltar ao site</span>
          </Link>
          
          <div className="text-center">
            <h1 className={`text-4xl lg:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              <span className="bg-gradient-to-r from-versiory-green via-versiory-azure to-versiory-pink bg-clip-text text-transparent">
                ORÇAMENTO
              </span>
            </h1>
            <p className={`text-xl mt-2 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
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
          className={`mb-12 p-6 rounded-2xl backdrop-blur-sm border ${theme === 'dark' ? 'bg-gradient-to-r from-versiory-green/10 to-versiory-azure/10 border-versiory-green/30' : 'bg-gradient-to-r from-green-50 to-blue-50 border-green-200'}`}
        >
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp size={24} className="text-versiory-green" />
            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Análise de Mercado
            </h3>
          </div>
          <p className={`${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
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
              className={`group relative cursor-pointer ${theme === 'dark' ? 'bg-gradient-to-br from-versiory-blue/5 to-versiory-azure/5' : 'bg-white'} rounded-2xl p-6 border border-versiory-azure/30 hover:border-versiory-green/50 transition-all duration-300`}
              onClick={() => handleServiceSelect(service)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                {service.description}
              </p>

              <div className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                    <Check size={14} className="text-versiory-green" />
                    <span className="text-xs">{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <div className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-gray-400'}`}>
                    +{service.features.length - 3} recursos adicionais
                  </div>
                )}
              </div>

              <div className="border-t border-versiory-azure/20 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>Preço VERSIORY:</span>
                  <span className="text-lg font-bold text-versiory-green">{formatPrice(service.ourPrice)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-gray-400'}`}>Mercado:</span>
                  <span className={`text-sm line-through ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>
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
              className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto ${theme === 'dark' ? 'bg-gradient-to-br from-versiory-black to-versiory-blue/20' : 'bg-white'} rounded-2xl p-8 border border-versiory-azure/30`}
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
                <h2 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {selectedService.title}
                </h2>
                <p className={`text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                  {selectedService.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Recursos Inclusos
                  </h3>
                  <div className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className={`flex items-center space-x-3 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                        <Check size={20} className="text-versiory-green flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Detalhes do Projeto
                  </h3>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-versiory-blue/10' : 'bg-blue-50'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Preço VERSIORY</span>
                        <span className="text-2xl font-bold text-versiory-green">{formatPrice(selectedService.ourPrice)}</span>
                      </div>
                      <div className="text-sm text-versiory-green">
                        Economia de {calculateSavings(selectedService.marketPrice, selectedService.ourPrice)}% em relação ao mercado
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-versiory-pink/10' : 'bg-pink-50'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Preço de Mercado</span>
                        <span className="text-lg line-through text-gray-500">{formatPrice(selectedService.marketPrice)}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Média das grandes empresas do setor
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-versiory-green/10' : 'bg-green-50'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Prazo de Entrega</span>
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
                <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-r from-versiory-green/20 to-versiory-azure/20' : 'bg-gradient-to-r from-green-50 to-blue-50'}`}>
                  <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
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
                  <button className="px-8 py-4 bg-versiory-green text-white font-bold rounded-full hover:bg-versiory-green/90 transition-colors flex items-center justify-center space-x-2">
                    <span>Solicitar Orçamento</span>
                    <Zap size={20} />
                  </button>
                  
                  <button className="px-8 py-4 border-2 border-versiory-azure text-versiory-azure font-bold rounded-full hover:bg-versiory-azure hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Falar com Especialista</span>
                    <Phone size={20} />
                  </button>
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