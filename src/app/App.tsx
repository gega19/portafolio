import { motion } from "motion/react";
import { ProjectGallery } from "./components/ProjectGallery";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2djI4aDE2VjE2SDM2ek04IDE2djI4aDE2VjE2SDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="relative flex flex-col flex-1">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-14 pb-12 px-6 text-center border-b border-slate-200 bg-white/80 backdrop-blur-sm"
        >
          <motion.div
            className="flex flex-col items-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <img
              src="/logo-ceg.png"
              alt="Corporación C.E.G."
              className="h-20 md:h-24 w-auto object-contain"
              width={200}
              height={96}
              decoding="async"
              fetchPriority="high"
              loading="eager"
            />
            <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
              Corporación C.E.G.
            </p>
          </motion.div>
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nuestros proyectos
          </motion.h1>
          <motion.p
            className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Selección de soluciones digitales desarrolladas y diseñadas por
            Corporación CEG
          </motion.p>
        </motion.header>

        <ProjectGallery />

        <footer className="mt-auto py-8 px-6 text-center text-sm text-slate-500 border-t border-slate-100 bg-white/90">
          <a
            href="https://www.corporacionceg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 font-medium hover:text-slate-900 underline-offset-4 hover:underline"
          >
            www.corporacionceg.com
          </a>
        </footer>
      </div>
    </div>
  );
}