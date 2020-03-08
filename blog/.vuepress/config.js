module.exports = {
    base: '/',
    title: 'segersian.com',
    description: 'About JavaScript, Architecture, and Cloud.',
    markdown: {
        lineNumbers: true
    },
    theme: '@vuepress/theme-blog',
    themeConfig: {
        logo: '/logo.png',
        dateFormat: 'YYYY-MM-DD',
        sitemap: {
            hostname: 'https://blog.segersian.com'
        },
        smoothScroll: true,
        footer: {
            copyright: [{text: 'Made with ❤️ by Segers Ian', link: 'https://www.segersian.com'}],
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/SegersIan',
                },
                {
                    type: 'twitter',
                    link: 'https://twitter.com/SegersIan',
                },
                {
                    type: 'web',
                    link: 'https://www.SegersIan.com',
                },
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/segersian/',
                },
                {
                    type: 'mail',
                    link: 'mailto:ask@segersian.com'
                }
            ],
        },
        nav: [
            {text: 'Posts', link: '/'},
            {text: 'Tags', link: '/tag/'},
            {text: 'SegersIan.com', link: 'https://www.segersian.com', target: '_blank', rel: ''},
        ],
    },
    plugins: [
        ['@vuepress/google-analytics', {'ga': 'UA-76745643-3'}],
        ['@vuepress/medium-zoom'],
        ['@vuepress/last-updated'],
        ['@vuepress/blog', {
            directories: [
                {
                    id: 'post',
                    dirname: '_posts',
                    path: '/',
                },
            ],
            frontmatters: [
                {
                    id: 'tag',
                    keys: ['tags'],
                    path: '/tag/'
                },
            ]
        }],
    ]
};