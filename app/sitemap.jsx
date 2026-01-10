export default function sitemap() {
    const baseUrl = 'https://yaarscript.netlify.app';
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/docs`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/editor`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];
}