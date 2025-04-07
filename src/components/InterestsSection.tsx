import React from "react";
import { interests } from "@/lib/data";
import { Heart } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function InterestsSection() {
  return (
    <section
      id="interests"
      className="py-12 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            ❤️ Interests
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {interests.map((interest, index) => (
            <MotionWrapper key={interest.name} delay={index * 0.1}>
              <GlassCard className="p-4 dark:border-red-500/10 hover:border-red-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-1.5 mr-2"
                  >
                    <Heart className="h-4 w-4 text-white" />
                  </motion.div>
                  <h3 className="font-medium">{interest.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1 pl-8">
                  {interest.description}
                </p>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
} 