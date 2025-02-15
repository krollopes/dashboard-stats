# 📊 Dashboard de Estatísticas

Este projeto é um **Dashboard de Estatísticas** desenvolvido com **Next.js (App Router)**, **React** e **Chart.js**. Ele exibe gráficos interativos baseados em dados dinâmicos, sendo ideal para visualizar métricas e tendências de forma intuitiva.

## 🚀 Tecnologias Utilizadas

- **Next.js** (App Router)
- **React**
- **Chart.js**
- **Tailwind CSS** (ou Styled Components, caso prefira)
- **Zustand** (para gerenciamento de estado leve)
- **Axios** (para consumo de APIs)

## 📂 Estrutura do Projeto

```
📦 dashboard-estatisticas
├── 📂 src
│   ├── 📂 app
│   │   ├── 📂 dashboard
│   │   │   ├── 📜 page.tsx (Página do dashboard)
│   │   │   ├── 📜 layout.tsx (Layout do dashboard)
│   ├── 📂 components
│   │   ├── 📜 ChartComponent.tsx (Componente de gráficos)
│   │   ├── 📜 Card.tsx (Componente de cartões informativos)
│   ├── 📂 services
│   │   ├── 📜 api.ts (Configuração de requisições)
│   ├── 📂 store
│   │   ├── 📜 dashboardStore.ts (Gerenciamento de estado com Zustand)
│   ├── 📂 styles
│   │   ├── 📜 globals.css (Caso utilize Tailwind)
│   ├── 📜 page.tsx (Página inicial)
├── 📜 package.json
├── 📜 README.md
```

## 🛠️ Instalação e Execução

### 📌 Pré-requisitos
- **Node.js** (versão 18+ recomendada)
- **pnpm** (gerenciador de pacotes)

### 🔧 Passos para rodar o projeto
```sh
# Clone este repositório
git clone https://github.com/seu-usuario/dashboard-estatisticas.git

# Acesse a pasta do projeto
cd dashboard-estatisticas

# Instale as dependências
pnpm install

# Execute o servidor de desenvolvimento
pnpm dev
```
Acesse **http://localhost:3000** no navegador para visualizar o dashboard.

## 📊 Funcionalidades

✅ Exibição de estatísticas em gráficos dinâmicos
✅ Integração com APIs para dados reais (mockados inicialmente)
✅ Interface responsiva e interativa
✅ Gerenciamento de estado eficiente com Zustand

## 📌 Melhorias Futuras

- 🔄 Atualização automática dos gráficos com WebSockets
- 📡 Integração com uma API real para dados dinâmicos
- 🎨 Tema customizável pelo usuário

## 📝 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo **LICENSE** para mais detalhes.

---

💡 **Dicas**: Sempre faça commits frequentes e bem descritos (em inglês). Exemplo:
```sh
git commit -m "feat: add dynamic chart component"
```

🚀 Vamos codar! 💻
