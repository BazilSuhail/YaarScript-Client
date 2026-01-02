"use client"
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function MetadataHandler() {
  const pathname = usePathname();

  const metadata = {
    '/': {
      title: 'YaarScript – The Urdu-Based Programming Language',
      description: 'A modern, professional programming language that brings the warmth of Urdu to software development. Built with Rust and compiled to WebAssembly.',
    },
    '/docs': {
      title: 'Documentation | YaarScript',
      description: 'Learn how to code in YaarScript. Explore the syntax, keywords, and unique features of the world\'s first Urdu-centric programming language.',
    },
    '/editor': {
      title: 'YaarScript Playground – Write & Run Urdu Code',
      description: 'Experience YaarScript in your browser. Use our online editor to write, compile, and execute Urdu-based code instantly using WebAssembly.',
    },
    // Fallback for sub-pages or other links
    'default': {
      title: 'YaarScript – High-Performance Urdu Coding',
      description: 'Bridging cultural heritage with cutting-edge technology through a Rust-powered programming language.',
    }
  };

  const currentMeta = metadata[pathname] || metadata['default'];

  useEffect(() => {
    // Update Title
    document.title = currentMeta.title;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentMeta.description);
    } else {
      // Create meta description if it doesn't exist
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = currentMeta.description;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, [pathname, currentMeta]);

  return null;
}