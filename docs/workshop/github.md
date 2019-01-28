# GitHub

Nessa seção você encontrará as instruções necessárias para integrar o seu projeto com o GitHub.

## GitHub

**GitHub** é uma plataforma de hospedagem de código-fonte que utiliza o **Git** como ferramenta de versionamento. O GitHub também estende as funcionalidades do Git.

Para criar uma conta, acesse o site oficial do [GitHub](https://github.com/).

## Criando o repositório

Para criar um novo repositório, siga os passos abaixo:

1. Acesse a [página de criação de novos repositórios](https://github.com/new)
2. Informe o nome do projeto em **Repository name**
3. Informe a descrição do projeto em **Description (optional)**
4. Escolha a opção **Public** para repositórios públicos ou **Private** para repositórios privados (versão paga).
5. Desabilite a opção **Initialize this repository with a README**
6. Não selecione nenhum template para **.gitignore** e **license**
7. Clique em **Create repository**

Assim que o repositório for criado, serão apresentadas as instruções para a integração entre seu repositório local e o novo repositório criado.

::: tip Dica
O repositório criado na sua máquina, chamamos de **repositório local**.

O repositório criado no GitHub, chamamos de **repositório remoto**.
:::

## Integração com o npm

Para integrar as informações do repositório do GitHub com o `npm`, edite o arquivo `package.json`.

Adicione as informações da página inicial do seu projeto.

```json
  "homepage": "https://github.com/robertoachar/hello-node#readme",
```

Adicione as informações do repositório.

```json
  "repository": {
    "type": "git",
    "url": "https://github.com/robertoachar/hello-node.git"
  }
```

Adicione o endereço de onde os `bugs` devem ser reportados.

```json
  "bugs": {
    "url": "https://github.com/robertoachar/hello-node/issues"
  }
```

Abaixo você pode conferir o exemplo do arquivo `package.json` completo.

```json
{
  "name": "hello-node",
  "version": "1.0.0",
  "description": "Hello Node",
  "author": "Roberto Achar <robertoachar@gmail.com>",
  "license": "MIT",
  "homepage": "https://github.com/robertoachar/hello-node#readme",
  "keywords": ["node"],
  "main": "src/index.js",
  "files": ["src"],
  "scripts": {
    "lint": "eslint src/**/*.js",
    "start": "node src/index.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/robertoachar/hello-node.git"
  },
  "bugs": {
    "url": "https://github.com/robertoachar/hello-node/issues"
  },
  "dependencies": {},
  "devDependencies": {
    "eslint": "5.12.1",
    "eslint-config-prettier": "4.0.0",
    "eslint-plugin-prettier": "3.0.1",
    "prettier": "1.16.1"
  },
  "private": true
}
```
