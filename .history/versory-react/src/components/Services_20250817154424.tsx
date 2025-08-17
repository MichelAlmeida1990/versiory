'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, Database, Code, Zap, Shield, TrendingUp, LucideIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'web' | 'mobile' | 'design' | 'system';
  features: string[];
  color: string;
  gradient: string;
}

const Services = () => {
  const { theme } = useTheme();
  
  const services: Service[] = [
    {
      id: 1,
      title: "Site",
      description: "Sites responsivos e otimizados para conversão com design moderno e SEO avançado.",
      icon: Globe,
      category: "web",
      features: ["Design Responsivo", "SEO Otimizado", "Performance", "Analytics"],
      color: "from-versory-pink to-versory-azure",
      gradient: "bg-gradient-to-br from-versory-pink to-versory-azure"
    },
    {
      id: 2,
      title: "Landing Page",
      description: "Landing pages de alta conversão com A/B testing e otimização contínua.",
      icon: Zap,
      category: "web",
      features: ["A/B Testing", "Conversão", "Integração", "Tracking"],
      color: "from-versory-azure to-versory-blue",
      gradient: "bg-gradient-to-br from-versory-azure to-versory-blue"
    },
    {
      id: 3,
      title: "Delivery",
      description: "Aplicativos de delivery completos com geolocalização e pagamentos integrados.",
      icon: Smartphone,
      category: "mobile",
      features: ["GPS", "Pagamentos", "Notificações", "Tracking"],
      color: "from-versory-green to-versory-brown",
      gradient: "bg-gradient-to-br from-versory-green to-versory-brown"
    },
    {
      id: 4,
      title: "E-commerce",
      description: "Plataformas de e-commerce completas com gestão de produtos e vendas.",
      icon: Database,
      category: "system",
      features: ["Carrinho", "Pagamentos", "Estoque", "Relatórios"],
      color: "from-versory-blue to-versory-pink",
      gradient: "bg-gradient-to-br from-versory-blue to-versory-pink"
    },
    {
      id: 5,
      title: "Design UI/UX",
      description: "Design de interfaces modernas focadas na experiência do usuário.",
      icon: Palette,
      category: "design",
      features: ["Wireframes", "Prototipagem", "Design System", "Usabilidade"],
      color: "from-versory-pink to-versory-green",
      gradient: "bg-gradient-to-br from-versory-pink to-versory-green"
    },
    {
      id: 6,
      title: "Sistemas",
      description: "Sistemas de gestão empresarial com módulos integrados e dashboard.",
      icon: Code,
      category: "system",
      features: ["Dashboard", "Módulos", "Relatórios", "API"],
      color: "from-versory-brown to-versory-azure",
      gradient: "bg-gradient-to-br from-versory-brown to-versory-azure"
    }
  ];

  const categories = [
    { key: 'all', label: 'Todos os Serviços', color: 'from-versory-green to-versory-azure' },
    { key: 'web', label: 'Desenvolvimento Web', color: 'from-versory-azure to-versory-pink' },
    { key: 'mobile', label: 'Aplicativos Mobile', color: 'from-versory-pink to-versory-green' },
    { key: 'design', label: 'Design & UX', color: 'from-versory-green to-versory-brown' },
    { key: 'system', label: 'Sistemas', color: 'from-versory-brown to-versory-blue' }
  ];

  const headerAnimation = useScrollAnimation({ delay: 0.2 });
  const servicesAnimation = useScrollAnimation({ delay: 0.4 });
  const statsAnimation = useScrollAnimation({ delay: 0.8 });
  const statsStagger = useStaggerAnimation([
    { number: "50+", label: "Projetos Entregues", icon: TrendingUp },
    { number: "100%", label: "Satisfação", icon: Shield },
    { number: "24/7", label: "Suporte", icon: Zap },
    { number: "3x", label: "Mais Conversão", icon: Globe }
  ], 0.15);

  return (
    <section id="servicos" className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-versory-black to-versory-blue/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerAnimation.ref} style={headerAnimation.style} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-versory-azure/20 to-versory-pink/20 backdrop-blur-sm border border-versory-azure/30 rounded-full px-6 py-3 mb-6">
            <Code size={20} className="text-versory-azure" />
            <span className="text-versory-pink font-semibold">Nossos Serviços</span>
          </div>
          
          <h2 className={`text-4xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-versory-green via-versory-azure to-versory-pink bg-clip-text text-transparent">
              SERVIÇOS
            </span>
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
            Soluções digitais completas para impulsionar seu negócio e alcançar resultados excepcionais.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div ref={servicesAnimation.ref} style={servicesAnimation.style}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} ref={servicesStagger.refs[index]} style={servicesStagger.getStaggerStyle(index)}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative h-full"
                >
                  <div className={`relative overflow-hidden rounded-2xl p-8 h-full transition-all duration-500 backdrop-blur-sm border group-hover:border-white/60 ${theme === 'dark' ? `${service.gradient} bg-opacity-10 border-white/30` : 'bg-blue-light/70 border-versory-azure/60'}`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon size={32} className="text-white" />
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`