const footerLinks = {
    Texts: ["Vedas", "Upanishads", "Bhagavad Gita", "Brahma Sutras"],
    Traditions: [
        "Advaita Vedanta",
        "Classical Yoga",
        "Nyaya & Vaisheshika",
        "Samkhya Darshana",
    ],
    Research: [
        "Critical Editions",
        "Manuscript Scans",
        "Semantic Ontologies",
        "Concordance Lexicon",
    ],
    Infrastructure: [
        "Open Knowledge API",
        "IAST Transliteration Tool",
        "Preservation Guidelines",
        "Field Archives",
    ],
} as const;

export default function Footer() {
    return (
        <footer className="w-full bg-[#f5f3ef] dark:bg-[#111]">
            {/* Main footer body */}
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_auto] lg:gap-20">
                    {/* Brand column */}
                    <div className="flex flex-col gap-6 lg:max-w-xs">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <RitamMark />
                            <span className="font-serif text-xl tracking-tight text-neutral-900 dark:text-neutral-100">
                                Ritam
                            </span>
                        </div>

                        {/* Tagline */}
                        <p className="font-serif text-2xl italic leading-[1.35] tracking-tight text-[#8a641c] sm:text-3xl dark:text-[#c8a24a]">
                            Ancient knowledge, beautifully preserved for the
                            modern world.
                        </p>

                        {/* Description */}
                        <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                            A contemplative scholarly repository uniting primary
                            canonical manuscripts, philological glosses, and
                            sacred knowledge graphs.
                        </p>
                    </div>

                    {/* Nav columns */}
                    <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4 sm:gap-x-12 lg:gap-x-16">
                        {(
                            Object.entries(footerLinks) as [
                                string,
                                readonly string[],
                            ][]
                        ).map(([category, links]) => (
                            <div key={category} className="flex flex-col gap-4">
                                <p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-900 dark:text-neutral-100">
                                    {category.toUpperCase()}
                                </p>
                                <ul className="flex flex-col gap-3">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-sm text-neutral-500 transition-colors hover:text-[#8a641c] dark:text-neutral-400 dark:hover:text-[#c8a24a]"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-14 rounded-lg border border-neutral-200/80 bg-white/60 px-6 py-5 dark:border-neutral-800 dark:bg-neutral-900/50">
                    <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                            Scholarly &amp; Traditional Disclaimer:{" "}
                        </span>
                        Ritam curates liturgical texts, traditional
                        commentaries, and modern critical philological research
                        side-by-side. Traditional theological accounts and
                        recited revelations are presented in their authentic
                        doctrinal context alongside distinct peer-reviewed
                        historical, epigraphical, and linguistic scholarship.
                    </p>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-neutral-200/80 dark:border-neutral-800">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-10">
                    {/* Sanskrit mantra */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="font-serif text-base text-[#8a641c] dark:text-[#c8a24a]">
                            ऋतं वदिष्यामि सत्यं वदिष्यामि
                        </span>
                        <span className="text-neutral-300 dark:text-neutral-700">
                            •
                        </span>
                        <span className="text-sm italic text-neutral-400 dark:text-neutral-500">
                            Ṛtaṃ vadiṣyāmi satyaṃ vadiṣyāmi
                        </span>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-wrap items-center gap-5 text-sm text-neutral-400 dark:text-neutral-500">
                        <span>
                            © 2025 Ritam Foundation. All rights reserved.
                        </span>
                        <a
                            href="#"
                            className="transition-colors hover:text-[#8a641c] dark:hover:text-[#c8a24a]"
                        >
                            Open Cultural Heritage
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function RitamMark() {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <rect
                x="1"
                y="1"
                width="26"
                height="26"
                rx="5"
                stroke="#8a641c"
                strokeWidth="1.2"
            />
            <path
                d="M14 5 L14 23 M5 14 L23 14"
                stroke="#8a641c"
                strokeWidth="1.2"
                strokeLinecap="round"
            />
            <path
                d="M8.5 8.5 L19.5 19.5 M19.5 8.5 L8.5 19.5"
                stroke="#8a641c"
                strokeWidth="0.9"
                strokeLinecap="round"
                opacity="0.5"
            />
            <circle cx="14" cy="14" r="2.5" fill="#8a641c" opacity="0.8" />
        </svg>
    );
}
