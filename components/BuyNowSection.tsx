"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
    product: Product;
}

export default function BuyNowSection({ product }: Props) {
    return (
        <section className="relative w-full bg-black py-32 px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center space-y-12">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                        {product.buyNowSection.price}
                    </h2>
                    <p className="text-neutral-500 text-xl">{product.buyNowSection.unit}</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 text-neutral-300">
                    {product.buyNowSection.highlights.map((item, i) => (
                        <span key={i} className="px-4 py-2 bg-neutral-900 rounded-full border border-white/10 text-sm md:text-base">
                            {item}
                        </span>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="pt-8"
                >
                    <button className="bg-white text-black text-lg md:text-xl font-medium px-12 py-4 rounded-full hover:scale-105 transition-transform duration-300">
                        Add to Bag
                    </button>
                </motion.div>

                <div className="text-sm text-neutral-500 space-y-1">
                    <p>{product.buyNowSection.deliveryPromise}</p>
                    <p>{product.buyNowSection.returnPolicy}</p>
                </div>

            </div>
        </section>
    );
}
