// src/components/ScrollAnimation.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
}

export default function ScrollAnimation({
                                            children,
                                            className = "",
                                            delay = 0,
                                            direction = "up",
                                            duration = 0.6
                                        }: ScrollAnimationProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const directions = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            animate={inView ? {
                opacity: 1,
                x: 0,
                y: 0
            } : {}}
            transition={{
                duration,
                delay,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    );
}