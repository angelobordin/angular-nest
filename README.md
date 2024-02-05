<h1>Chat.IO</h1>

<p>
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen"/>
  <img src="https://img.shields.io/badge/última%20atualização-fevereiro-yellowgreen"/>
  <img src="https://img.shields.io/badge/Node.JS-18.18.7-blueviolet"/>
</p>

<h2>Descrição</h2>
Projeto de API utilizando Angular 17 e Nest JS<br>
<br>

<h2>Funcionalidades</h2>
<h3>Implementadas :heavy_check_mark:</h3>

- `Cadastro de pessoa`:
  - Método: POST
  - Endpoint: `/person`
  - Propriedades:
    - "cpf": String
    - "name": String
    - "birthday": String
    - "marital_status": String
    - "level_education": String
- `Listagem de Registros`:
  - Método: GET
  - Endpoint: `/person`
- `Listagem de Registro por ID`:
  - Método: GET
  - Endpoint: `/person/:id`
  - Paramêtros de rota:
    - "id": String
- `Atualização de Registro por ID`:
  - Método: PATCH
  - Endpoint: `/person/:id`
  - Paramêtros de rota:
    - "id": String
- `Exclusão de Registro por ID`:
  - Método: DELETE
  - Endpoint: `/person/:id`
  - Paramêtros de rota:
    - "id": String 

<h2>Acesso ao projeto 📁</h2>

Você pode [acessar o código fonte do projeto inicial aqui](https://github.com/angelobordin/angular-nest), ou [baixá-lo aqui](https://github.com/angelobordin/angular-nest/archive/refs/heads/master.zip).

<h2>Abrir e rodar o projeto 🛠️</h2>
<h3>Pré-Requisitos</h3>

⚠️ [Node](https://nodejs.org/en/)<br>
⚠️ [VS Code](https://code.visualstudio.com/Download)<br>
⚠️ [Docker](https://docs.docker.com/desktop/install/windows-install/)<br>

Após baixar o projeto no seu dispositivo, você pode abri-lo no VS Code.<br>
Para isso abra o VS Code em seu dispositivo, após clique em:

<h3>VS Code</h3>

- _File >> Open Folder..._ ou digite _Ctrl+K_ / _Ctrl+O_;
- Abra o terminal em _Terminal >> New Terminal_;

<h2>Executando DataBase em Docker</h2>

**Você deve possuir Docker e Docker Compose caso queira executar a aplicação com containers !!**

- Acesse a página **nest-server**, e em seguida basta executar o comando **docker-compose up --build** dentro da pasta do projeto;

<h3>BackEnd</h3>

⚠️ ATENÇÃO ⚠️ <br>

- Entre na pasta **nest-server**;
- Execute o comando **npm install** para instalar as dependências;
- Execute o comando **npm run start** para iniciar o servidor na porta 3000;

<h3>FrontEnd</h3>

- Acesse a pasta "client";
- Execute o comando **npm install** para instalar as dependências;
- Execute o comando **npm run start** para iniciar a aplicação na porta 4200;

<h2>Tecnologias Utilizadas</h2>

<ul>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg" width="20" height="20"/><b> Visual Studio Code</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20" height="20"/><b> Node.JS</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" width="20" height="20"/> NestJS</li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="20" height="20"/><b> TypeScript</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" width="20" height="20"/> Angular 17</li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="20" height="20"/><b> Git</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="20" height="20"/><b> Docker</b></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" width="20" height="20"/> PostgreSQL</li>
</ul>

# Autores

| [<img src="https://avatars.githubusercontent.com/u/70332789?s=400&u=c6b947894c97e0e941f64aafeb22719ff49589ac&v=4" width=115><br><sub>Angelo Bordin</sub>](https://github.com/angelobordin) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
