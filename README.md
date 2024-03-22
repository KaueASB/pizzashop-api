# 🍕 Pizza Shop API

App de delivery de comida (aka. iFood/Uber Eats) back-end construído com TypeScript, Drizzle a ElysiaJS.

> 🔥 Este projeto visa manter o runtime de execução agnóstico, o que significa que deve funcionar em Bun, Node, Cloudflare Workers ou qualquer runtime de execução compatível com API Web Standard.

## Running

Este projeto depende do Docker para configurar o banco de dados. Com o Docker instalado, clone o projeto, instale as dependências, configure os contêineres do Docker e execute o aplicativo.

> Você também deve executar migrations para criar tabelas no banco de dados e executar a seed para preencher o banco de dados com dados falsos.

```sh
bun i
docker compose up -d
bun migrate
bun seed
bun dev
```

## Features

> O **resumo** dos recursos está listado abaixo. Todos os recursos contêm testes *E2E.
> Obs: Testes E2E em desenvolvimento.

- deve ser capaz de registrar um novo restaurante
- deve ser possível entrar como gerente de restaurante
- deve ser capaz de se registrar como um novo cliente
- deve ser capaz de criar um pedido para o restaurante
- deve ser capaz de gerenciar o menu do restaurante
- deve ser capaz de gerenciar as avaliações do restaurante
- deve poder deixar uma avaliação
- deve ser capaz de gerenciar os pedidos do restaurante
- deve ser capaz de atualizar o perfil público do restaurante
- deve poder abrir/fechar o restaurante
- deve ser capaz de listar métricas do restaurante
