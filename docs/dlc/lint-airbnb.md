# Análise Estática + Airbnb

Nessa seção você encontrará as instruções necessárias para integrar as configurações do Airbnb na análise estática do seu projeto.

## Regras do Airbnb

O Airbnb mantém um [Guia de Estilos para JavaScript](https://github.com/airbnb/javascript) muito popular que é utilizado pelos desenvelvedores ao redor do mundo.

## Integração com o ESLint

O Airbnb disponibiliza regras específicas para trabalhar apenas com JavaScript ou React.

Para instalar as regras do Airbnb para JavaScript, abra o Terminal e digite:

```bash
$ npm i -D eslint-config-airbnb-base eslint-plugin-import
```

Esse comando instala as regras do Airbnb como dependência no `package.json`.

```json
"devDependencies": {
  "eslint": "6.4.0",
  "eslint-config-airbnb-base": "14.0.0",
  "eslint-config-prettier": "6.3.0",
  "eslint-plugin-import": "2.18.2",
  "eslint-plugin-prettier": "3.1.0",
  "prettier": "1.18.2",
}
```

Para integrar as regras do Airbnb no ESLint, edite o arquivo `.eslintrc.json`:

```json
{
  "extends": ["airbnb-base", "plugin:prettier/recommended"]
}
```

Para executar o ESLint com as novas regras do Airbnb, abra o terminal e digite:

```bash
$ npm run lint
```

Esse comando executa o ESLint e inicia a análise estática em todos os arquivos com extensão `.js` que estão no diretório `src` e seus subdiretórios. Ele utiliza as regras definidas no arquivo `.eslintrc.json` e ignora os arquivos e diretórios configurados no arquivo `.eslintignore`.
