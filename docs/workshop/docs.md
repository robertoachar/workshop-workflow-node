# Documentação

Nessa seção você encontrará as instruções necessárias para construir a documentação do seu projeto.

## README

O **README** é o principal documento do seu projeto. Esse arquivo é responsável por apresentar todas as informações necessárias para que outras pessoas possam entender e utilizar seu projeto.

Esse arquivo utiliza a linguagem de marcação [Markdown](https://daringfireball.net/projects/markdown/), linguagem universal utilizada para documentar software atualmente.

O README deve apresentar as seguintes informações:

- Nome do projeto
- Descrição resumida
- Descrição detalhada
- Instruções para instalação
- Instruções de utilização
- Configurações do ambiente de desenvolvimento
- Autor
- Licença

O arquivo `README.md` deve ser criado na raíz do projeto.

```markdown
# Nome do Projeto

> Descrição resumida do projeto.

Descrição detalhada do projeto.

## Instruções para instalação

## Instruções de utilização

## Configurações do ambiente de desenvolvimento

## Autor

## Licença
```

## CHANGELOG

**CHANGELOG** é o arquivo responsável por relacionar as alterações que foram feitas ao código atual. Ele também é escrito em [Markdown](https://daringfireball.net/projects/markdown/).

O arquivo `CHANGELOG.md` deve ser criado na raíz do projeto.

```markdown
# Changelog

## v1.0.0

- Initial release
```

## LICENSE

**LICENSE** é o arquivo responsável por apresentar qual é a licença de software que é utilizada no projeto. A licença mais comum utilizada em projetos _open source_ é a `MIT`.

O arquivo `LICENSE` deve ser criado na raíz do projeto.

```text
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

::: tip Dica
Substitua as chaves [year] e [fullname] pelo ano e seu nome completo, respectivamente. 😉
:::

Para mais opções de licença, acesse [Choose an open source license](https://choosealicense.com/).
