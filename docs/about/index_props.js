import projectConfig from '/blog/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "about/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about/index.html",
    'title': "关于",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="%E5%85%B3%E4%BA%8E">关于<a class="anchor" href="#%E5%85%B3%E4%BA%8E">§</a></h1>'
        } }),
    'head': React.createElement("link", { href: "/blog/favicon.ico", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/blog/index.js", type: "module" })),
    'footer': React.createElement("footer", null),
    'contentTitle': React.createElement("h1", { key: "0", id: "%E5%85%B3%E4%BA%8E" },
        "\u5173\u4E8E",
        React.createElement("a", { className: "anchor", href: "#%E5%85%B3%E4%BA%8E" }, "\u00A7")),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%85%B3%E4%BA%8E" }, "\u5173\u4E8E")))),
    'author': undefined,
    'contributors': [],
    'date': "2021-09-10T08:14:27.853Z",
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
