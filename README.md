# 🚗 DriveShare - Plataforma de Aluguel de Carros P2P

Uma plataforma moderna de aluguel de carros peer-to-peer inspirada no Turo, construída com Next.js, TypeScript e Tailwind CSS.

## ✨ Funcionalidades

### 🎯 MVP Implementado
- **Página inicial** com listagem de carros disponíveis
- **Filtros avançados** por categoria, faixa de preço e busca por texto
- **Página de detalhes** do carro com informações completas
- **Sistema de reservas** com modal de confirmação
- **Página "Meus Aluguéis"** para gerenciar reservas
- **Design responsivo** e moderno
- **Animações suaves** com Framer Motion
- **Imagens otimizadas** com Next.js Image

### 🔧 Stack Tecnológica
- **Next.js 15** (App Router)
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização responsiva
- **Zustand** para gerenciamento de estado
- **Framer Motion** para animações
- **Lucide React** para ícones
- **ESLint** para qualidade de código

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd CAR

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Acesse http://localhost:3000
```

### Scripts Disponíveis
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── car/[id]/          # Página de detalhes do carro
│   ├── my-rentals/        # Página de aluguéis do usuário
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── CarCard.tsx        # Card de carro na listagem
│   ├── FilterBar.tsx      # Barra de filtros
│   ├── Header.tsx         # Cabeçalho da aplicação
│   └── ReservationModal.tsx # Modal de reserva
├── data/                  # Dados simulados
│   └── cars.ts           # Lista de carros fake
├── stores/               # Gerenciamento de estado
│   └── carStore.ts       # Store Zustand
├── types/                # Definições TypeScript
│   └── car.ts           # Interfaces e tipos
└── hooks/               # Hooks customizados (futuro)
```

## 🎨 Design e UX

### Características do Design
- **Interface moderna** com cards elegantes
- **Paleta de cores** azul e cinza para confiabilidade
- **Tipografia clara** com hierarquia bem definida
- **Micro-interações** para melhor experiência
- **Estados de loading** e feedback visual
- **Design mobile-first** totalmente responsivo

### Componentes Principais
- **CarCard**: Exibe informações do carro com hover effects
- **FilterBar**: Filtros expansíveis com sliders de preço
- **ReservationModal**: Modal completo para reservas
- **Header**: Navegação com contador de reservas

## 📊 Dados Simulados

O projeto inclui 8 carros fictícios com:
- **Categorias**: Econômico, Compacto, Luxo, SUV, Esportivo
- **Informações completas**: Preço, características, avaliações
- **Imagens reais** do Unsplash otimizadas
- **Dados realistas** para demonstração

## 🔄 Gerenciamento de Estado

Utiliza **Zustand** para:
- Lista de carros e carros filtrados
- Estado dos filtros (categoria, preço, busca)
- Reservas do usuário
- Actions para manipular o estado

## 🎭 Animações

**Framer Motion** implementado em:
- Entrada escalonada dos cards de carros
- Transições suaves entre páginas
- Animações do modal de reserva
- Hover effects nos componentes
- Loading states animados

## 📱 Responsividade

- **Mobile**: Layout em coluna única, menu hambúrguer
- **Tablet**: Grid de 2 colunas, filtros adaptados
- **Desktop**: Grid de 3 colunas, layout completo
- **Breakpoints**: Tailwind CSS padrão (sm, md, lg, xl)

## 🔮 Próximos Passos

### Funcionalidades Futuras
- [ ] Autenticação de usuários
- [ ] Backend real com API
- [ ] Integração com mapas
- [ ] Sistema de pagamentos
- [ ] Chat entre usuários
- [ ] Avaliações e comentários
- [ ] Painel administrativo
- [ ] Notificações push
- [ ] Geolocalização
- [ ] Upload de imagens

### Melhorias Técnicas
- [ ] Testes unitários (Jest/Testing Library)
- [ ] Testes E2E (Playwright)
- [ ] Storybook para componentes
- [ ] PWA (Progressive Web App)
- [ ] SEO otimizado
- [ ] Analytics
- [ ] Monitoramento de erros
- [ ] CI/CD pipeline

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ para demonstrar habilidades em React/Next.js e criar uma experiência de usuário excepcional.

---

**DriveShare** - *Alugue. Dirija. Compartilhe.*
# garage
