# Código-fonte

Nessa seção você encontrará as instruções necessárias para iniciar o desenvolvimento do seu projeto.

## Diretório src

`src` é o diretório principal e serve para armazenar o código-fonte do seu projeto. Esse diretório deve ser criado na raíz do projeto.

Dentro do diretório `src`, crie o arquivo `index.js`, responsável pelo ponto de entrada do seu projeto.

```javascript
console.log('Hello Node!');
```

Para executar o seu projeto, abra o Terminal e digite:

```bash
$ node src/index.js
Hello Node!
```

Esse comando imprime `Hello Node!` na saída do Terminal.

## Integração com o npm

Para integrar o código-fonte com o `npm`, edite o arquivo `package.json` e adicione as informações necessárias.

Você deve informar qual é o arquivo principal, e quais arquivos e diretórios fazem parte do seu projeto.

```json
  "main": "src/index.js",
  "files": ["src"]
```

### Resumo das configurações

- `"main": "src/index.js"`

Essa configuração informa ao `npm` que o arquivo principal do projeto é `src/index.js`.

- `"files": ["src"]`

Essa configuração informa ao `npm` que o diretório `src` faz parte do projeto.

## Executando através do npm

Você também pode executar seu projeto através dos scripts do `npm`. Para isso, adicione o script `start` no arquivo `package.json`.

```json
  "scripts": {
    "start": "node src/index.js"
  },
```

Para executar o seu projeto através do `npm`, abra o Terminal e digite:

```bash
$ npm start
```

Esse comando executa o script `start` do `npm`, o script `start` executa o comando `node src/index.js` e imprime `Hello Node!` na saída do Terminal.
