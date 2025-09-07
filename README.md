# 🎬 PrimeFlix

Uma aplicação web moderna para descobrir e gerenciar seus filmes favoritos, desenvolvida com React e integrada à API do The Movie Database (TMDB).

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API Utilizada](#api-utilizada)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre o Projeto

O PrimeFlix é uma aplicação web que permite aos usuários explorar filmes em cartaz, visualizar detalhes completos de cada filme e criar uma lista personalizada de favoritos. A aplicação utiliza a API do The Movie Database para fornecer informações atualizadas sobre filmes.

## ✨ Funcionalidades

- **🏠 Página Inicial**: Exibe os 10 filmes mais populares em cartaz
- **🎭 Detalhes do Filme**: Visualização completa de informações como sinopse, avaliação, popularidade e votos
- **❤️ Lista de Favoritos**: Sistema para salvar e gerenciar filmes favoritos usando localStorage
- **🔍 Busca de Trailer**: Link direto para busca de trailers no YouTube
- **📱 Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- **🔔 Notificações**: Sistema de toast para feedback do usuário
- **🚫 Tratamento de Erros**: Página de erro personalizada para rotas não encontradas

## 🛠️ Tecnologias Utilizadas

- **React 19.0.0** - Biblioteca principal para construção da interface
- **React Router DOM 7.3.0** - Roteamento entre páginas
- **Axios 1.8.3** - Cliente HTTP para requisições à API
- **React Toastify 11.0.5** - Sistema de notificações
- **CSS3** - Estilização personalizada
- **The Movie Database API** - Fonte de dados dos filmes

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**
- **Git**

## 🚀 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/prime-flix.git
   ```

2. **Navegue até o diretório do projeto**
   ```bash
   cd prime-flix
   ```

3. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   # ou
   yarn start
   ```

5. **Abra seu navegador**
   Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## 🎮 Como Usar

### Navegação Principal
- **Home**: Visualize os filmes em cartaz na página inicial
- **Favoritos**: Acesse sua lista pessoal de filmes salvos
- **Detalhes**: Clique em "Acessar" em qualquer filme para ver informações completas

### Gerenciando Favoritos
1. Na página de detalhes de um filme, clique em "Salvar"
2. O filme será adicionado à sua lista de favoritos
3. Acesse a página "Favoritos" para ver todos os filmes salvos
4. Use o botão "Excluir" para remover filmes da sua lista

### Visualizando Trailers
- Na página de detalhes, clique em "Trailer" para buscar o trailer no YouTube

## 📁 Estrutura do Projeto

```
prime-flix/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   └── Header/       # Cabeçalho da aplicação
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home/         # Página inicial
│   │   ├── Filme/        # Detalhes do filme
│   │   ├── Favoritos/    # Lista de favoritos
│   │   └── Error/        # Página de erro
│   ├── services/         # Serviços e configurações
│   │   └── api.js        # Configuração da API
│   ├── App.js            # Componente principal
│   ├── routes.js         # Configuração de rotas
│   └── index.js          # Ponto de entrada
├── package.json          # Dependências e scripts
└── README.md            # Este arquivo
```

## 🌐 API Utilizada

O projeto utiliza a **The Movie Database (TMDB) API** para obter dados dos filmes:

- **Base URL**: `https://api.themoviedb.org/3`
- **Endpoints utilizados**:
  - `/movie/now_playing` - Filmes em cartaz
  - `/movie/{id}` - Detalhes de um filme específico
- **Imagens**: `https://image.tmdb.org/t/p/original/`

### Configuração da API
A API key está configurada no arquivo `src/services/api.js`. Para produção, recomenda-se usar variáveis de ambiente.

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ por [Seu Nome]

---

**Nota**: Este projeto foi desenvolvido para fins educacionais e demonstração de conceitos de React, consumo de APIs e gerenciamento de estado local.
