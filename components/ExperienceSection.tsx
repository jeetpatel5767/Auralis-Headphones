"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
    product: Product;
}

export default function ExperienceSection({ product }: Props) {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-stone-900 py-24 px-6 overflow-hidden">
            {/* Background with subtle gradient or image */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{ background: product.gradient }}
            />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
                >
                    {product.experienceSection.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-2xl mx-auto"
                >
                    {product.experienceSection.description}
                </motion.p>
            </div>
        </section>
    );
}
