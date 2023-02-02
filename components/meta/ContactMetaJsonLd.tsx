{/* JSON-LD */}

function addHomeMetaJsonLd() {
    return {
        __html: `{
        '@context': 'https://schema.org/',
        '@type': 'Person',
        'name': 'Contact Rev. Dave Thompson',
        'image': [
            'URL',
        ],
        'description': 'Contact Page for Rev. Dave Thompson',
        }
    `,
    };
}