<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

  <!-- Badges -->

![GitHub top language](https://img.shields.io/github/languages/top/kaiquecovo/descomplica-backend-challenge?color=%2300E88F)
![GitHub repo size](https://img.shields.io/github/repo-size/kaiquecovo/descomplica-backend-challenge?color=%23212121)
![GitHub made by](https://img.shields.io/badge/made%20by-KaiqueCovo-%2366ffbd)

<!-- Menu -->
<p align="center" >
  <a href="#bookmark_tabs-about-the-project">:bookmark_tabs:&nbsp;&nbsp;About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">:rocket:&nbsp;&nbsp;Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">:information_source:&nbsp;&nbsp;How To Use</a>
</p>

<!-- Mockup -->
<div  align="center" style="padding: 50px;">
  <img alt="Mockup" src="./.github/mockup.png" width="auto" heigth="auto"/>
</div>

</div>

<!-- About -->

## :bookmark_tabs: About the project

API Graphql for add students. This is challenge from Descomplica

<!-- Technologies -->

## :rocket: Technologies

This project was developed at challenge [Descomplica](https://descomplica.com.br) with the following technologies:

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io)
- [PostgreSQL](https://www.postgresql.org/)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Docker](https://www.docker.com/)

<!-- How to use -->

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16](https://nodejs.org/en) or higher + [Yarn v1.13](https://yarnpkg.com) or higher installed on your computer. Run from your command line:

```bash
# Clone this repository
$ git clone git@github.com:KaiqueCovo/descomplica-backend-challenge.git

# Go into the repository
$ cd descomplica-backend-challenge

# Copy .env.example to .env
$ cp -rf .env.example .env

# Install dependencies
$ yarn
# or
$ npm run install

# Run the container
$ docker compose up -d

# Run migrations
$ yarn typeorm migration:run

# Run the app
$ yarn start:dev
# or
$ npm run start:dev
```

---

Made with ♥ by [Kaique Covo](https://www.linkedin.com/in/kaique-covo-a46331147/) :wave:
