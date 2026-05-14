import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
  icon: LucideIcon;
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gray-100">
          <motion.div
            className="h-full w-full"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              loading={index < 2 ? 'eager' : 'lazy'}
            />
          </motion.div>

          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Category Badge */}
          <motion.div
            className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-md text-xs text-gray-700 font-medium flex items-center gap-1.5 shadow-sm"
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-3.5 h-3.5" />
            {project.category}
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 rounded-lg text-white font-medium flex items-center gap-2 shadow-lg transition-colors"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isHovered ? 1 : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                Ver Proyecto
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* URL Preview */}
          <div className="flex items-center gap-2 text-xs text-gray-400 pt-2 border-t border-gray-100">
            <ExternalLink className="w-3 h-3" />
            <span className="truncate">{project.url}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
