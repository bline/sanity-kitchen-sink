export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6243340c29733f2865df3f1d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7q3upsi1',
                  apiId: '983f8db8-2ea9-4e8e-a30e-bf6280911cc2'
                },
                {
                  buildHookId: '6243340dc921a93128fea501',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9aq664yi',
                  apiId: '34924b0d-6cbd-4972-8ba6-492f0207b6df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bline/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9aq664yi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
