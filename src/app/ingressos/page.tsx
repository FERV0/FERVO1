"use client";

import { motion } from "framer-motion";
import { Heart, Star, Instagram as InstagramIcon } from "lucide-react";
import { Sparks } from "@/components/Sparks";

export default function IngressosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0510] via-[#2d0a15] to-[#1a0510] relative overflow-hidden">
      {/* Sparks Animation */}
      <Sparks count={15} />

      {/* Notebook paper texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 31px,
          #dc2626 31px,
          #dc2626 32px
        )`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="w-4 h-4 text-[#dc2626] fill-[#dc2626]" />
            ) : (
              <Star className="w-3 h-3 text-[#fbbf24] fill-[#fbbf24]" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with Rebelde aesthetic */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 relative"
          >
            {/* Sticker-like decorations */}
            <motion.div
              className="absolute -top-8 left-1/4 w-16 h-16 bg-[#dc2626] rounded-full opacity-20 blur-xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -top-8 right-1/4 w-16 h-16 bg-[#fbbf24] rounded-full opacity-20 blur-xl"
              animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <Heart className="w-20 h-20 text-[#dc2626] fill-[#dc2626] mx-auto" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-20 h-20 text-[#dc2626]" />
                </motion.div>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
              <span className="inline-block transform -rotate-1 bg-white text-[#dc2626] px-6 py-2 shadow-lg relative">
                <span className="relative z-10">INGRESSOS</span>
                <div className="absolute inset-0 bg-[#dc2626] opacity-10 transform rotate-1" />
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 transform rotate-1">
              EM BREVE
            </h2>

            {/* Decorative line */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="h-1 w-16 bg-[#dc2626] rounded-full" />
              <Heart className="w-4 h-4 text-[#dc2626] fill-[#dc2626]" />
              <div className="h-1 w-16 bg-[#dc2626] rounded-full" />
            </div>
          </motion.div>

          {/* Main Content - Diary/Notebook style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Paper sheet effect */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform -rotate-1 relative">
              {/* Tape decorations */}
              <div className="absolute top-0 left-1/4 w-20 h-8 bg-white/50 transform -rotate-45 blur-sm" />
              <div className="absolute top-0 right-1/4 w-20 h-8 bg-white/50 transform rotate-45 blur-sm" />

              <div className="p-8 md:p-12 relative">
                {/* Doodles and decorations */}
                <Star className="absolute top-4 right-4 w-6 h-6 text-[#fbbf24] fill-[#fbbf24] transform rotate-12" />
                <Heart className="absolute bottom-4 left-4 w-8 h-8 text-[#dc2626]/20 fill-[#dc2626]/20 transform -rotate-12" />

                {/* Content */}
                <div className="text-center py-12 space-y-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                  >
                    <div className="inline-block p-6 bg-[#dc2626]/5 rounded-xl border-2 border-[#dc2626]/20 mb-6">
                      <h3 className="text-3xl md:text-5xl font-bold text-[#1a0510] mb-4 font-serif">
                        Aguarde Novidades!
                      </h3>
                    </div>
                  </motion.div>

                  <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    Estamos preparando uma experiência especial para você.
                    <br />
                    <strong className="text-[#dc2626]">
                      Fique ligado nas nossas redes sociais
                    </strong>{" "}
                    para não perder nenhuma novidade sobre a próxima edição do FERVO!
                  </p>

                  {/* CTA */}
                  <div className="pt-6">
                    <a
                      href="https://www.instagram.com/fervoficial?avpt=MWsxMDh5aXZmazMy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <InstagramIcon className="w-6 h-6" />
                      Seguir @fervoficial
                    </a>
                  </div>

                  {/* Decorative note */}
                  <div className="mt-10 p-6 bg-[#fbbf24]/10 border-l-4 border-[#fbbf24] rounded-r-lg">
                    <p className="text-base text-gray-600 italic">
                      💛 A melhor festa de Salvador está sendo preparada com muito
                      carinho. Você não vai querer ficar de fora!
                    </p>
                  </div>
                </div>
              </div>

              {/* Paper edge effect */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
            </div>

            {/* Shadow effect */}
            <div className="absolute inset-0 bg-black/5 rounded-lg transform translate-y-2 translate-x-2 -z-10" />
          </motion.div>

          {/* Collage decorations around the paper */}
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                className="w-12 h-12 rounded-lg transform rotate-12"
                style={{
                  background: `linear-gradient(135deg, ${
                    ["#dc2626", "#fbbf24", "#a3be8c", "#dc2626", "#fbbf24"][i]
                  }, transparent)`,
                  opacity: 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
