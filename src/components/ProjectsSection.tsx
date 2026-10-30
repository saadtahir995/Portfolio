import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ExternalLink } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🚀 Projects
          </h2>
          <p className="text-sm text-muted-foreground mb-8 text-center md:text-left">
            Government-backed and enterprise apps built at Fauree, alongside selected mobile and web projects. Explore each app and my role below.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2 text-center md:text-left">
                    {project.category}
                  </p>
                  <CardTitle className="text-center md:text-left group-hover:text-purple-500 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground text-center md:text-left mt-2">
                    {project.role}
                  </p>
                  {project.period && (
                    <p className="text-xs text-muted-foreground text-center md:text-left mt-1">
                      {project.period}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc ml-4 space-y-1 text-sm group-hover:space-y-2 transition-all duration-300">
                    {project.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center md:justify-start items-center border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  {project.linkUrl ? (
                    <motion.a
                      href={project.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link pt-8"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                      {project.link} 🔗
                    </motion.a>
                  ) : (
                    <span className="flex items-center text-sm text-muted-foreground pt-8">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {project.link}
                    </span>
                  )}
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
