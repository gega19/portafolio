import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import {
  Scan,
  ShoppingBag,
  Sparkles,
  Scissors,
  CreditCard,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CEG 360 — Mi Casa",
    description:
      "Tour virtual 360° para explorar espacios de forma inmersiva y presentar propiedades con una experiencia moderna.",
    url: "https://micasa.corporacionceg.com/",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Tour virtual",
    icon: Scan,
    color: "gray",
  },
  {
    id: 2,
    title: "Mi Tienda CEG",
    description:
      "Canal de ventas en línea del ecosistema CEG: tienda digital para productos y servicios con presencia corporativa.",
    url: "https://mitienda.corporacionceg.com/",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    category: "E-commerce",
    icon: ShoppingBag,
    color: "gray",
  },
  {
    id: 3,
    title: "Clean Work Services 1",
    description:
      "Limpieza residencial y comercial, restauración por fuego, moho e inundaciones. Atención 24/7 en el sur de Florida.",
    url: "https://cleanworkservices1.com/",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&auto=format&fit=crop",
    category: "Servicios",
    icon: Sparkles,
    color: "gray",
  },
  {
    id: 4,
    title: "bartop",
    description:
      "App para encontrar barberías y barberos, ver perfiles verificados y reservar citas. Disponible en iOS y Android.",
    url: "https://bartopve.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    category: "App móvil",
    icon: Scissors,
    color: "gray",
  },
  {
    id: 5,
    title: "Puntos de venta — Inteligensa",
    description:
      "Aplicación de punto de venta para operaciones comerciales masivas: cobros, inventario y experiencia alineada con sistemas de pago e identificación de Inteligensa.",
    url: "https://inteligensa.com/",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&auto=format&fit=crop",
    category: "Punto de venta",
    icon: CreditCard,
    color: "gray",
  },
];

export function ProjectGallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="px-6 py-16 pb-20 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
