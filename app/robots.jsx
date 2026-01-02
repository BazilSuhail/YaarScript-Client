// app/robots.js
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/', // Allow crawling the whole site
                disallow: ['/api/'], // But don't index internal API routes (if any)
            },
        ],
        sitemap: 'https://yaarscript.netlify.app/sitemap.xml',
    }
}