# Código-fonte

Nessa seção você encontrará as instruções necessárias para iniciar o desenvolvimento do seu projeto.

## Diretório src

`src` é o diretório principal e serve para armazenar o código-fonte do seu projeto. Esse diretório deve ser criado na raíz do projeto.

Dentro do diretório `src`, crie o arquivo `index.js`. Esse arquivo é o responsável pelo ponto de entrada do seu projeto.

```javascript
console.log('Hello World!');
```

Para executar o seu projeto, abra seu Terminal e digite:

```bash
$ node src/index.js
Hello World!
```

Esse comando imprime `Hello World!` na saída do seu Terminal.

## Integração com o npm

Você também pode executar seu projeto através dos scripts do `npm`. O arquivo `package.json` já está configurado para executar o seu projeto através do script `start`.

```json
  "scripts": {
    "lint": "eslint src/**/*.js",
    "start": "node src/index.js"
  },
```

Para executar o seu projeto através do `npm`, abra seu Terminal e digite:

```bash
$ npm start
```

Esse comando executa o script `start` do `npm`. O script `start` executa o comando `node src/index.js` e imprime `Hello World!` na saída do seu Terminal.
