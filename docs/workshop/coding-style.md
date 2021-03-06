# Estilo de Código

Nessa seção você encontrará as instruções necessárias para configurar o estilo de código que será utilizado em todo o ciclo do projeto.

## EditorConfig

Desenvolvedores optam por utilizar diferentes editores de código e cada um desses editores possui suas próprias configurações para definir os padrões dos arquivos.

**EditorConfig** auxilia os desenvolvedores a definir e manter estilos de codificação consistentes entre diferentes editores.

Para mais informações, acesse o site oficial do [EditorConfig](https://editorconfig.org/).

## Integração com o VS Code

O EditorConfig disponibiliza uma extensão para a maioria dos editores de código. Para integrar o EditorConfig no VS Code, acesse a página da extensão [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e clique em `Install`.

## Configurando o EditorConfig

O arquivo `.editorconfig` é responsável pelas configurações do EditorConfig. Esse arquivo deve ser criado na raíz do projeto.

```properties
# http://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

### Resumo das configurações

- `# http://editorconfig.org`

Comentário.

- `root = true`

Essa instrução é obrigatória e deve ser inserida no topo do arquivo.

- `[*]`

As regras serão aplicadas a qualquer tipo de arquivo.

- `charset = utf-8`

Define o encode.

- `end_of_line = lf`

Define o caractere de quebra de linha como LF (Line Feed).

- `indent_size = 2` e `indent_style = space`

Quantidade de espaços que deve ser inserido para identação.

- `insert_final_newline = true`

Insere uma quebra de linha no final do arquivo.

- `trim_trailing_whitespace = true`

Remove os espaços em branco que precedem uma quebra de linha.

- `[*.md]`

As regras serão aplicadas somente em arquivos com extensão `.md` (Markdown).

- `max_line_length = off`

Desabilita o tamanho máximo de uma linha.

- `trim_trailing_whitespace = false`

Desabilita a remoção dos espaços em branco que precedem uma quebra de linha.
