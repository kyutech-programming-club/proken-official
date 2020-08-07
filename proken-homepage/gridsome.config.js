// This is where project configuration and plugin options are located.


  // Changes here require a server restart.
  // To restart press CTRL + C in terminal and run `gridsome develop`

  module.exports = {
    siteName: 'Gridsome',
    transformers: {
      remark: {
        externalLinksTarget: '_blank',
        externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        anchorClassName: 'icon icon-link',
        plugins: [
          // ...global plugins
        ]
      }
    },
    plugins: [
      {    
        use: '@gridsome/source-filesystem',
        options: {
          path: 'blog/posts/*.md',
          typeName: 'Post',
          remark: {
            plugins: [
              // ...local plugins
            ]
          }
        }
      }
    ]
  }
