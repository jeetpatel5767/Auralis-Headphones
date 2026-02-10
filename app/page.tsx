"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductScrollCanvas from "@/components/ProductScrollCanvas";
import DetailsSection from "@/components/DetailsSection";
import ExperienceSection from "@/components/ExperienceSection";
import BuyNowSection from "@/components/BuyNowSection";
import { products } from "@/data/products";

export default function Home() {
  const product = products[0]; // Active product

  useEffect(() => {
    // Scroll reset on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Scroll Experience */}
      <ProductScrollCanvas product={product} />

      {/* Details - flows naturally after the 500vh scroll ends */}
      <DetailsSection product={product} />

      {/* Experience Section */}
      <ExperienceSection product={product} />

      {/* Buy Now Section */}
      <BuyNowSection product={product} />

      <Footer />
    </main>
  );
}
