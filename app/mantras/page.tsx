import { Button } from "@/components/ui/button";
import { AudioLines, Search } from "lucide-react";

export default function MantrasPage() {
    return (
        <section className="w-full bg-[#faf8f6] px-4 py-16 sm:px-6 lg:px-20 dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
                    {/* ── Header Content ───────────────────────────── */}
                    <div className="max-w-3xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#c85a17] sm:w-12" />
                            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#c85a17]">
                                THE SACRED SOUND ARCHIVE
                            </p>
                        </div>

                        <h1 className="font-serif text-4xl leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-[4rem] dark:text-neutral-100">
                            The Mantras Corpus{" "}
                            <span className="text-[#c85a17]">
                                &amp; Sonic Sanctuary
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
                            Ancient Vedic resonance, phonetics, and
                            contemplative incantations cataloged with metrical
                            precision.
                        </p>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                            Preserved across three millennia of strict oral
                            lineage (Śruti). Every cataloged incantation
                            includes phonological meter, accent marks (Svaras),
                            Vedic provenance, and curated high-fidelity
                            acoustics.
                        </p>
                    </div>

                    {/* ── Metadata Panel ────────────────────────────── */}
                    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                        <div className="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
                            {/* Acoustic Pitch */}
                            <div className="p-5 sm:p-6">
                                <p className="text-[10px] font-semibold tracking-[0.16em] text-[#c85a17]">
                                    ACOUSTIC PITCH
                                </p>

                                <div className="mt-5">
                                    <p className="font-serif text-2xl tracking-tight text-neutral-900 dark:text-neutral-100">
                                        432 Hz
                                    </p>
                                    <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
                                        Reference Frequency
                                    </p>
                                </div>
                            </div>

                            {/* Lineage */}
                            <div className="p-5 sm:p-6">
                                <p className="text-[10px] font-semibold tracking-[0.16em] text-[#c85a17]">
                                    LINEAGE
                                </p>

                                <div className="mt-5">
                                    <p className="font-serif text-2xl tracking-tight text-neutral-900 dark:text-neutral-100">
                                        UNESCO
                                    </p>
                                    <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
                                        Intangible Heritage
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom provenance strip */}
                        <div className="border-t border-neutral-100 bg-neutral-50/70 px-5 py-3.5 dark:border-neutral-800 dark:bg-neutral-950/40">
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#8a641c]" />
                                <p className="text-[10px] font-medium tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
                                    ŚRUTI · ORAL TRANSMISSION · VEDIC PROVENANCE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Search & Archive Filters ───────────────────────────── */}
                <div className="mt-12">
                    {/* Search */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <div className="flex h-12 flex-1 items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 shadow-sm transition-all focus-within:border-orange-300 focus-within:ring-2 focus-within:ring-orange-100 dark:border-neutral-800 dark:bg-neutral-900 dark:focus-within:border-orange-900 dark:focus-within:ring-orange-950/30">
                            <AudioLines
                                size={18}
                                strokeWidth={1.6}
                                className="shrink-0 text-[#8a641c]"
                            />

                            <input
                                type="text"
                                placeholder="Search mantras, ślokas, deities, meters..."
                                className="h-full w-full bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-neutral-100 dark:placeholder:text-neutral-600"
                            />

                            <kbd className="hidden shrink-0 rounded border border-neutral-200 bg-neutral-50 px-2 py-1 font-mono text-[10px] text-neutral-400 sm:inline-block dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-500">
                                ⌘ K
                            </kbd>
                        </div>

                        <Button
                            size="lg"
                            className="h-12 gap-2 rounded-lg bg-[#b84d0d] px-6 text-xs font-semibold tracking-[0.08em] text-white shadow-none hover:bg-[#a9470c]"
                        >
                            <Search size={16} strokeWidth={2} />
                            SEARCH ARCHIVE
                        </Button>
                    </div>

                    {/* Filters */}
                    <div className="mt-5 flex flex-wrap items-center gap-2.5">
                        <p className="mr-1 text-[10px] font-semibold tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
                            CLASS:
                        </p>

                        <button
                            type="button"
                            className="rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-medium text-[#b84d0d] transition-colors hover:border-orange-300 hover:bg-orange-100 dark:border-orange-900/50 dark:bg-orange-950/30 dark:text-orange-400 dark:hover:bg-orange-950/50"
                        >
                            All
                        </button>

                        <button
                            type="button"
                            className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-[#b84d0d] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-orange-900/50 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
                        >
                            Vedic Sūktas
                        </button>

                        <button
                            type="button"
                            className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-[#b84d0d] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-orange-900/50 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
                        >
                            Śānti Mantras
                        </button>

                        <button
                            type="button"
                            className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-[#b84d0d] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-orange-900/50 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
                        >
                            Maha Mantras
                        </button>

                        <button
                            type="button"
                            className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-[#b84d0d] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-orange-900/50 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
                        >
                            Bīja &amp; Dhāraṇī
                        </button>

                        <button
                            type="button"
                            className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-[#b84d0d] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-orange-900/50 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
                        >
                            Stotras &amp; Kāvya
                        </button>
                    </div>
                </div>

                {/* ── Header Divider ───────────────────────────────── */}
                <div className="mt-14 border-t border-neutral-200 dark:border-neutral-800" />
            </div>
        </section>
    );
}
