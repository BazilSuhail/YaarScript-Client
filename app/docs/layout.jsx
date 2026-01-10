export const metadata = {
    title: "Documentation",
    description: "Learn YaarScript syntax, Urdu-slang keywords, compiler features, and language fundamentals.",
    keywords: [
        "YaarScript documentation",
        "YaarScript syntax",
        "Urdu programming keywords",
        "YaarScript compiler guide",
        "YaarScript tutorial",
    ],
    alternates: {
        canonical: "/docs",
    },
    openGraph: {
        title: "YaarScript Documentation",
        description: "Learn YaarScript syntax, Urdu-slang keywords, compiler features, and language fundamentals.",
        url: "/docs",
        siteName: "YaarScript",
        images: [{ url: "/yaar-script.webp", width: 1200, height: 630, alt: "YaarScript documentation" }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "YaarScript Documentation",
        description: "Learn YaarScript syntax, Urdu-slang keywords, compiler features, and language fundamentals.",
        images: ["/yaar-script.webp"],
    },
};

const docsJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "YaarScript Documentation",
    "description": "Learn YaarScript syntax, Urdu-slang keywords, compiler features, and language fundamentals.",
    "url": "https://yaarscript.netlify.app/docs",
    "author": { "@type": "Person", "name": "Bazil Suhail" },
    "publisher": { "@type": "Organization", "name": "YaarScript" },
    "about": { "@type": "SoftwareApplication", "name": "YaarScript" },
};

export default function DocsLayout({ children }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(docsJsonLd) }} />
            {children}
        </>
    );
}