module.exports = {
    title: 'Git Notes',
    description: 'Git学习笔记',
    base: '/git-notes/',
    evergreen: true,
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` },],
    ],
    themeConfig: {
        logo: '/favicon.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '入门', link: '/guide/' },
            { text: 'Github', link: 'https://github.com/ShoorDay/git-notes'},
        ],
        sidebarDepth: 2,
        collapsable: true,
        sidebar: {
            '/guide/': [
                '',
                '配置',
                '仓库',
                '远程',
                '分支',
                '合并',
                '标签',
                '日志',
                '参考',
            ]
        }
    }
}