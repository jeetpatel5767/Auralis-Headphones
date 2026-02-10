"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Product } from "@/data/products";
import ProductTextOverlays from "./ProductTextOverlays";

interface Props {
    product: Product;
}

export default function ProductScrollCanvas({ product }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // ✅ YOU HAVE 200 FRAMES
    const frameCount = 200;

    // Map scroll → frame index
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    // ✅ PRELOAD IMAGES (CORRECT NAMING)
    useEffect(() => {
        const imgs: HTMLImageElement[] = [];
        let loaded = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();

            // ezgif-frame-001.jpg → ezgif-frame-200.jpg
            const frameNumber = String(i).padStart(3, "0");
            img.src = `${product.folderPath}/ezgif-frame-${frameNumber}.jpg`;

            img.onload = () => {
                loaded++;
                if (loaded === frameCount) {
                    setImages(imgs);
                    setIsLoaded(true);
                }
            };

            img.onerror = () => {
                console.warn(`Failed to load frame ${i}`);
                loaded++;
                if (loaded === frameCount) {
                    setImages(imgs);
                    setIsLoaded(true);
                }
            };

            imgs.push(img);
        }
    }, [product.folderPath]);

    // ✅ CANVAS RENDER
    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const dpr = window.devicePixelRatio || 1;
            const width = window.innerWidth;
            const height = window.innerHeight;

            if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                canvas.style.width = width + "px";
                canvas.style.height = height + "px";
            }

            ctx.clearRect(0, 0, width, height);

            if (!isLoaded || images.length === 0) return;

            const index = Math.floor(frameIndex.get());
            const img = images[index];

            // 🛡️ SAFETY CHECK (prevents crash)
            if (!img || !img.complete || img.naturalWidth === 0) return;

            const imgAspect = img.width / img.height;
            const canvasAspect = width / height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgAspect > canvasAspect) {
                drawWidth = width;
                drawHeight = width / imgAspect;
                offsetX = 0;
                offsetY = (height - drawHeight) / 2;
            } else {
                drawHeight = height;
                drawWidth = height * imgAspect;
                offsetY = 0;
                offsetX = (width - drawWidth) / 2;
            }

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        const unsubscribe = frameIndex.on("change", () => {
            requestAnimationFrame(render);
        });

        window.addEventListener("resize", render);
        if (isLoaded) render();

        return () => {
            unsubscribe();
            window.removeEventListener("resize", render);
        };
    }, [frameIndex, images, isLoaded]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <canvas ref={canvasRef} className="w-full h-full z-10" />

                {/* Text overlays */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    <ProductTextOverlays
                        product={product}
                        scrollYProgress={scrollYProgress}
                    />
                </div>

                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 text-white/30 bg-black">
                        <div className="animate-pulse">Loading Experience…</div>
                    </div>
                )}
            </div>
        </div>
    );
}
