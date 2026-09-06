import { Button } from "@/components/ui/button";
import { BookOpen, MoveRight, Sparkles } from "lucide-react";

export default function Home() {
    return (
        <section className="my-20 px-6">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
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

            {/* Third section */}

            {/* Fourth section */}

            {/* Fifth section */}

            {/* Sixth section */}
        </section>
    );
}
