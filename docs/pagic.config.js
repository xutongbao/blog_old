export default {
    srcDir: '.',
    outDir: 'docs',
    root: '/blog/',
    title: '徐同保的博客',
    description: 'web前端,react,vue,javascript,博客',
    head: React.createElement("link", { rel: "icon", type: "image/png", href: "/blog/favicon.ico" }),
    theme: 'docs',
    plugins: ['sidebar', 'prev_next', 'ga', 'md'],
    nav: [
        {
            text: '首页',
            link: '/blog/index.html',
        },
        {
            text: '加入微信群',
            popover: (React.createElement(React.Fragment, null,
                React.createElement("img", { src: "/static/images/m-wechat.jpg", width: "256" }))),
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
    footer: React.createElement("footer", null),
};
