export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5fd14c8c8df3b7008a0d4fdc',
                  title: 'Sanity Studio',
                  name: 'struvo-app-studio-betmyd4a',
                  apiId: '06bc5d1e-81f2-4334-8207-c22313a1ae9c'
                },
                {
                  buildHookId: '5fd14c8ca7b7c4015a5c7f0b',
                  title: 'Landing pages Website',
                  name: 'struvo-app-web',
                  apiId: '8de421ab-78a7-4aa0-9dca-5aec736f07a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Naytron/struvo-app',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://struvo-app-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
