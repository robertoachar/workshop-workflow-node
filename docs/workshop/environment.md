# Ambiente de Desenvolvimento

Nessa seção você encontrará as instruções necessárias para preparar seu ambiente de desenvolvimento.

## Editor de Código

Você pode utilizar qualquer editor de códigos para desenvolver seus projetos em Node.js. Pessoalmente, eu indico a utilização do [VS Code](https://code.visualstudio.com/) da Microsoft. O VS Code é um editor de códigos gratuito, de código-fonte aberto e tem suporte aos 03 principais sistemas operacionais atualmente: **Linux**, **macOS** e **Windows**. Além disso ele disponibiliza um Terminal integrado para melhorar a experiência do desenvolvedor.

Para instalar o VS Code, acesse a [página de downloads](https://code.visualstudio.com/#alt-downloads) e escolha a versão correta para o seu sistema operacional.

::: tip Versões do VS Code
**Stable** é a versão estável. **Insiders** é a versão com funcionalidades experimentais.

**Obs.:** Na dúvida, utilize a versão Stable.
:::

## Node.js

**Node.js** é um ambiente de execução de JavaScript que roda sob o V8 do Chrome.

Para instalar o Node.js, acesse o site oficial do [Node.js](https://nodejs.org/) e siga as instruções para instalar a versão correta para o seu sistema operacional. O Node.js está disponível para os 03 sistemas operacionais mais utilizados atualmente: **Linux**, **macOS** e **Windows**.

::: tip Versões do Node.js
**LTS** é a versão estável. **Current** é a versão com funcionalidades experimentais.

**Obs.:** Na dúvida, utilize a versão LTS.
:::

Para validar a instalação do Node.js, abra o Terminal e digite:

```bash
$ node -v
v10.10.0
```

Se a instalação estiver correta, o comando irá apresentar a versão instalada no seu sistema operacional. No meu caso, a versão é a **v10.10.0**.

## npm

**npm** é o acrônimo para **Node Package Manager**, ou Gerenciador de Pacotes do Node.js. A instalação padrão do Node.js também instala o [npm](https://www.npmjs.com/).

Para validar a instalação do npm, abra o Terminal e digite:

```bash
$ npm -v
6.4.1
```

Se a instalação estiver correta, o comando irá apresentar a versão instalada no seu sistema operacional. No meu caso, a versão é a **v6.4.1**.

::: warning Versão do npm
O instalador do Node.js nem sempre instala a última versão do npm.
:::

Para atualizar o npm para a versão mais recente, abra o Terminal e digite:

```bash
$ npm i -g npm
```

Para validar a atualização, digite:

```bash
$ npm -v
```
