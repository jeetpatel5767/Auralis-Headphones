export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    experienceSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        highlights: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const products: Product[] = [
    {
        id: "auralis-pro",
        name: "Auralis Pro",
        subName: "Silence, perfected.",
        price: "₹34,999",
        description: "Active Noise Cancellation • Spatial Audio • 40-Hour Battery",
        folderPath: "/Headphone",
        themeColor: "#E5E7EB",
        gradient: "linear-gradient(180deg, #0B0B0B 0%, #000000 100%)",
        features: [
            "Active Noise Cancellation",
            "Spatial Audio",
            "Lossless Wireless"
        ],
        stats: [
            { label: "Battery", val: "40 hrs" },
            { label: "Latency", val: "Ultra-Low" },
            { label: "Drivers", val: "Custom 40mm" }
        ],
        section1: {
            title: "Auralis Pro.",
            subtitle: "Silence, perfected."
        },
        section2: {
            title: "Designed for focus.",
            subtitle: "Block the world. Enter yours."
        },
        section3: {
            title: "Sound, without distortion.",
            subtitle: "Pure, balanced audio engineered for detail."
        },
        section4: {
            title: "Crafted to be worn.",
            subtitle: "All-day comfort. Zero fatigue."
        },
        detailsSection: {
            title: "Precision Engineering",
            description:
                "Auralis Pro is engineered with custom-tuned drivers, adaptive noise cancellation, and precision-milled components to deliver sound exactly as intended — nothing added, nothing lost.",
            imageAlt: "Headphone engineering detail"
        },
        experienceSection: {
            title: "A private listening space",
            description:
                "Advanced noise isolation and spatial audio combine to create an intimate soundstage that moves with you — whether you're working, traveling, or unwinding."
        },
        buyNowSection: {
            price: "₹34,999",
            unit: "incl. taxes",
            highlights: [
                "Adaptive ANC",
                "Spatial Audio",
                "USB-C Fast Charging"
            ],
            deliveryPromise:
                "Free express delivery. Ships within 24 hours.",
            returnPolicy:
                "14-day return policy. No questions asked."
        }
    }
];
