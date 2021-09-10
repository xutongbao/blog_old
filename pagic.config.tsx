import { React } from 'https://deno.land/x/pagic@v1.4.0/mod.ts'

export default {
  srcDir: '.',
  outDir: 'docs',
  root: '/blog/',
  title: '徐同保的博客',
  description: 'web前端,react,vue,javascript,博客',
  head: <link rel="icon" type="image/png" href="/blog/favicon.ico" />,
  theme: 'docs', //'default' | 'docs' | 'blog
  plugins: ['sidebar', 'prev_next', 'ga', 'md'],
  nav: [
    {
      text: '首页',
      link: '/blog/index.html',
    },
    {
      text: '加入微信群',
      popover: (
        <>
          <img src="/static/images/m-wechat.jpg" width="256" />
        </>
      ),
    },
  ],
  github: 'https://github.com/xutongbao/blog',
  sidebar: {
    '/': [
      {
        text: '首页',
        link: 'README.md',
      },
      {
        text: '起步',
        link: 'src/home.md',
      },
    ]
  },
  md: {
    anchorLevel: [1, 2, 3, 4, 5, 6],
    tocEnabled: true,
    tocLevel: [1, 2, 3, 4],
  },
  tools: {
    editOnGitHub: true,
    backToTop: true,
  },
  footer: <footer></footer>,
}
