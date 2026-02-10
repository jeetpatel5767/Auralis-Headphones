"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const { scrollY } = useScroll();

    // Only border opacity on scroll (no background)
    const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        >
            {/* Subtle bottom border on scroll */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-white pointer-events-none"
                style={{ opacity: borderOpacity }}
            />

            <Link
                href="/"
                className="text-xl font-medium tracking-tight text-white z-10"
            >
                Auralis
            </Link>

            <nav className="z-10">
                <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                    Buy
                </button>
            </nav>
        </motion.header>
    );
}
