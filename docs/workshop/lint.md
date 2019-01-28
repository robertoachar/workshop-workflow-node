# Análise Estática

Nessa seção você encontrará as instruções necessárias para configurar a análise estática do seu projeto.

## Lint

**Lint** é o termo utilizado para análise estática de código e seu objetivo é encontrar problemas no código antes mesmo dele ser executado. É uma das etapas mais importantes da construção de um software.

## ESLint

**ESLint** é uma ferramenta de _linting_ desenvolvida especificamente para JavaScript. Possui uma grande quantidade de regras pré-definidas e é completamente customizável através de _plugins_.

Para instalar o ESLint no seu projeto, abra o Terminal e digite:

```bash
$ npm i -D eslint
```

Esse comando instala o ESLint como dependência de desenvolvimento no arquivo `package.json`.

```json
  "devDependencies": {
    "eslint": "5.12.1"
  }
```

Para mais informações, acesse o site oficial do [ESLint](https://eslint.org/).

## Integração com o VS Code

O ESLint disponibiliza uma extensão para o VS Code. Para instalar a extensão, acesse a página da extensão [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e clique em `Install`.

## Configurando o ESLint

As configurações do ESLint são definidas em dois arquivos: `.eslintrc.json` e `.eslintignore`.

### .eslintrc.json

O arquivo `.eslintrc.json` define as regras que serão utilizadas para realizar a análise estática do código. Esse arquivo deve ser criado na raíz do projeto.

```json
{
  "extends": ["eslint:recommended"]
}
```

### Resumo das configurações

- `"extends": ["eslint:recommended"]`

Configura o ESLint para utilizar as regras recomendadas para os problemas mais comuns.

### .eslintignore

O arquivo `.eslintignore` é o responsável por informar ao ESLint quais arquivos ou diretórios devem ser ignorados na análise estática. Esse arquivo deve ser criado na raíz do projeto.

```properties
node_modules
```

### Resumo das configurações

- `node_modules`

Configura o ESLint para ignorar a análise estática no diretório `node_modules`.

## Integração com o npm

Para integrar o ESLint no `npm`, edite o arquivo `package.json`.

```json
  "scripts": {
    "lint": "eslint src/**/*.js",
    "start": "node src/index.js"
  }
```

Para executar o ESLint, abra o Terminal e digite:

```bash
$ npm run lint
```

Esse comando executa o ESLint e inicia a análise estática em todos os arquivos com extensão `.js` que estão no diretório `src` e seus subdiretórios. Ele utiliza as regras definidas no arquivo `.eslintrc.json` e ignora os arquivos e diretórios configurados no arquivo `.eslintignore`.
