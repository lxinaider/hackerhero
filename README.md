# SoftEduc

## Sobre o Projeto

**SoftEduc** é uma plataforma web dedicada à prevenção e conscientização sobre abuso infantil. O objetivo principal é:

- **PREVENIR** situações de abuso através de educação e conscientização
- **IDENTIFICAR** quando uma criança é vítima de abuso ou está em situação de risco
- **CONECTAR** crianças vítimas à rede de apoio e recursos de denúncia

A plataforma oferece uma abordagem leve e interativa, com histórias e quizzes educativos que ajudam crianças a identificarem situações inadequadas, entenderem seus direitos e saberem a quem recorrer.

## Tecnologias Utilizadas

### Frontend
- **Next.js 16.1.7** - Framework React moderno com suporte a SSR e otimizações de performance
- **React 19** - Biblioteca UI reativa
- **TypeScript** - Tipagem estática para maior segurança de código
- **Tailwind CSS 4** - Framework CSS utilitário para estilização rápida
- **Framer Motion 12** - Biblioteca de animações fluidas e interativas
- **shadcn** - Componentes UI construídos com Radix UI e Tailwind CSS

### Ícones e UI
- **Hugeicons** - Biblioteca de ícones de alta qualidade (free icons)
- **Lucide React** - Icons adicionais para elementos da interface
- **Class Variance Authority** - Gerenciamento de variantes de CSS

### Ferramentas de Desenvolvimento
- **Bun** - Runtime rápido para JavaScript/TypeScript
- **ESLint** - Linter para garantir qualidade de código
- **Prettier** - Formatador automático de código
- **PostCSS** - Processador CSS com suporte a Tailwind

## Estrutura do Projeto

```
├── app/                          # Páginas e rotas da aplicação
│   ├── page.tsx                 # Home - Página inicial
│   ├── layout.tsx               # Layout global
│   ├── historia/                # Seção de histórias educativas
│   │   └── page.tsx
│   ├── quiz/                    # Seção de quizzes interativos
│   │   └── page.tsx
├── components/                   # Componentes reutilizáveis
│   ├── common/                  # Componentes compartilhados
│   │   ├── header.tsx          # Cabeçalho da aplicação
│   │   └── footer.tsx          # Rodapé
│   ├── ui/                      # Componentes de UI base
│   │   └── button.tsx          # Componente botão
│   ├── perspective-book.tsx    # Componente de livro 3D
│   └── theme-provider.tsx      # Provedor de tema (dark/light)
├── hooks/                        # React hooks customizados
├── lib/                          # Utilidades e funções helpers
│   └── utils.ts                # Funções utilitárias (cn, etc)
├── public/                       # Arquivos estáticos
│   ├── sparkle.svg             # Decorações visuais
│   ├── car.png                 # Imagem para histórias
│   ├── hello.svg               # Stickers decorativos
│   ├── kindness.svg
│   ├── happy.svg
│   └── smile_sticker.svg
├── package.json                  # Dependências do projeto
├── next.config.mjs             # Configuração do Next.js
├── tailwind.config.mjs          # Configuração do Tailwind
└── tsconfig.json               # Configuração do TypeScript
```

## Rotas

### **Home (Página Inicial)**
- **Rota**: `/`
- **Descrição**: Entrada principal da plataforma com o branding "SoftEduc"
- **Funcionalidades**:
  - Apresentação clara do propósito da plataforma
  - Dois botões principais de navegação:
    - **Histórias** - Acesso ao acervo de histórias educativas
    - **Quizzes** - Acesso aos questionários interativos
  - Footer com informações adicionais

### **Histórias (Historia)**
- **Rota**: `/historia`
- **Descrição**: Galeria de histórias interativas que abordam temas críticos de prevenção

### **Quizzes**
- **Rota**: `/quiz`
- **Descrição**: Questionários interativos que reforçam aprendizado sobre prevenção

## Como Executar o Projeto

### Instalação
```bash
# Usar Bun (recomendado)
bun install

# Ou npm
npm install
```

### Desenvolvimento
```bash
# Com Bun
bun dev

# Ou npm
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção
```bash
# Com Bun
bun run build

# Ou npm
npm run build
```

### Formatação e Linting
```bash
# Linting
npm run lint

# Formatação automática
npm run format

# Type checking
npm run typecheck
```
