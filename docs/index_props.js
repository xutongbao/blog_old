import projectConfig from '/blog/pagic.config.js';
export default {
    'prev': undefined,
    'next': {
        "text": "起步",
        "link": "src/home.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "首页",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="%E9%A6%96%E9%A1%B5">首页<a class="anchor" href="#%E9%A6%96%E9%A1%B5">§</a></h1>'
        } }),
    'head': React.createElement("link", { href: "/blog/favicon.ico", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/blog/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'contentTitle': React.createElement("h1", { key: "0", id: "%E9%A6%96%E9%A1%B5" },
        "\u9996\u9875",
        React.createElement("a", { className: "anchor", href: "#%E9%A6%96%E9%A1%B5" }, "\u00A7")),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E9%A6%96%E9%A1%B5" }, "\u9996\u9875")))),
    'author': "xutongbao",
    'contributors': [
        "xutongbao"
    ],
    'date': "2021-09-10T08:15:51.000Z",
    'updated': null,
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
