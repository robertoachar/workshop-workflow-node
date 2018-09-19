module.exports = {
  title: 'Workflow Node.js',
  description: 'Treinamento: Workflow para projetos em Node.js',
  dest: './build',
  themeConfig: {
    sidebar: {
      '/workshop/': [
        {
          title: 'Conteúdo',
          collapsable: true,
          children: ['', 'environment', 'coding-style', 'github', 'project']
        }
      ]
    }
  }
};
