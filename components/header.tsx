"use client";

import { Book, Flower, Home, LucideIcon, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "./mode-toggle";
import { Button } from "./ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { useState } from "react";

interface HeaderLink {
    href: string;
    label: string;
    icon: LucideIcon;
    isNew?: boolean;
    isComingSoon?: boolean;
}

const headerLinks: HeaderLink[] = [
    {
        href: "/scriptures",
        label: "Scriptures",
        icon: Book,
        isComingSoon: true,
    },
    {
        href: "/mantras",
        label: "Mantras",
        icon: Flower,
        isComingSoon: true,
    },
    {
        href: "/temples",
        label: "Temples",
        icon: Home,
        isComingSoon: false,
    },
] as const;

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-4 z-50 flex items-center justify-center px-4">
            <div className="w-full max-w-4xl flex flex-row items-center justify-between border border-black/10 dark:border-white/10 rounded-xl backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 shadow-sm px-6 py-2.5">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-semibold text-xl text-orange-600 dark:text-orange-500 tracking-tight"
                >
                    Ritam
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {headerLinks.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.isComingSoon ? "#" : link.href}
                                aria-disabled={link.isComingSoon}
                                className={[
                                    "relative flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-colors duration-150",
                                    link.isComingSoon
                                        ? "text-muted-foreground cursor-not-allowed opacity-50"
                                        : active
                                          ? "text-orange-600 dark:text-orange-600"
                                          : "text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5",
                                ].join(" ")}
                                onClick={(e) =>
                                    link.isComingSoon && e.preventDefault()
                                }
                            >
                                <link.icon size={14} className="shrink-0" />
                                <span>{link.label}</span>
                                {link.isComingSoon && (
                                    <span className="ml-0.5 text-[10px] text-muted-foreground/60 font-medium leading-none">
                                        soon
                                    </span>
                                )}
                                {active && !link.isComingSoon && (
                                    <span className="absolute bottom-0 left-3 right-3 h-px bg-amber-500 rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-2">
                    <SelectLanguage />
                    <ModeToggle />

                    {/* Hamburger — mobile only */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden h-8 w-8"
                                aria-label="Open menu"
                            >
                                <Menu size={18} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-32 pt-10">
                            <SheetHeader>
                                <SheetTitle className="text-amber-600 dark:text-amber-500 text-left">
                                    Ritam
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-1 mt-6">
                                {headerLinks.map((link) => {
                                    const active = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={
                                                link.isComingSoon
                                                    ? "#"
                                                    : link.href
                                            }
                                            onClick={(e) => {
                                                if (link.isComingSoon) {
                                                    e.preventDefault();
                                                } else {
                                                    setOpen(false);
                                                }
                                            }}
                                            className={[
                                                "flex items-center gap-2.5 px-3 py-2 text-sm rounded-md transition-colors",
                                                link.isComingSoon
                                                    ? "text-muted-foreground opacity-50 cursor-not-allowed"
                                                    : active
                                                      ? "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-500"
                                                      : "text-foreground/80 hover:bg-black/5 dark:hover:bg-white/5 hover:text-foreground",
                                            ].join(" ")}
                                        >
                                            <link.icon
                                                size={15}
                                                className="shrink-0"
                                            />
                                            <span>{link.label}</span>
                                            {link.isComingSoon && (
                                                <span className="ml-auto text-[10px] text-muted-foreground/50">
                                                    soon
                                                </span>
                                            )}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

function SelectLanguage() {
    return (
        <Select defaultValue="english">
            <SelectTrigger className="h-8 text-xs w-28 border-black/10 dark:border-white/10 bg-transparent">
                <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Indian</SelectLabel>
                    <SelectItem value="hindi">Hindi</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Foreign</SelectLabel>
                    <SelectItem value="english">English</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
