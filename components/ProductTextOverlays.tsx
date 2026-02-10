"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
    product: Product;
    scrollYProgress: MotionValue<number>;
}

function TextSection({
    children,
    opacity
}: {
    children: React.ReactNode;
    opacity: MotionValue<number>
}) {
    return (
        <motion.div
            style={{ opacity }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20 pointer-events-none"
        >
            {children}
        </motion.div>
    );
}

export default function ProductTextOverlays({ product, scrollYProgress }: Props) {
    // Defines the opacity transitions for 4 sections based on scroll progress (0 to 1)

    // Section 1: 0.1 -> 0.2 (In), 0.2 -> 0.3 (Out)
    const opacity1 = useTransform(scrollYProgress, [0.05, 0.15, 0.20, 0.30], [0, 1, 1, 0]);

    // Section 2: 0.3 -> 0.4 (In), 0.4 -> 0.5 (Out)
    const opacity2 = useTransform(scrollYProgress, [0.30, 0.40, 0.45, 0.55], [0, 1, 1, 0]);

    // Section 3: 0.5 -> 0.6 (In), 0.6 -> 0.7 (Out)
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.70, 0.80], [0, 1, 1, 0]);

    // Section 4: 0.8 -> 0.9 (In), 0.9 -> 1.0 (Out)
    const opacity4 = useTransform(scrollYProgress, [0.80, 0.90, 0.95, 1.0], [0, 1, 1, 0]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <TextSection opacity={opacity1}>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg">{product.section1.title}</h2>
                <p className="text-xl md:text-2xl text-neutral-200 drop-shadow-md">{product.section1.subtitle}</p>
            </TextSection>

            <TextSection opacity={opacity2}>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg">{product.section2.title}</h2>
                <p className="text-xl md:text-2xl text-neutral-200 drop-shadow-md">{product.section2.subtitle}</p>
            </TextSection>

            <TextSection opacity={opacity3}>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 mb-4 drop-shadow-lg">
                    {product.section3.title}
                </h2>
                <p className="text-xl md:text-2xl text-neutral-200 drop-shadow-md">{product.section3.subtitle}</p>
            </TextSection>

            <TextSection opacity={opacity4}>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg">{product.section4.title}</h2>
                <p className="text-xl md:text-2xl text-neutral-200 drop-shadow-md">{product.section4.subtitle}</p>
            </TextSection>
        </div>
    );
}
