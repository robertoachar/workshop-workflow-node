# Projeto

Nessa seção você encontrará as instruções necessárias para iniciar e configurar seu projeto.

## Nome

Embora pareça uma tarefa simples, definir o nome do projeto exige um pouco de planejamento.

- Utilize um nome que seja fácil de lembrar.
- Tome cuidado para que o nome do seu projeto não infrinja nenhuma marca registrada.
- Evite colisão de nomes, mesmo que o nome do seu projeto esteja sendo usado apenas por outra linguagem/plataforma.
- Evite trocadilhos, pois a tradução incorreta para outras culturas pode gerar um impacto negativo.

Caso você esteja desenvolvendo um pacote que será publicado no `npm`, tenha em mente algumas informações:

- O nome do pacote precisa ser único, a menos que você esteja utilizando escopo.
- O nome precisa ser escrito em letras minúsculas, em um única palavra e sem espaços.
- Hífens e Underscores são permitidos.

## Diretório

O próximo passo é criar o diretório responsável por armazenar todo o código-fonte do projeto. Sugiro criar o nome do diretório com o mesmo nome do projeto.

Para criar o diretório, abra o Terminal e digite:

```bash
$ mkdir hello-node
```

Para alterar para o diretório criado, digite:

```bash
$ cd hello-node
```

## Iniciando um novo projeto

O próximo passo é criar o arquivo `package.json`, responsável pelas configurações do projeto. Esse arquivo deve ser criado na raíz do projeto.

Para iniciar um novo projeto, abra o Terminal e digite:

```bash
$ npm init -y
```

Esse comando criará o arquivo `package.json` com as informações mais comuns encontradas nos projetos.

```json
{
  "name": "hello-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Roberto Achar <robertoachar@gmail.com>",
  "license": "MIT"
}
```

::: tip Dica
A ordem dessas informações não importa. 😉
:::

É muito importante seguir padrões e eu gosto de manter as informações desse arquivo em uma ordem específica para todos os meus projetos. Isso facilita muito quando eu lido com muitos projetos simultaneamente.

O próximo passo é fazer algumas alterações nesse arquivo: adicionar uma descrição, adicionar palavras-chaves e remover o script `test` (fora do escopo desse treinamento).

```json
{
  "name": "hello-node",
  "version": "1.0.0",
  "description": "Hello Node",
  "author": "Roberto Achar <robertoachar@gmail.com>",
  "license": "MIT",
  "keywords": ["node"],
  "main": "index.js",
  "scripts": {}
}
```

### Resumo das configurações

- `name`: nome do pacote.
- `version`: versão do pacote.
- `description`: descrição do pacote.
- `author`: autor do pacote.
- `license`: licença utilizada.
- `keywords`: coleção de palavras-chaves.
- `main`: arquivo principal.
- `scripts`: coleção de scripts disponíveis.

## Configurando o npm

O próximo passo é criar os arquivos de configurações do `npm`. O arquivo `.npmrc` é o responsável pelas configurações locais do `npm`. Esse arquivo deve ser criado na raíz do projeto.

```ini
package-lock = false
progress = false
registry = https://registry.npmjs.org
save-exact = true
```

### Resumo das configurações

- `package-lock = false`

Configuração do arquivo `package-lock.json`. Embora seja recomendada a utilização do arquivo `package-lock.json`, eu já tive muitos problemas relacionados a esse arquivo e mantenho essa configuração desabilitada.

- `progress = false`

Configuração da barra de progresso utilizada no momento da instalação de dependências do projeto. Essa configuração está desabilitada por problemas de performance no Windows.

- `registry = https://registry.npmjs.org`

Configuração do endereço do repositório que deverá ser utilizado para instalar as dependências. O endereço do repositório está explicitamente declarado.

- `save-exact = true`

Instruir o `npm` a instalar a versão exata do pacote que foi solicitado, ao invés de utilizar o "range" padrão do `npm`.
