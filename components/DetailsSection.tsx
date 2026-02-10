"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Note: we used unoptimized: true in config, but standard Next Image is fine or just img
import { Product } from "@/data/products";

interface Props {
    product: Product;
}

export default function DetailsSection({ product }: Props) {
    return (
        <section className="relative w-full bg-black py-24 md:py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 md:order-1"
                >
                    <div className="bg-neutral-900 aspect-square rounded-2xl overflow-hidden relative">
                        {/* Placeholder for detail image */}
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-700">
                            [Product Detail Image]
                            {/* In a real app: <Image src={product.folderPath + "/detail.jpg"} ... /> */}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="order-1 md:order-2 space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                        {product.detailsSection.title}
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                        {product.detailsSection.description}
                    </p>

                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {product.stats.map((stat, idx) => (
                            <div key={idx} className="border-t border-white/10 pt-4">
                                <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">{stat.label}</p>
                                <p className="text-2xl font-medium text-white">{stat.val}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
