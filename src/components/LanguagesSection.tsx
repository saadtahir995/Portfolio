import React from "react";
import { languages } from "@/lib/data";
import { Languages } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function LanguagesSection() {
  return (
    <section
      id="languages"
      className="py-12 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🌐 Languages
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map((language, index) => (
            <MotionWrapper key={language.name} delay={index * 0.1}>
              <GlassCard className="p-4 dark:border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-1.5 mr-2"
                  >
                    <Languages className="h-4 w-4 text-white" />
                  </motion.div>
                  <h3 className="font-medium">{language.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1 pl-8">
                  {language.proficiency}
                </p>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
} 