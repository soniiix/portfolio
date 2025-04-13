import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
    "/src/assets/images/projects/hackat-web/cover.png",
    "/src/assets/images/projects/hackat-event/cover.png",
    "/src/assets/images/projects/listdir/cover.png",
];

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    return (
        <div className="relative mx-auto my-8 w-full">
            <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gray">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={images[index]}
                        src={images[index]}
                        alt={`Slide ${index}`}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            duration: 0.5,
                            ease: [0.56, 0.03, 0.12, 1.04]
                        }}
                        className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                    />
                </AnimatePresence>
            </div>

            <button
                onClick={prev}
                className="hover:cursor-pointer absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-blue p-3 text-white"
            >
                <IoIosArrowBack />
            </button>
            <button
                onClick={next}
                className="hover:cursor-pointer absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-blue p-3 text-white"
            >
                <IoIosArrowForward />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex gap-2">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`h-3 w-3 rounded-full transition-colors ${
                                i === index ? "bg-blue-500" : "bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
