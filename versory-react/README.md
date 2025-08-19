# Versiory - React Version

Versão moderna da Versiory desenvolvida com React, Next.js e tecnologias de ponta.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Type safety e melhor DX
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas
- **React Intersection Observer** - Scroll reveal
- **Lucide React** - Ícones modernos

## 🎨 Paleta de Cores

```css
/* Cores principais da Versiory */
--versiory-blue: #031f5f
--versiory-azure: #00afee
--versiory-pink: #ca00ca
--versiory-brown: #c2af00
--versiory-green: #ccff00
--versiory-black: #000000
```

## ✨ Funcionalidades

### 🎯 Scroll Reveal
- Animações baseadas em Intersection Observer
- Múltiplas direções (up, down, left, right, scale, fade)
- Configurável com delays e thresholds

### 🎨 Design Moderno
- Glassmorphism e neumorphism
- Gradientes dinâmicos
- Micro-interações
- Responsivo e acessível

### ⚡ Performance
- Lazy loading automático
- Otimização de imagens
- Bundle splitting
- SEO otimizado

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout global
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globais
├── components/
│   ├── Navbar.tsx         # Navegação
│   ├── Hero.tsx           # Seção hero
│   ├── About.tsx          # Seção sobre
│   └── ScrollReveal.tsx   # Componente scroll reveal
└── styles/
    └── (estilos do Tailwind)
```

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Executar produção:**
   ```bash
   npm start
   ```

## 📱 Responsividade

- **Mobile First** - Design otimizado para mobile
- **Breakpoints** - sm, md, lg, xl, 2xl
- **Touch Friendly** - Interações otimizadas para touch

## 🎭 Animações

### Scroll Reveal
```tsx
<ScrollReveal direction="up" delay={0.2}>
  <YourComponent />
</ScrollReveal>
```

### Framer Motion
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## 🔧 Configuração

### Tailwind CSS
- Cores customizadas da Versiory
- Animações personalizadas
- Utilitários responsivos

### TypeScript
- Tipagem estrita
- Interfaces bem definidas
- Melhor DX e debugging

## 📈 Próximos Passos

- [ ] Integrar imagens do portfólio
- [ ] Adicionar seção de serviços
- [ ] Implementar formulário de contato
- [ ] Adicionar dark/light mode toggle
- [ ] Otimizar SEO
- [ ] Implementar analytics

## 🌟 Vantagens da Migração

1. **Performance** - Melhor performance e SEO
2. **Manutenibilidade** - Código mais organizado e tipado
3. **Escalabilidade** - Fácil adição de novas funcionalidades
4. **Modernidade** - Stack atual e profissional
5. **Reutilização** - Componentes reutilizáveis

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto React da Versiory, entre em contato através dos canais oficiais da empresa.
