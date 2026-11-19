"use client";

import { motion } from "framer-motion";
import { Flame, Camera, Video, Ticket, Instagram as InstagramIcon } from "lucide-react";
import Link from "next/link";
import { FireHero } from "@/components/FireHero";
import { useEffect, useState } from "react";

const features = [
  {
    icon: Camera,
    title: "Fotografia",
    description: "Reviva os melhores momentos de cada edição",
    href: "/fotografia",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Video,
    title: "Vídeos",
    description: "Assista aos aftermovies e melhores momentos",
    href: "/videos",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Ticket,
    title: "Ingressos",
    description: "Garanta seu lugar na próxima edição",
    href: "/ingressos",
    color: "from-emerald-500 to-cyan-500",
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    description: "Siga @fervoficial e fique por dentro",
    href: "/instagram",
    color: "from-pink-500 to-rose-500",
  },
];

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Fire Hero Animation */}
      <FireHero onComplete={() => setShowContent(true)} />

      {/* Main Content */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Apresentação */}
          <section className="relative py-20 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-6xl font-bebas tracking-wider">
                  <span className="fire-text">A FESTA QUE CONTAGIA</span>
                </h2>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                  Salvador, Bahia — Onde cada edição se torna uma memória inesquecível.
                  Entre no ritmo, sinta a energia e faça parte dessa história.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <Link
                    href="/ingressos"
                    className="group relative px-8 py-4 bg-fervo-red hover:bg-fervo-red/90 rounded-lg font-bold text-lg tracking-wide transition-all glow-red hover:scale-105"
                  >
                    <span className="relative z-10">GARANTIR INGRESSO</span>
                  </Link>
                  <Link
                    href="/videos"
                    className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-bold text-lg tracking-wide transition-all hover:scale-105"
                  >
                    ASSISTIR AFTERMOVIES
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Partículas de fundo */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-fervo-orange rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </section>

          {/* Próxima Edição */}
          <section className="py-16 px-4 bg-gradient-to-b from-fervo-black to-fervo-red/5">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-fervo-red/20 to-fervo-orange/10 border border-fervo-red/30 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm"
              >
                <Flame className="w-16 h-16 text-fervo-red mx-auto mb-6 animate-fire-flicker" />
                <h3 className="text-3xl md:text-5xl font-bebas tracking-wider fire-text mb-4">
                  PRÓXIMA EDIÇÃO EM BREVE
                </h3>
                <p className="text-lg text-white/70 mb-8">
                  Fique ligado nas nossas redes sociais para não perder nenhuma novidade.
                  A próxima festa está sendo preparada com muito carinho.
                </p>
                <Link
                  href="/instagram"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-medium transition-all hover:scale-105"
                >
                  <InstagramIcon className="w-5 h-5" />
                  Seguir @fervoficial
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bebas tracking-wider text-center mb-12"
              >
                <span className="fire-text">EXPLORE O UNIVERSO FERVO</span>
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={feature.href}
                      className="group block h-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all hover:scale-105"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-fervo-red transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {feature.description}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </motion.div>
      )}
    </div>
  );
}
