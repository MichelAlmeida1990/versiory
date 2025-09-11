# 🛠️ Guia de Desenvolvimento - Versiory

## 📋 Ferramentas de Qualidade de Código

### **🔧 Configurações Implementadas:**

#### **1. ESLint**
- ✅ **Configuração:** Next.js + TypeScript + Prettier
- ✅ **Regras personalizadas** para React e Next.js
- ✅ **Auto-fix** habilitado

#### **2. Prettier**
- ✅ **Formatação automática** de código
- ✅ **Configuração consistente** para todo o projeto
- ✅ **Integração com ESLint**

#### **3. Husky**
- ✅ **Git hooks** para qualidade de código
- ✅ **Pre-commit:** Lint + Format automático
- ✅ **Commit-msg:** Validação de mensagens

#### **4. Commitlint**
- ✅ **Mensagens padronizadas** (Conventional Commits)
- ✅ **Validação automática** de commits
- ✅ **Histórico organizado**

#### **5. Lint-staged**
- ✅ **Lint apenas arquivos modificados**
- ✅ **Performance otimizada**
- ✅ **Integração com Husky**

## 🚀 **Comandos Disponíveis:**

### **Desenvolvimento:**
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
```

### **Qualidade de Código:**
```bash
npm run lint         # Verificar problemas
npm run lint:fix     # Corrigir problemas automaticamente
npm run format       # Formatar código
npm run format:check # Verificar formatação
npm run type-check   # Verificar tipos TypeScript
```

### **Commits:**
```bash
npm run commit       # Commit interativo (commitizen)
git commit -m "..."  # Commit manual (validado pelo commitlint)
```

## 📝 **Padrões de Commit:**

### **Tipos de Commit:**
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação, ponto e vírgula, etc
- `refactor:` - Refatoração de código
- `perf:` - Melhoria de performance
- `test:` - Adição de testes
- `chore:` - Tarefas de manutenção
- `ci:` - Configuração de CI/CD
- `build:` - Sistema de build
- `revert:` - Reverter commit

### **Exemplos:**
```bash
feat: adicionar página de orçamento
fix: corrigir erro no componente Hero
docs: atualizar README
style: formatar código com Prettier
refactor: otimizar componente TetrisBackground
perf: melhorar performance do carousel
test: adicionar testes para SEO
chore: atualizar dependências
```

## 🔄 **Fluxo de Trabalho:**

### **1. Desenvolvimento:**
```bash
# 1. Criar branch
git checkout -b feature/nova-funcionalidade

# 2. Desenvolver
npm run dev

# 3. Verificar qualidade
npm run lint:fix
npm run format
npm run type-check

# 4. Commit
npm run commit
```

### **2. Pre-commit (Automático):**
- ✅ ESLint executa e corrige problemas
- ✅ Prettier formata o código
- ✅ Apenas arquivos modificados são processados

### **3. Commit (Automático):**
- ✅ Commitlint valida a mensagem
- ✅ Formato Conventional Commits obrigatório

## 🎯 **Benefícios:**

### **1. Qualidade:**
- ✅ Código consistente e limpo
- ✅ Erros detectados automaticamente
- ✅ Formatação padronizada

### **2. Produtividade:**
- ✅ Auto-fix de problemas comuns
- ✅ Commits padronizados
- ✅ Histórico organizado

### **3. Colaboração:**
- ✅ Padrões consistentes
- ✅ Code review facilitado
- ✅ Onboarding simplificado

## 🔧 **Configuração do VS Code:**

### **Extensões Recomendadas:**
- ✅ Prettier - Code formatter
- ✅ ESLint
- ✅ Tailwind CSS IntelliSense
- ✅ TypeScript Importer
- ✅ Auto Rename Tag
- ✅ Path Intellisense

### **Configurações Automáticas:**
- ✅ Format on save
- ✅ ESLint auto-fix
- ✅ Tailwind CSS IntelliSense
- ✅ TypeScript preferences

## 📊 **Monitoramento:**

### **1. Qualidade de Código:**
- ✅ ESLint reports
- ✅ TypeScript errors
- ✅ Prettier formatting

### **2. Commits:**
- ✅ Conventional Commits
- ✅ Commitlint validation
- ✅ Husky hooks

### **3. Performance:**
- ✅ Lint-staged (apenas arquivos modificados)
- ✅ Build optimization
- ✅ Type checking

## 🚨 **Troubleshooting:**

### **Problemas Comuns:**

#### **1. ESLint não funciona:**
```bash
npm run lint:fix
```

#### **2. Prettier não formata:**
```bash
npm run format
```

#### **3. Commit rejeitado:**
```bash
# Use o formato correto:
feat: descrição da funcionalidade
fix: descrição da correção
```

#### **4. Husky não executa:**
```bash
npx husky install
```

## 📚 **Recursos:**

- [Conventional Commits](https://www.conventionalcommits.org/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Commitlint Rules](https://commitlint.js.org/#/reference-rules)

---

**🎉 Com essas ferramentas, o projeto Versiory mantém alta qualidade de código e desenvolvimento eficiente!**
