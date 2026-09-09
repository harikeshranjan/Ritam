import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Bookmark,
    BookOpen,
    BookOpenCheck,
    Brain,
    Building2,
    MoveRight,
    Music,
    PartyPopper,
    Sparkles,
    UserRound,
    Network,
    Scale,
    CircleCheck,
} from "lucide-react";

const libraryCardsData = [
    {
        header: "Canon",
        title: "Scriptures",
        description:
            "Vedas, Upanishads, Bhagavad Gita, Itihāsas, and Puranas in multi-tier philological alignment with traditional commentaries.",
        icon: BookOpen,
        footer_note: "4 Vedas · 108 Upanishads",
    },
    {
        header: "Iconography",
        title: "Deities",
        description:
            "Symbolism, iconographical canons (Shilpa Shastra), anthropomorphic metaphysical attributes, and regional living lineages.",
        icon: Sparkles,
        footer_note: "Shaiva · Vaishnava · Shakta",
    },
    {
        header: "Sound Resonance",
        title: "Mantras",
        description:
            "Rigorous phonetic accents, metric meters (Chhandas), root etymology, authenticated audio pronunciations, and integrated japa practices.",
        icon: Music,
        footer_note: "Gayatri · Rudram · Suktas",
    },
    {
        header: "Darshanas",
        title: "Philosophy",
        description:
            "In-depth, non-dogmatic investigation of Dharma, Karma, Moksha, Ātman, and Brahman across the six orthodox and heterodox systems.",
        icon: Brain,
        footer_note: "Advaita · Samkhya · Yoga",
    },
    {
        header: "Cycles",
        title: "Festivals",
        description:
            "Astronomical alignments, lunar tithis, sacred seasonal rites, and the metaphysical allegories underpinning pan-Indian celebrations.",
        icon: PartyPopper,
        footer_note: "Panchanga · Solstices",
    },
    {
        header: "Sacred Spaces",
        title: "Temples",
        description:
            "Sacred architecture, Vastu Purusha Mandala matrices, stone acoustics, living pilgrimage routes, and historical epigraphy.",
        icon: Building2,
        footer_note: "Nagara · Dravida · Vesara",
    },
] as const;

const graphNodes = [
    {
        icon: <UserRound size={20} />,
        title: "Krishna",
        subtitle: "Avatāra · Teacher",
        active: false,
    },
    {
        icon: <BookOpen size={20} />,
        title: "Bhagavad Gita",
        subtitle: "Core Canonical Text",
        active: true,
    },
    {
        icon: <Scale size={20} />,
        title: "Dharma",
        subtitle: "Cosmic & Moral Order",
        active: false,
    },
    {
        icon: <Sparkles size={20} />,
        title: "Karma Yoga",
        subtitle: "Action Without Attachment",
        active: false,
    },
    {
        icon: <Network size={20} />,
        title: "Vedānta",
        subtitle: "Advaita · Viśiṣṭādvaita",
        active: false,
    },
];

export default function Home() {
    return (
        <section className="my-20">
            {/* ── Hero ─────────────────────────────────────────────── */}
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
                {/* Left */}
                <div className="flex flex-col items-start">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-orange-50/70 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-orange-700 dark:border-orange-900/50 dark:bg-orange-950/30 dark:text-orange-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                        THE ETERNAL TRUTH
                    </div>

                    <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.5rem] dark:text-white">
                        Explore the Wisdom of{" "}
                        <span className="text-orange-600">Sanatana Dharma</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500 sm:text-lg dark:text-neutral-400">
                        Discover the scriptures, philosophies, deities, mantras,
                        stories, and traditions that have shaped one of the
                        world&apos;s oldest living spiritual traditions.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button
                            size="lg"
                            className="h-11 gap-2 px-6 text-sm tracking-wide"
                        >
                            Explore
                            <MoveRight className="h-4 w-4" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-11 gap-2 px-6 text-sm tracking-wide"
                        >
                            <BookOpen className="h-4 w-4" />
                            Read Scriptures
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-neutral-200 pt-7 dark:border-neutral-800">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-semibold tracking-tight">
                                    108
                                </span>
                                <Sparkles className="h-4 w-4 text-orange-600" />
                            </div>
                            <p className="mt-1 text-[11px] font-medium tracking-[0.12em] text-neutral-400 dark:text-neutral-500">
                                MANTRAS INDEXED
                            </p>
                        </div>

                        <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-800" />

                        <div>
                            <p className="text-2xl font-semibold tracking-tight">
                                700
                            </p>
                            <p className="mt-1 text-[11px] font-medium tracking-[0.12em] text-neutral-400 dark:text-neutral-500">
                                GITA VERSES &amp; GLOSSES
                            </p>
                        </div>

                        <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-800" />

                        <div>
                            <p className="text-2xl font-semibold tracking-tight">
                                18
                            </p>
                            <p className="mt-1 text-[11px] font-medium tracking-[0.12em] text-neutral-400 dark:text-neutral-500">
                                DARSHANA SYSTEMS
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right — image placeholder */}
                <div className="relative hidden min-h-128 overflow-hidden rounded-3xl bg-linear-to-br from-orange-50 to-orange-100/60 lg:block dark:from-neutral-900 dark:to-neutral-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-sm text-neutral-400">
                            Sacred imagery
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Daily Contemplation ──────────────────────────────── */}
            <div className="my-24 w-full bg-orange-50/60 px-4 sm:px-6 dark:bg-orange-950/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-8 rounded-full bg-[#c85a17] sm:w-16" />
                        <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c85a17]">
                            DAILY CONTEMPLATION
                        </span>
                        <span className="h-px w-8 rounded-full bg-[#c85a17] sm:w-16" />
                    </div>

                    <p className="mt-3 max-w-sm text-center text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                        A verse to pause with, reflect upon, and carry
                        throughout the day.
                    </p>
                </div>

                <div className="mx-auto mt-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm dark:border-orange-950/40 dark:bg-[#171717]">
                    {/* Card Header */}
                    <div className="flex items-start justify-between border-b border-neutral-100 px-5 py-5 sm:px-8 dark:border-neutral-800">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#c85a17] dark:bg-orange-950/30">
                                <BookOpenCheck className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-[10px] font-semibold tracking-[0.12em] text-neutral-400 dark:text-neutral-500">
                                    MUNDAKA UPANISHAD · 3.1.6
                                </p>
                                <p className="mt-0.5 text-sm font-semibold text-neutral-900 dark:text-neutral-200">
                                    Shānti Pāṭha
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
                            aria-label="Bookmark contemplation"
                        >
                            <Bookmark className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Card Body */}
                    <div className="px-5 py-10 text-center sm:px-10 sm:py-12">
                        <p className="text-xl font-medium leading-[1.9] text-neutral-900 sm:text-2xl lg:text-3xl dark:text-neutral-100">
                            {`सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः ॥`}
                        </p>

                        <p className="mt-6 text-sm italic leading-7 text-orange-500">
                            {`satyameva jayate nānṛtaṁ satyena panthā vitato devayānaḥ`}
                        </p>

                        <div className="mx-auto my-8 h-px w-10 bg-orange-200 dark:bg-orange-900/50" />

                        <blockquote className="mx-auto max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
                            {`"Truth alone triumphs, not untruth; by truth the divine path is laid out, along which the sages, freed from cravings, ascend to the supreme abode of Truth."`}
                        </blockquote>
                    </div>

                    {/* Card Footer */}
                    <div className="border-t border-neutral-100 bg-neutral-50/70 px-5 py-5 sm:px-8 dark:border-neutral-800 dark:bg-neutral-900/40">
                        <div className="flex flex-wrap justify-center gap-2">
                            {[
                                {
                                    word: "satyam",
                                    gloss: "Truth (Immutable Being)",
                                },
                                { word: "jayate", gloss: "Triumphs" },
                                {
                                    word: "devayānaḥ",
                                    gloss: "Path of the Luminaries",
                                },
                            ].map(({ word, gloss }) => (
                                <span
                                    key={word}
                                    className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
                                >
                                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                                        {word}
                                    </span>{" "}
                                    · {gloss}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Archive Grid ─────────────────────────────────────── */}
            <div className="w-full bg-neutral-50 px-4 py-10 sm:px-6 lg:px-20 dark:bg-neutral-950">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-xl">
                            <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-[#c85a17]">
                                THE CURATED ARCHIVE
                            </p>
                            <h2 className="font-serif text-4xl tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-100">
                                Explore the Tradition
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-neutral-500 dark:text-neutral-400 lg:text-right">
                            A living digital library organized along classical
                            taxonomy, harmonizing primary canonical revelation
                            with scholarly concordance.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {libraryCardsData.map((card, index) => (
                            <div
                                key={index}
                                className="group flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-950/5 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-orange-900"
                            >
                                {/* Top */}
                                <div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c85a17]">
                                            {card.header}
                                        </p>
                                        <card.icon
                                            size={17}
                                            strokeWidth={1.5}
                                            className="text-neutral-300 transition-colors group-hover:text-[#c85a17] dark:text-neutral-600"
                                        />
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="font-serif text-2xl tracking-tight text-neutral-900 dark:text-neutral-100">
                                            {card.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom */}
                                <div className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-5 dark:border-neutral-800">
                                    <p className="text-xs text-neutral-400">
                                        {card.footer_note}
                                    </p>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="gap-1.5 px-0 text-sm text-[#c85a17] hover:bg-transparent hover:text-[#a8480f]"
                                    >
                                        Open
                                        <ArrowRight
                                            size={14}
                                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                                        />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Knowledge Graph ───────────────────────────────────── */}
            <div className="w-full bg-[#faf8f6] px-4 py-10 sm:px-6 lg:px-20 dark:bg-neutral-950">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-[#b84d0d]">
                                ONTOLOGICAL CONNECTIONS
                            </p>
                            <h2 className="font-serif text-4xl tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-100">
                                The Living Knowledge Graph
                            </h2>
                        </div>

                        <div className="inline-flex w-fit items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2 text-xs font-medium tracking-wide text-neutral-600 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                            <span className="h-2 w-2 rounded-full bg-[#8a641c]" />
                            Scholarly Entity Mapping
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)] dark:border-neutral-800 dark:bg-neutral-900">
                        {/* Toolbar */}
                        <div className="flex flex-wrap items-center gap-2 px-5 pt-5 sm:px-6 sm:pt-6">
                            <span className="rounded-sm bg-[#fff1e9] px-3 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-[#ad4b10] dark:bg-orange-950/30 dark:text-orange-400">
                                CENTRAL NODE: BHAGAVAD GITA
                            </span>
                            <span className="rounded-sm bg-neutral-100 px-3 py-1.5 text-[11px] font-medium tracking-[0.08em] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                                Epic Syntheses
                            </span>
                        </div>

                        {/* Desktop graph — hidden on small screens */}
                        <div className="relative mx-5 mt-4 hidden h-80 overflow-hidden sm:mx-6 sm:block">
                            <svg
                                className="absolute inset-0 h-full w-full"
                                viewBox="0 0 1100 320"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <line
                                    x1="150"
                                    y1="165"
                                    x2="310"
                                    y2="140"
                                    stroke="#c85a17"
                                    strokeWidth="1.5"
                                    strokeDasharray="5 6"
                                    opacity="0.3"
                                />
                                <line
                                    x1="310"
                                    y1="140"
                                    x2="490"
                                    y2="180"
                                    stroke="#8a641c"
                                    strokeWidth="1.5"
                                    opacity="0.25"
                                />
                                <line
                                    x1="490"
                                    y1="180"
                                    x2="680"
                                    y2="140"
                                    stroke="#c85a17"
                                    strokeWidth="1.5"
                                    strokeDasharray="5 6"
                                    opacity="0.3"
                                />
                                <line
                                    x1="680"
                                    y1="140"
                                    x2="870"
                                    y2="165"
                                    stroke="#8a641c"
                                    strokeWidth="1.5"
                                    opacity="0.25"
                                />
                                <circle
                                    cx="150"
                                    cy="165"
                                    r="4"
                                    fill="#c85a17"
                                    opacity="0.6"
                                />
                                <circle
                                    cx="310"
                                    cy="140"
                                    r="4"
                                    fill="#8a641c"
                                    opacity="0.6"
                                />
                                <circle
                                    cx="490"
                                    cy="180"
                                    r="4"
                                    fill="#c85a17"
                                    opacity="0.6"
                                />
                                <circle
                                    cx="680"
                                    cy="140"
                                    r="4"
                                    fill="#8a641c"
                                    opacity="0.6"
                                />
                                <circle
                                    cx="870"
                                    cy="165"
                                    r="4"
                                    fill="#c85a17"
                                    opacity="0.6"
                                />
                            </svg>

                            <GraphNode
                                className="left-[9%] top-[30%]"
                                icon={<UserRound size={20} />}
                                title="Krishna"
                                subtitle="Avatāra · Teacher"
                            />
                            <GraphNode
                                active
                                className="left-[27%] top-[14%]"
                                icon={<BookOpen size={20} />}
                                title="Bhagavad Gita"
                                subtitle="Core Canonical Text"
                            />
                            <GraphNode
                                className="left-[46%] top-[30%]"
                                icon={<Scale size={20} />}
                                title="Dharma"
                                subtitle="Cosmic & Moral Order"
                            />
                            <GraphNode
                                className="left-[64%] top-[14%]"
                                icon={<Sparkles size={20} />}
                                title="Karma Yoga"
                                subtitle="Action Without Attachment"
                            />
                            <GraphNode
                                className="left-[83%] top-[30%]"
                                icon={<Network size={20} />}
                                title="Vedānta"
                                subtitle="Advaita · Viśiṣṭādvaita"
                            />
                        </div>

                        {/* Mobile graph — vertical pill list */}
                        <div className="mx-4 mt-4 flex flex-col gap-3 sm:hidden">
                            {graphNodes.map((node) => (
                                <div
                                    key={node.title}
                                    className={`flex items-center gap-4 rounded-xl border p-4 ${
                                        node.active
                                            ? "border-orange-200 bg-orange-50/60 dark:border-orange-900/50 dark:bg-orange-950/20"
                                            : "border-neutral-100 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-800/40"
                                    }`}
                                >
                                    <div
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                            node.active
                                                ? "bg-[#ffe0d0] text-[#a9470c] dark:bg-orange-950/50 dark:text-orange-400"
                                                : "bg-neutral-100 text-[#8a641c] dark:bg-neutral-700"
                                        }`}
                                    >
                                        {node.icon}
                                    </div>
                                    <div>
                                        <p
                                            className={`text-sm font-semibold ${node.active ? "text-[#a9470c]" : "text-neutral-900 dark:text-neutral-100"}`}
                                        >
                                            {node.title}
                                        </p>
                                        <p className="text-xs text-[#8a641c] dark:text-neutral-400">
                                            {node.subtitle}
                                        </p>
                                    </div>
                                    {node.active && (
                                        <span className="ml-auto rounded-full bg-[#fff1e9] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[#ad4b10] dark:bg-orange-950/30 dark:text-orange-400">
                                            Central
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="mx-4 flex flex-col gap-4 border-t border-neutral-100 py-5 sm:mx-6 dark:border-neutral-800 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs text-neutral-500 dark:text-neutral-400">
                                <Legend
                                    color="bg-[#b84d0d]"
                                    label="Scriptural Revelation"
                                />
                                <Legend
                                    color="bg-[#8a641c]"
                                    label="Philosophical System"
                                />
                                <Legend
                                    color="bg-neutral-400"
                                    label="Historical Commentator"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Learning Paths ────────────────────────────────────── */}
            <div className="w-full bg-[#f8f7f5] px-4 py-10 sm:px-6 lg:px-20 dark:bg-neutral-950">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-[#b84d0d]">
                            SYSTEMATIC STUDY
                        </p>
                        <h2 className="font-serif text-4xl tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-100">
                            Curated Learning Paths
                        </h2>
                        <p className="mt-4 text-base leading-7 text-[#705c52] dark:text-neutral-400">
                            Structured curricula curated by scholars and
                            traditional teachers to guide modern readers through
                            primary sources.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 lg:grid-cols-3">
                        <LearningPathCard
                            category="Beginner Path"
                            categoryStyle="gold"
                            count="5 Modules"
                            title="Introduction to Vedānta"
                            description="Explore the fundamental relationship between the individual Self (Ātman) and Supreme Reality (Brahman) across essential Upanishadic dialogues."
                            topics={[
                                "The Three States of Consciousness (Mandukya)",
                                "Tat Tvam Asi: Etymology & Gloss",
                            ]}
                        />
                        <LearningPathCard
                            category="Intermediate Track"
                            categoryStyle="orange"
                            count="18 Chapters"
                            title="Reading the Bhagavad Gita"
                            description="A verse-by-verse philosophical breakdown analyzing action, devotion, knowledge, and inner crisis on the threshold of Kurukshetra."
                            topics={[
                                "Karmanyev Adhikaraste Deconstruction",
                                "Comparative Commentaries: Shankara & Ramanuja",
                            ]}
                        />
                        <LearningPathCard
                            category="Linguistic & Oral"
                            categoryStyle="gold"
                            count="8 Modules"
                            title="Architecture of Sanskrit Mantras"
                            description="Master the exact physiological articulation of the 50 phonemes, metric meters (Gayatri, Anushtubh), and harmonic resonance theory."
                            topics={[
                                "Vowel Accents: Udatta, Anudatta & Svarita",
                                "Maha Mrityunjaya Meter Breakdown",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function GraphNode({
    icon,
    title,
    subtitle,
    className,
    active = false,
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    className?: string;
    active?: boolean;
}) {
    return (
        <div
            className={`absolute z-10 flex w-36 -translate-x-1/2 flex-col items-center text-center sm:w-44 ${className ?? ""}`}
        >
            <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                    active
                        ? "bg-[#ffe0d0] text-[#a9470c] shadow-md shadow-orange-900/10 dark:bg-orange-950/50 dark:text-orange-400"
                        : "bg-neutral-100 text-[#8a641c] dark:bg-neutral-800"
                }`}
            >
                {icon}
            </div>
            <h3
                className={`mt-2.5 font-serif text-lg font-semibold leading-tight ${active ? "text-[#a9470c]" : "text-neutral-900 dark:text-neutral-100"}`}
            >
                {title}
            </h3>
            <p className="mt-0.5 text-[11px] tracking-wide text-[#8a641c] dark:text-neutral-400">
                {subtitle}
            </p>
        </div>
    );
}

function Legend({ color, label }: { color: string; label: string }) {
    return (
        <span className="flex items-center gap-2">
            <span className={`h-2 w-2 shrink-0 rounded-full ${color}`} />
            {label}
        </span>
    );
}

function LearningPathCard({
    category,
    categoryStyle,
    count,
    title,
    description,
    topics,
}: {
    category: string;
    categoryStyle: "gold" | "orange";
    count: string;
    title: string;
    description: string;
    topics: string[];
}) {
    return (
        <article className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/5 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-center justify-between gap-4">
                <span
                    className={`rounded-sm px-3 py-1.5 text-[11px] font-semibold tracking-widest ${
                        categoryStyle === "orange"
                            ? "bg-[#f9e9df] text-[#b84d0d] dark:bg-orange-950/30 dark:text-orange-400"
                            : "bg-[#eeece5] text-[#80601d] dark:bg-yellow-950/20 dark:text-yellow-500"
                    }`}
                >
                    {category}
                </span>
                <span className="shrink-0 text-sm font-medium text-[#604f47] dark:text-neutral-400">
                    {count}
                </span>
            </div>

            <div className="mt-6">
                <h3 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
                    {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#705c52] dark:text-neutral-400">
                    {description}
                </p>
            </div>

            <div className="mt-5 space-y-2.5">
                {topics.map((topic) => (
                    <div key={topic} className="flex items-start gap-2.5">
                        <CircleCheck
                            size={16}
                            strokeWidth={2}
                            className="mt-0.5 shrink-0 text-[#b84d0d]"
                        />
                        <p className="text-sm leading-5 text-[#604f47] dark:text-neutral-300">
                            {topic}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-8">
                <Button className="h-10 w-full justify-center gap-2.5 rounded-sm bg-neutral-100 text-sm font-semibold tracking-wide text-neutral-900 shadow-none hover:bg-[#b84d0d] hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-[#b84d0d]">
                    Start Track
                    <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                </Button>
            </div>
        </article>
    );
}
