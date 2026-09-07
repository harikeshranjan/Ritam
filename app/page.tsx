import { Button } from "@/components/ui/button";
import {
    Bookmark,
    BookOpen,
    BookOpenCheck,
    MoveRight,
    Sparkles,
} from "lucide-react";

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

            {/* Fourth section */}

            {/* Fifth section */}

            {/* Sixth section */}
        </section>
    );
}
