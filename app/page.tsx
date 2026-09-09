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
        color: "#c85a17",
    },
    {
        header: "Iconography",
        title: "Deities",
        description:
            "Symbolism, iconographical canons (Shilpa Shastra), anthropomorphic metaphysical attributes, and regional living lineages.",
        icon: Sparkles,
        footer_note: "Shaiva · Vaishnava · Shakta",
        color: "#c85a17",
    },
    {
        header: "Sound Resonance",
        title: "Mantras",
        description:
            "Rigorous phonetic accents, metric meters (Chhandas), root etymology, authenticated audio pronunciations, and integrated japa practices.",
        icon: Music,
        footer_note: "Gayatri · Rudram · Suktas",
        color: "#c85a17",
    },
    {
        header: "Darshanas",
        title: "Philosophy",
        description:
            "In-depth, non-dogmatic investigation of Dharma, Karma, Moksha, Ātman, and Brahman across the six orthodox and heterodox systems.",
        icon: Brain,
        footer_note: "Advaita · Samkhya · Yoga",
        color: "#c85a17",
    },
    {
        header: "Cycles",
        title: "Festivals",
        description:
            "Astronomical alignments, lunar tithis, sacred seasonal rites, and the metaphysical allegories underpinning pan-Indian celebrations.",
        icon: PartyPopper,
        footer_note: "Panchanga · Solstices",
        color: "#c85a17",
    },
    {
        header: "Sacred Spaces",
        title: "Temples",
        description:
            "Sacred architecture, Vastu Purusha Mandala matrices, stone acoustics, living pilgrimage routes, and historical epigraphy.",
        icon: Building2,
        footer_note: "Nagara · Dravida · Vesara",
        color: "#c85a17",
    },
] as const;

export default function Home() {
    return (
        <section className="my-20">
            {/* First section */}
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 px-6">
                {/* Left Half */}
                <div className="flex flex-col items-start">
                    {/* Eyebrow */}
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-orange-50/70 px-3.5 py-1.5 text-xs font-medium tracking-[0.18em] text-orange-700 dark:border-orange-900/50 dark:bg-orange-950/30 dark:text-orange-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                        THE ETERNAL TRUTH
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl dark:text-white">
                        Explore the Wisdom of{" "}
                        <span className="text-orange-600">Sanatana Dharma</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg dark:text-neutral-400">
                        Discover the scriptures, philosophies, deities, mantras,
                        stories, and traditions that have shaped one of the
                        world&apos;s oldest living spiritual traditions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Button size="lg" className="h-12 px-6">
                            BEGIN EXPLORING
                            <MoveRight className="ml-2 h-4 w-4" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 px-6"
                        >
                            <BookOpen className="mr-2 h-4 w-4" />
                            EXPLORE THE SCRIPTURES
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-neutral-200 pt-7 dark:border-neutral-800">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-semibold tracking-tight">
                                    108
                                </span>
                                <Sparkles className="h-4 w-4 text-orange-600" />
                            </div>

                            <p className="mt-1 text-xs font-medium tracking-[0.12em] text-neutral-500 dark:text-neutral-500">
                                MANTRAS INDEXED
                            </p>
                        </div>

                        <div className="h-10 w-px bg-neutral-200 dark:bg-neutral-800" />

                        <div>
                            <p className="text-2xl font-semibold tracking-tight">
                                108
                            </p>

                            <p className="mt-1 text-xs font-medium tracking-[0.12em] text-neutral-500 dark:text-neutral-500">
                                GITA VERSES &amp; GLOSSES
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative hidden min-h-130 overflow-hidden rounded-3xl bg-neutral-100 lg:block dark:bg-neutral-900">
                    {/* Image will be added later */}

                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-sm text-neutral-400">
                            Sacred imagery
                        </p>
                    </div>
                </div>
            </div>

            {/* Second section */}
            <div className="my-24 w-full bg-orange-50/60 px-6 py-16 dark:bg-orange-950/10">
                {/* Section Heading */}
                <div className="mx-auto flex max-w-7xl flex-col items-center">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-12 rounded-full bg-[#c85a17] sm:w-20" />

                        <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold tracking-[0.2em] text-[#c85a17]">
                                DAILY CONTEMPLATION
                            </span>
                        </div>

                        <span className="h-px w-12 rounded-full bg-[#c85a17] sm:w-20" />
                    </div>

                    <p className="mt-3 max-w-xl text-center text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                        A verse to pause with, reflect upon, and carry with you
                        throughout the day.
                    </p>
                </div>

                {/* Contemplation Card */}
                <div className="mx-auto mt-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm dark:border-orange-950/40 dark:bg-[#171717]">
                    {/* Card Header */}
                    <div className="flex items-start justify-between border-b border-neutral-100 px-6 py-5 sm:px-8 dark:border-neutral-800">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-[#c85a17] dark:bg-orange-950/30">
                                <BookOpenCheck className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-xs font-semibold tracking-[0.12em] text-neutral-500 dark:text-neutral-500">
                                    MUNDAKA UPANISHAD · 3.1.6
                                </p>

                                <p className="mt-0.5 text-sm font-medium text-neutral-900 dark:text-neutral-200">
                                    SHĀNTI PĀṬHA
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

                    {/* Card Content */}
                    <div className="px-6 py-10 text-center sm:px-10 sm:py-12">
                        {/* Sanskrit */}
                        <p className="text-2xl font-medium leading-[1.8] text-neutral-900 sm:text-3xl dark:text-neutral-100">
                            {`सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः ॥`}
                        </p>

                        {/* Transliteration */}
                        <p className="mt-6 text-sm italic leading-7 text-orange-500">
                            {`satyameva jayate nānṛtaṁ satyena panthā vitato devayānaḥ`}
                        </p>

                        {/* Divider */}
                        <div className="mx-auto my-8 h-px w-12 bg-orange-200 dark:bg-orange-900/50" />

                        {/* Translation */}
                        <blockquote className="mx-auto max-w-2xl text-base leading-8 text-neutral-700 dark:text-neutral-300">
                            {`“Truth alone triumphs, not untruth; by truth the divine path is laid out, along which the sages, freed from cravings, ascend to the supreme abode of Truth.”`}
                        </blockquote>
                    </div>

                    {/* Card Footer */}
                    <div className="border-t border-neutral-100 bg-neutral-50/70 px-6 py-5 dark:border-neutral-800 dark:bg-neutral-900/40">
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                                <span className="font-medium text-neutral-800 dark:text-neutral-200">
                                    satyam
                                </span>{" "}
                                {`· Truth (Immutable Being)`}
                            </span>

                            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                                <span className="font-medium text-neutral-800 dark:text-neutral-200">
                                    jayate
                                </span>{" "}
                                · Triumphs
                            </span>

                            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                                <span className="font-medium text-neutral-800 dark:text-neutral-200">
                                    devayānaḥ
                                </span>{" "}
                                · Path of the Luminaries
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third section */}
            <div className="w-full bg-neutral-50 px-6 py-20 dark:bg-neutral-950 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-xl">
                            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#c85a17]">
                                THE CURATED ARCHIVE
                            </p>

                            <h2 className="font-serif text-4xl tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-100">
                                Explore the Tradition
                            </h2>
                        </div>

                        <p className="max-w-lg text-sm leading-7 text-neutral-500 dark:text-neutral-400 lg:text-right">
                            A living digital library organized along classical
                            taxonomy, harmonizing primary canonical revelation
                            with scholarly concordance.
                        </p>
                    </div>

                    {/* Archive Grid */}
                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {libraryCardsData.map((card, index) => (
                            <div
                                key={index}
                                className="group flex min-h-75 flex-col justify-between rounded-xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-950/5 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-orange-900"
                            >
                                {/* Card Top */}
                                <div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[11px] uppercase font-semibold tracking-[0.18em] text-[#c85a17]">
                                            0{index + 1} / {card.header}
                                        </p>

                                        <card.icon
                                            size={18}
                                            strokeWidth={1.5}
                                            className="text-neutral-400 transition-colors group-hover:text-[#c85a17]"
                                        />
                                    </div>

                                    <div className="mt-10">
                                        <h3 className="font-serif text-3xl tracking-tight text-neutral-900 dark:text-neutral-100">
                                            {card.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className="mt-10 flex items-center justify-between border-t border-neutral-100 pt-5 dark:border-neutral-800">
                                    <p className="text-xs font-medium text-neutral-400">
                                        {card.footer_note}
                                    </p>

                                    <Button
                                        variant="ghost"
                                        className="gap-2 px-0 text-sm text-[#c85a17] hover:bg-transparent hover:text-[#a8480f]"
                                    >
                                        Open Texts
                                        <ArrowRight
                                            size={15}
                                            className="transition-transform duration-200 group-hover:translate-x-1"
                                        />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fourth section */}
            <div className="w-full bg-[#faf8f6] px-6 py-20 dark:bg-neutral-950 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#b84d0d]">
                                ONTOLOGICAL CONNECTIONS
                            </p>

                            <h2 className="font-serif text-4xl tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-100">
                                The Living Knowledge Graph
                            </h2>
                        </div>

                        <div className="inline-flex w-fit items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2 text-xs font-medium tracking-[0.08em] text-neutral-600 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                            <span className="h-2 w-2 rounded-full bg-[#8a641c]" />
                            Scholarly Entity Mapping
                        </div>
                    </div>

                    {/* Graph Container */}
                    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] dark:border-neutral-800 dark:bg-neutral-900">
                        {/* Graph Toolbar */}
                        <div className="flex items-center justify-between px-6 pt-6">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-sm bg-[#fff1e9] px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-[#ad4b10] dark:bg-orange-950/30 dark:text-orange-400">
                                    CENTRAL NODE: BHAGAVAD GITA
                                </span>

                                <span className="rounded-sm bg-neutral-100 px-3 py-1.5 text-xs font-medium tracking-[0.08em] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                                    Epic Syntheses
                                </span>
                            </div>
                        </div>

                        {/* Graph */}
                        <div className="relative mx-6 mt-4 h-90 overflow-hidden">
                            {/* Connection Lines */}
                            <svg
                                className="absolute inset-0 h-full w-full"
                                viewBox="0 0 1200 430"
                                preserveAspectRatio="none"
                            >
                                {/* Krishna → Gita */}
                                <line
                                    x1="190"
                                    y1="225"
                                    x2="390"
                                    y2="190"
                                    stroke="#c85a17"
                                    strokeWidth="1.5"
                                    strokeDasharray="5 6"
                                    opacity="0.25"
                                />

                                {/* Gita → Dharma */}
                                <line
                                    x1="390"
                                    y1="190"
                                    x2="590"
                                    y2="250"
                                    stroke="#8a641c"
                                    strokeWidth="1.5"
                                    opacity="0.2"
                                />

                                {/* Dharma → Karma */}
                                <line
                                    x1="590"
                                    y1="250"
                                    x2="790"
                                    y2="200"
                                    stroke="#c85a17"
                                    strokeWidth="1.5"
                                    strokeDasharray="5 6"
                                    opacity="0.25"
                                />

                                {/* Karma → Vedanta */}
                                <line
                                    x1="790"
                                    y1="200"
                                    x2="1000"
                                    y2="235"
                                    stroke="#8a641c"
                                    strokeWidth="1.5"
                                    opacity="0.2"
                                />

                                {/* Connection points */}
                                <circle
                                    cx="190"
                                    cy="225"
                                    r="5"
                                    fill="#c85a17"
                                />

                                <circle
                                    cx="390"
                                    cy="190"
                                    r="5"
                                    fill="#8a641c"
                                />

                                <circle
                                    cx="590"
                                    cy="250"
                                    r="5"
                                    fill="#c85a17"
                                />

                                <circle
                                    cx="790"
                                    cy="200"
                                    r="5"
                                    fill="#8a641c"
                                />

                                <circle
                                    cx="1000"
                                    cy="235"
                                    r="5"
                                    fill="#c85a17"
                                />
                            </svg>

                            {/* Krishna */}
                            <GraphNode
                                className="left-[8%] top-[35%]"
                                icon={<UserRound size={23} />}
                                title="Krishna"
                                subtitle="Avatāra / Teacher"
                            />

                            {/* Bhagavad Gita */}
                            <GraphNode
                                active
                                className="left-[30%] top-[20%]"
                                icon={<BookOpen size={25} />}
                                title="Bhagavad Gita"
                                subtitle="Core Canonical Text"
                            />

                            {/* Dharma */}
                            <GraphNode
                                className="left-[52%] top-[35%]"
                                icon={<Scale size={24} />}
                                title="Dharma"
                                subtitle="Cosmic & Moral Order"
                            />

                            {/* Karma Yoga */}
                            <GraphNode
                                className="left-[72%] top-[20%]"
                                icon={<Sparkles size={23} />}
                                title="Karma Yoga"
                                subtitle="Action Without Attachment"
                            />

                            {/* Vedanta */}
                            <GraphNode
                                className="left-[89%] top-[35%]"
                                icon={<Network size={23} />}
                                title="Vedānta"
                                subtitle="Advaita / Viśiṣṭādvaita"
                            />
                        </div>

                        {/* Footer */}
                        <div className="mx-6 flex flex-col gap-5 border-t border-neutral-200 py-6 dark:border-neutral-800 lg:flex-row lg:items-center lg:justify-between">
                            {/* Legend */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-neutral-600 dark:text-neutral-400">
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

            {/* Fifth section */}
            <div className="w-full bg-[#f8f7f5] px-6 py-20 dark:bg-neutral-950 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="max-w-3xl">
                        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#b84d0d]">
                            SYSTEMATIC STUDY
                        </p>

                        <h2 className="font-serif text-4xl tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-100">
                            Curated Learning Paths
                        </h2>

                        <p className="mt-4 max-w-2xl text-base leading-7 text-[#705c52] sm:text-lg dark:text-neutral-400">
                            Structured, step-by-step curricula curated by
                            scholars and traditional teachers to guide modern
                            readers through primary sources.
                        </p>
                    </div>

                    {/* Learning Path Cards */}
                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {/* Beginner */}
                        <LearningPathCard
                            category="BEGINNER PATH"
                            categoryStyle="gold"
                            count="5 Modules"
                            title="Introduction to Vedānta"
                            description="Explore the fundamental relationship between the individual Self (Ātman) and Supreme Reality (Brahman) across essential Upanishadic dialogues."
                            topics={[
                                "The Three States of Consciousness (Mandukya)",
                                "Tat Tvam Asi: Etymology & Gloss",
                            ]}
                        />

                        {/* Intermediate */}
                        <LearningPathCard
                            category="INTERMEDIATE TRACK"
                            categoryStyle="orange"
                            count="18 Chapters"
                            title="Reading the Bhagavad Gita"
                            description="A verse-by-verse philosophical breakdown analyzing action, devotion, knowledge, and inner crisis on the threshold of Kurukshetra."
                            topics={[
                                "Karmanyev Adhikaraste Deconstruction",
                                "Comparative Commentaries: Shankara & Ramanuja",
                            ]}
                        />

                        {/* Linguistic */}
                        <LearningPathCard
                            category="LINGUISTIC & ORAL"
                            categoryStyle="gold"
                            count="8 Modules"
                            title="The Architecture of Sanskrit Mantras"
                            description="Master the exact physiological articulation of the 50 phonemes, metric meters (Gayatri, Anushtubh), and harmonic resonance theory."
                            topics={[
                                "Vowel Accents: Udatta, Anudatta & Svarita",
                                "Maha Mrityunjaya Meter Breakdown",
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* Sixth section */}
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
            className={`absolute z-10 flex w-40 -translate-x-1/2 flex-col items-center text-center sm:w-48 ${className ?? ""}`}
        >
            <div
                className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-all ${
                    active
                        ? "bg-[#ffe0d0] text-[#a9470c] shadow-md shadow-orange-900/10 dark:bg-orange-950/50 dark:text-orange-400"
                        : "bg-neutral-100 text-[#8a641c] dark:bg-neutral-800"
                }`}
            >
                {icon}
            </div>

            <h3
                className={`mt-3 font-serif text-xl font-semibold ${
                    active
                        ? "text-[#a9470c]"
                        : "text-neutral-900 dark:text-neutral-100"
                }`}
            >
                {title}
            </h3>

            <p className="mt-0.5 text-xs font-medium tracking-[0.04em] text-[#8a641c] dark:text-neutral-400">
                {subtitle}
            </p>
        </div>
    );
}

function Legend({ color, label }: { color: string; label: string }) {
    return (
        <span className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
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
        <article className="group flex min-h-106.25 flex-col rounded-xl border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/5 dark:border-neutral-800 dark:bg-neutral-900">
            {/* Card Header */}
            <div className="flex items-center justify-between gap-4">
                <span
                    className={`rounded-sm px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] ${
                        categoryStyle === "orange"
                            ? "bg-[#f9e9df] text-[#b84d0d] dark:bg-orange-950/30 dark:text-orange-400"
                            : "bg-[#eeece5] text-[#80601d] dark:bg-yellow-950/20 dark:text-yellow-500"
                    }`}
                >
                    {category}
                </span>

                <span className="shrink-0 text-sm font-medium tracking-wide text-[#604f47] dark:text-neutral-400">
                    {count}
                </span>
            </div>

            {/* Card Content */}
            <div className="mt-6">
                <h3 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
                    {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#705c52] dark:text-neutral-400">
                    {description}
                </p>
            </div>

            {/* Topics */}
            <div className="mt-6 space-y-2.5">
                {topics.map((topic) => (
                    <div key={topic} className="flex items-start gap-2.5">
                        <CircleCheck
                            size={18}
                            strokeWidth={2}
                            className="mt-0.5 shrink-0 text-[#b84d0d]"
                        />

                        <p className="text-sm font-medium leading-5 tracking-wide text-[#604f47] dark:text-neutral-300">
                            {topic}
                        </p>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-auto pt-8">
                <Button className="h-11 w-full justify-center gap-3 rounded-sm bg-neutral-100 text-sm font-semibold tracking-[0.08em] text-neutral-900 shadow-none transition-all hover:bg-[#b84d0d] hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-[#b84d0d]">
                    START TRACK
                    <ArrowRight
                        size={17}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                </Button>
            </div>
        </article>
    );
}
