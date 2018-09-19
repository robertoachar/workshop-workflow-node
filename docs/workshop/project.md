# Configurações do Projeto

Nessa seção você encontrará as instruções necessárias para configurar seu projeto.

## Nome do Projeto

Embora pareça uma tarefa simples, definir o nome do projeto exige um pouco de planejamento.

- Utilize um nome que seja fácil de lembrar
- Tome cuidado para que o nome do seu projeto não infrinja nenhuma marca registrada.
- Evite colisão de nomes, mesmo que o nome do seu projeto esteja sendo usado apenas por outra linguagem/plataforma.
- Evite trocadilhos, pois a tradução incorreta para outras culturas pode gerar um impacto negativo.

Caso você esteja desenvolvendo um pacote que será publicado no `npm`, tenha em mente algumas informações:

- O nome do pacote precisa ser único, a menos que você esteja utilizando escopo.
- O nome precisa ser escrito em letras minúsculas, em um única palavra e sem espaços.
- Hífens e Underscores são permitidos.

## Diretório

O próximo passo é criar o diretório responsável por armazenar todo o código-fonte do projeto. Sugiro criar o nome do diretório com o mesmo nome do projeto.

Para criar o diretório, abra seu Terminal e digite:

```bash
$ mkdir awesome-project
```

Para alterar para o diretório criado, digite:

```bash
$ cd awesome-project
```

## Configurações do npm

O próximo passo é criar os arquivos de configurações do `npm`.

### package.json

O arquivo `package.json` é o responsável pelas configurações do projeto. Esse arquivo deve ser criado na raíz do projeto.

```json
{
  "name": "awesome-project",
  "version": "1.0.0",
  "description": "Awesome project",
  "author": "Roberto Achar <robertoachar@gmail.com>",
  "license": "MIT",
  "homepage": "https://github.com/robertoachar/awesome-project#readme",
  "keywords": ["node"],
  "main": "src/index.js",
  "files": ["src"],
  "scripts": {
    "start": "node src/index.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/robertoachar/awesome-project.git"
  },
  "bugs": {
    "url": "https://github.com/robertoachar/awesome-project/issues"
  },
  "dependencies": {},
  "devDependencies": {},
  "private": true
}
```

#### Detalhamento das configurações

- `name`: nome do pacote.
- `version`: versão do pacote.
- `description`: descrição do pacote.
- `author`: autor do pacote.
- `license`: licença utilizada.
- `homepage`: endereço do site do pacote.
- `keywords`: coleção de palavras-chaves.
- `main`: arquivo principal.
- `files`: arquivos e diretórios que compõe o pacote.
- `scripts`: coleção de scripts disponíveis.
- `repository`: repositório do código-fonte.
- `bugs`: local para encontrar ou reportar bugs.
- `dependencies`: dependências do projeto.
- `devDependencies`: dependências de desenvolvimento do projeto.
- `private`: indica se o pacote pode ou não ser publicado.

::: tip Dica
Para gerar o arquivo `package.json` automaticamente, com as configurações padrões, digite:

```bash
$ npm init -y
```

:::

### .npmrc

O arquivo `.npmrc` é o responsável pelas configurações locais do `npm`. Esse arquivo deve ser criado na raíz do projeto.

```ini
package-lock = false
progress = false
registry = https://registry.npmjs.org
save-exact = true
```

#### Detalhamento das configurações

- `package-lock = false`

Configuração do arquivo `package-lock.json`. Embora seja recomendada a utilização do arquivo `package-lock.json`, eu já tive muitos problemas relacionados a esse arquivo e mantenho essa configuração desabilitada.

- `progress = false`

Configuração da barra de progresso utilizada no momento da instalação de dependências do projeto. Essa configuração está desabilitada por problemas de performance no Windows.

- `registry = https://registry.npmjs.org`

Configuração do endereço do repositório que deverá ser utilizado para instalar as dependências. O endereço do repositório está explicitamente declarado.

- `save-exact = true`

Instruir o `npm` a instalar a versão exata do pacote que foi solicitado, ao invés de utilizar o "range" padrão do `npm`.
