# Formatação de código

Nessa seção você encontrará as instruções necessárias para configurar a formatação automática de código que será utilizado em todo o ciclo do projeto.

## Prettier

**Prettier** é um formatador de códigos com suporte a muitas linguagens e possui integração com a maioria dos editores de código. Seu objetivo é fazer com que o código seja formatado de maneira sólida e consistente.

## Integração com o VS Code

O Prettier disponibiliza uma extensão para a maioria dos editores de código. Para instalar a extensão, acesse a página da extensão do [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) e clique em `Install`.

Para ativar a formatação automática ao salvar um arquivo, edite as configurações do VS Code em **File** > **Preferences** > **Settings**:

```json
{
  "editor.formatOnSave": true
}
```

Essa opção ativa a formatação automática do código sempre que o arquivo for salvo.

## Configurando o Prettier

As regras do Prettier podem ser configuradas através do arquivo `.prettierrc`. Esse arquivo deve ser criado na raíz do projeto.

```json
{
  "singleQuote": true
}
```

### Resumo das configurações

- `"singleQuote": true`

Configura o Prettier para utilizar aspas simples (**'**) ao invés de aspas duplas (**"**).

## Integração com o ESLint

O Prettier pode ser integrado ao ESLint para sobrescrever as regras definidas pelo ESLint.

Para instalar o Prettier no seu projeto, abra o Terminal e digite:

```bash
$ npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

Esse comando instala o Prettier, suas configurações e plugin como dependências de desenvolvimento no arquivo `package.json`.

```json
  "devDependencies": {
    "eslint": "5.6.0",
    "eslint-config-prettier": "3.0.1",
    "eslint-plugin-prettier": "2.6.2",
    "prettier": "1.14.2"
  }
```

Para integrar o Prettier no ESLint, edite o arquivo `.eslintrc.json`:

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```

Para executar o ESLint com as novas regras do Prettier, abra o terminal e digite:

```bash
$ npm run lint
```

Esse comando executa o ESLint e inicia a análise estática em todos os arquivos com extensão `.js` que estão no diretório `src` e seus subdiretórios. Ele utiliza as regras definidas no arquivo `.eslintrc.json` e ignora os arquivos e diretórios configurados no arquivo `.eslintignore`.
