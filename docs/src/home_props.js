import projectConfig from '/blog/pagic.config.js';
export default {
    'prev': {
        "text": "首页",
        "link": "index.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "src/home.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "src/home.html",
    'title': "起步",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="%E8%B5%B7%E6%AD%A5">起步<a class="anchor" href="#%E8%B5%B7%E6%AD%A5">§</a></h1>'
        } }),
    'head': React.createElement("link", { href: "/blog/favicon.ico", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/blog/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'contentTitle': React.createElement("h1", { key: "0", id: "%E8%B5%B7%E6%AD%A5" },
        "\u8D77\u6B65",
        React.createElement("a", { className: "anchor", href: "#%E8%B5%B7%E6%AD%A5" }, "\u00A7")),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%B5%B7%E6%AD%A5" }, "\u8D77\u6B65")))),
    'author': "xutongbao",
    'contributors': [
        "xutongbao"
    ],
    'date': "2021-09-10T03:31:50.000Z",
    'updated': "2021-09-10T08:15:51.000Z",
    'excerpt': "",
    'cover': undefined,
    'sidebar': [
        {
            "text": "首页",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "text": "起步",
            "link": "src/home.html",
            "pagePath": "src/home.md"
        }
    ]
};
