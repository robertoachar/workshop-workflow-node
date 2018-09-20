const head = require('./head');

module.exports = {
  title: 'Workflow Node.js',
  description: 'Treinamento: Workflow para projetos em Node.js',
  dest: './build',
  serviceWorker: true,
  head,
  themeConfig: {
    sidebar: {
      '/workshop/': [
        {
          title: 'Conteúdo',
          collapsable: true,
          children: [
            '',
            'environment',
            'coding-style',
            'project',
            'source-code',
            'lint',
            'code-formatting',
            'docs',
            'github',
            'git',
            'finish',
            'appendix'
          ]
        }
      ]
    },
    serviceWorker: {
      updatePopup: {
        message: 'Novo conteúdo disponível.',
        buttonText: 'Atualizar'
      }
    }
  }
};
