'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, FileText, DollarSign, BarChart3, GraduationCap, Library, Clock, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface SystemFeature {
  id: number;
  title: string;
  description: string;
  icon: any;
  features: string[];
  color: string;
  position: 'left' | 'center' | 'right';
}

const SchoolSystem = () => {
  const systemFeatures: SystemFeature[] = [
    {
      id: 1,
      title: "Processo de Matrícula Digitalizado",
      description: "Sistema completo de matrícula com aprovação automática e gerenciamento integrado.",
      icon: FileText,
      features: ["Aprovação Automática", "Gerenciamento de Matrícula", "Documentação Digital"],
      color: "from-versory-blue to-versory-azure",
      position: "left"
    },
    {
      id: 2,
      title: "Gerenciamento de Livros",
      description: "Controle completo da biblioteca com empréstimos e devoluções automatizados.",
      icon: BookOpen,
      features: ["Empréstimos", "Devoluções", "Controle de Estoque"],
      color: "from-versory-azure to-versory-pink",
      position: "center"
    },
    {
      id: 3,
      title: "Acompanhamento de Frequência",
      description: "Monitoramento em tempo real da presença dos alunos com relatórios automáticos.",
      icon: Calendar,
      features: ["Registro Automático", "Relatórios", "Notificações"],
      color: "from-versory-pink to-versory-green",
      position: "right"
    },
    {
      id: 4,
      title: "Painel de Recursos Simplificado",
      description: "Interface intuitiva para gestão de todos os recursos educacionais.",
      icon: BarChart3,
      features: ["Dashboard", "Métricas", "Análises"],
      color: "from-versory-green to-versory-brown",
      position: "center"
    },
    {
      id: 5,
      title: "Gestão de Alunos",
      description: "Cadastro completo com histórico acadêmico e documentação integrada.",
      icon: Users,
      features: ["Cadastro Completo", "Histórico", "Documentos"],
      color: "from-versory-brown to-versory-blue",
      position: "left"
    },
    {
      id: 6,
      title: "Gerenciamento de Mensalidades",
      description: "Controle financeiro completo com análise e relatórios gerenciais.",
      icon: DollarSign,
      features: ["Geração Automática", "Análise Financeira", "Relatório Gerencial", "Status"],
      color: "from-versory-blue to-versory-pink",
      position: "right"
    },
    {
      id: 7,
      title: "Gerenciamento de Disciplinas",
      description: "Controle acadêmico com boletins automáticos e análise de desempenho.",
      icon: GraduationCap,
      features: ["Boletins Automáticos", "Análises", "Carga Horária"],
      color: "from-versory-pink to-versory-green",
      position: "center"
    }
  ];

  return (
    <section id="sistema-escolar" className="py-20 bg-gradient-to-b from-versory-blue/10 to-versory-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-versory-green/20 to-versory-azure/20 backdrop-blur-sm border border-versory-green/30 rounded-full px-6 py-3 mb-6"
          >
            <GraduationCap size={20} className="text-versory-green" />
            <span className="text-versory-azure font-semibold">Sistema Completo</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-versory-green to-versory-azure bg-clip-text text-transparent">
              Sistema de Gestão Escolar
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
          >
            Mais de 22 recursos para gerenciamento completo da sua instituição de ensino.
          </motion.p>

          {/* Destaque Principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-versory-green to-versory-azure text-black px-6 py-3 rounded-full font-bold text-lg"
          >
            <CheckCircle size={24} />
            <span>22+ Recursos Integrados</span>
          </motion.div>
        </ScrollReveal>

        {/* Fluxograma Interativo */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="relative">
            {/* Linhas de Conexão */}
            <div className="absolute inset-0 hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                {/* Linhas principais */}
                <path d="M200 200 L400 300 L600 200 L800 300 L1000 200" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                <path d="M200 400 L400 500 L600 400 L800 500 L1000 400" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                <path d="M200 600 L400 700 L600 600 L800 700 L1000 600" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ccff00" />
                    <stop offset="50%" stopColor="#00afee" />
                    <stop offset="100%" stopColor="#ca00ca" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Grid de Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {systemFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                  className="group relative"
                >
                  <div className={`relative overflow-hidden rounded-2xl p-6 h-full transition-all duration-500 bg-gradient-to-br ${feature.color} bg-opacity-20 backdrop-blur-sm border border-white/10 group-hover:border-white/30`}>
                    
                    {/* Ícone */}
                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                        <feature.icon size={24} className="text-white" />
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-versory-green transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-white/80 text-sm leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-1">
                        {feature.features.map((item, idx) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                            className="flex items-center space-x-2"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                            <span className="text-white/70 text-xs">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Indicador de Posição */}
                    <div className={`absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r ${feature.color} opacity-60`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-versory-black/50 to-versory-blue/20 backdrop-blur-sm border border-versory-azure/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-versory-green mb-4">
                Pronto para Transformar sua Escola?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Implemente um sistema completo de gestão escolar e otimize todos os processos da sua instituição.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(204, 255, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-versory-green text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Solicitar Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-versory-azure text-versory-azure px-8 py-4 rounded-full font-bold text-lg hover:bg-versory-azure hover:text-black transition-all duration-300"
                >
                  Ver Funcionalidades
                </motion.button>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SchoolSystem; 