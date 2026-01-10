export const metadata = {
    title: "Online Editor",
    description: "Write, compile, and run YaarScript code directly in your browser with the WebAssembly playground.",
    keywords: [
        "YaarScript online editor",
        "YaarScript playground",
        "Urdu coding playground",
        "browser WebAssembly compiler",
        "write YaarScript online",
    ],
    alternates: {
        canonical: "/editor",
    },
    openGraph: {
        title: "YaarScript Online Editor",
        description: "Write, compile, and run YaarScript code directly in your browser.",
        url: "/editor",
        siteName: "YaarScript",
        images: [{ url: "/yaar-script.webp", width: 1200, height: 630, alt: "YaarScript online editor" }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "YaarScript Online Editor",
        description: "Write, compile, and run YaarScript code directly in your browser.",
        images: ["/yaar-script.webp"],
    },
};

const editorJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YaarScript Online Editor",
    "url": "https://yaarscript.netlify.app/editor",
    "description": "Write, compile, and run YaarScript code directly in your browser with WebAssembly.",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript and WebAssembly support",
    "isPartOf": { "@type": "WebSite", "name": "YaarScript", "url": "https://yaarscript.netlify.app" },
};

export default function EditorLayout({ children }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(editorJsonLd) }} />
            {children}
        </>
    );
}