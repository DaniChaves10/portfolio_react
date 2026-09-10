Portfólio React — Daniel Araujo

Portfólio pessoal desenvolvido em React com foco em apresentar minha trajetória, habilidades técnicas, projetos e formas de contato de maneira profissional, moderna e responsiva.

🔗 Repositório: https://github.com/DaniChaves10/portfolio_react

O projeto foi criado como atividade final de curso e também foi pensado para ser utilizado como portfólio profissional em processos seletivos.

🚀 Tecnologias utilizadas

React

JavaScript

Vite

CSS Modules

Fetch API

GitHub API

HTML5

CSS3

✨ Funcionalidades

Página inicial com resumo profissional

Navegação por seções

Seção Sobre mim

Integração com a API pública do GitHub

Exibição automática do avatar e quantidade de repositórios públicos

Seção de projetos com imagens, descrição, tecnologias e links

Seção de habilidades separada por categorias

Links para GitHub, LinkedIn e e-mail

Layout responsivo para dispositivos móveis e desktop

Componentes reutilizáveis

Estilização utilizando CSS Modules

📁 Estrutura do projeto

portfolio-react/
├── public/
│   ├── micro-frontends.png
│   ├── pratica-react.png
│   └── stranger-things.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── contato/
│   │   ├── footer/
│   │   ├── habilidades/
│   │   ├── hero/
│   │   ├── navbar/
│   │   ├── projetos/
│   │   └── sobre/
│   ├── data/
│   │   └── Projetos.js
│   ├── hooks/
│   │   └── useGitHubProfile.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js

💼 Projetos apresentados

Micro Frontends Restaurante

Aplicação desenvolvida com arquitetura de Micro Frontends, dividida em Container, Cardápio e Pedido. Os micros são integrados utilizando Webpack Module Federation e se comunicam por eventos globais do navegador.

Tecnologias: React, JavaScript, Webpack, Module Federation e CSS.

Repositório:
https://github.com/DaniChaves10/micro-frontends-restaurante

Aplicação React

Aplicação desenvolvida em React utilizando componentização, propriedades, estados e boas práticas de desenvolvimento Front-end.

Tecnologias: React, JavaScript, CSS e Vite.

Repositório:
https://github.com/DaniChaves10/pratica_avaliada_09

Stranger Things

Landing page temática inspirada em Stranger Things, criada com foco em interfaces modernas, animações e responsividade.

Tecnologias: HTML, CSS, JavaScript e GSAP.

Demonstração:
https://danichaves10.github.io/stranger-things/

🔗 Integração com GitHub

O portfólio utiliza a API pública do GitHub para carregar informações do perfil automaticamente.

A integração é feita através de um hook personalizado:

src/hooks/useGitHubProfile.js

Esse hook utiliza useState, useEffect e fetch para buscar os dados do perfil.

Exemplo de endpoint utilizado:

https://api.github.com/users/DaniChaves10

Com essa integração, o portfólio pode exibir automaticamente informações como:

Foto de perfil

Quantidade de repositórios públicos

▶️ Como rodar o projeto localmente

1. Clone o repositório

git clone https://github.com/DaniChaves10/portfolio_react.git

2. Entre na pasta do projeto

cd portfolio_react

3. Instale as dependências

npm install

4. Execute o projeto

npm run dev

O Vite exibirá no terminal um endereço semelhante a:

http://localhost:5173/

Acesse esse endereço no navegador.

📦 Build de produção

Para gerar a versão otimizada do projeto:

npm run build

Os arquivos de produção serão criados na pasta:

dist/

Para testar o build localmente:

npm run preview

🌐 Deploy

O projeto está publicado na Vercel e pode ser acessado através do link:

https://portfolioreact-eta.vercel.app/

📱 Responsividade

O projeto foi desenvolvido para funcionar corretamente em diferentes tamanhos de tela, incluindo:

Desktop

Notebook

Tablet

Smartphone

📬 Contato

Daniel Araujo

GitHub:
https://github.com/DaniChaves10

LinkedIn:
https://www.linkedin.com/in/daniel-araujo10/

E-mail:
danielaraujo.da789@gmail.com

Desenvolvido por Daniel Araujo.