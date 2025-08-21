import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VisionMissionCarousel() {
  const items = [
    {
      title: "Our Vision",
      text:
        " is to be recognized as innovative, different, credible, and dependable signage company \n" +
        "make your brand shine and enable you to get market share that you target.",
    },
    {
      title: "Our Mission",
      text:
        "is to facilitate your brand to stand distinguished and reach to all potential clients. We \n" +
        "want business flourish in Abu Dhbai to be world no 1 business center of the world.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000); // now 5 sec instead of 2 sec
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full bg-yellow py-8">
      <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center py-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h4 className="font-bold text-black mb-2">{items[index].title}</h4>
            <p className="text-black px-5 mb-0">{items[index].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
