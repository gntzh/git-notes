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
                '流程',
                '配置',
                '仓库',
                '远程',
                '分支操作',
                '合并',
                '变基',
                '标签',
                '日志',
                '分支策略',
                '参考',
            ]
        }
    }
}