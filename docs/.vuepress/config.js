const head = require('./head');

module.exports = {
  title: 'Workflow Node.js',
  description: 'Treinamento: Workflow para projetos em Node.js',
  dest: './build',
  ga: 'UA-91775148-4',
  head,
  themeConfig: {
    sidebar: [
      {
        title: 'Treinamento',
        collapsable: false,
        children: [
          '/workshop/intro',
          '/workshop/environment',
          '/workshop/project',
          '/workshop/coding-style',
          '/workshop/source-code',
          '/workshop/lint',
          '/workshop/code-formatting',
          '/workshop/docs',
          '/workshop/github',
          '/workshop/git',
          '/workshop/finish',
          '/workshop/appendix'
        ]
      },
      {
        title: 'DLC',
        collapsable: false,
        children: ['/dlc/lint-airbnb']
      }
    ],
    serviceWorker: true,
    serviceWorker: {
      updatePopup: {
        message: 'Novo conteúdo disponível.',
        buttonText: 'Atualizar'
      }
    }
  }
};
