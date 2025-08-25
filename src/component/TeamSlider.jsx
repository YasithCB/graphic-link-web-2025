import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import PersonCardLandscape from "./PersonCardLandscape";

export default function TeamSlider({ list }) {
  const [startIndex, setStartIndex] = React.useState(0);

  // Show 2 cards at a time
  const visibleCards = list.slice(startIndex, startIndex + 2);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 2) % list.length);
    }, 5000); // rotate every 3 seconds
    return () => clearInterval(interval);
  }, [list.length]);

  return (
    <div className="overflow-hidden w-full bg-dark-50">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={startIndex}
          className="grid grid-cols-2" // 2 columns
          initial={{ x: 1500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="row">
            {visibleCards.map((member, index) => (
              <PersonCardLandscape
                key={index}
                name={member.name}
                description={member.description}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
