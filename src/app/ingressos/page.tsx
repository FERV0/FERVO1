"use client";

import { motion } from "framer-motion";
import { Heart, Star, Instagram as InstagramIcon, Sparkles, Music } from "lucide-react";
import { Sparks } from "@/components/Sparks";

export default function IngressosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B0000] via-[#000000] to-[#8B0000] relative overflow-hidden">
      {/* Sparks Animation */}
      <Sparks count={30} />

      {/* Rebelde-style metallic shine effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Magazine-style dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Decorative elements - Rebelde style */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const icons = [Heart, Star, Music, Sparkles];
          const Icon = icons[i % icons.length];
          const colors = ['#dc2626', '#ec4899', '#ffffff', '#fbbf24'];
          const color = colors[i % colors.length];
          
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.5, 1.5, 0.5],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Icon className="w-3 h-3 md:w-4 md:h-4" style={{ color }} fill={i % 2 === 0 ? color : 'none'} />
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with Rebelde aesthetic - Magazine/Poster style */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 relative"
          >
            {/* Neon glow decorations */}
            <motion.div
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-pink-500 to-red-600 rounded-full opacity-30 blur-2xl"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Magazine-style title treatment */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-block mb-8 relative"
            >
              {/* Metallic border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-red-500 to-pink-600 rounded-2xl blur-xl opacity-60" />
              
              <div className="relative bg-gradient-to-br from-white via-pink-50 to-white p-6 md:p-8 rounded-2xl border-4 border-white shadow-2xl transform -rotate-2">
                <div className="bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                  <h1 className="text-5xl md:text-7xl font-black mb-2 tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
                    INGRESSOS
                  </h1>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
            </motion.div>

            {/* "EM BREVE" badge - sticker style */}
            <motion.div
              initial={{ scale: 0, rotate: 15 }}
              animate={{ scale: 1, rotate: 5 }}
              transition={{ type: "spring", delay: 0.4 }}
              className="inline-block relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 rounded-full blur-md" />
              <div className="relative bg-gradient-to-br from-red-500 via-pink-500 to-red-600 px-8 py-3 rounded-full border-4 border-white shadow-xl">
                <h2 className="text-2xl md:text-4xl font-black text-white tracking-wider" style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  EM BREVE!
                </h2>
              </div>
            </motion.div>

            {/* Decorative stars around */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${20 + (i % 4) * 20}%`,
                  top: i < 4 ? '0%' : '100%',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <Star className="w-6 h-6 text-pink-400 fill-pink-400" />
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content - Teen magazine/Poster style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Glossy magazine page effect */}
            <div className="relative bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-3xl shadow-2xl overflow-hidden">
              {/* Metallic tape decorations - Rebelde style */}
              <div className="absolute top-0 left-1/4 w-24 h-10 bg-gradient-to-r from-pink-400 to-red-500 transform -rotate-45 opacity-80 blur-sm" />
              <div className="absolute top-0 right-1/4 w-24 h-10 bg-gradient-to-r from-red-500 to-pink-400 transform rotate-45 opacity-80 blur-sm" />

              <div className="p-8 md:p-12 lg:p-16 relative">
                {/* Sticker decorations */}
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-6 right-6"
                >
                  <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 p-3 rounded-full border-4 border-white shadow-lg">
                    <Star className="w-8 h-8 text-white fill-white" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-6 left-6"
                >
                  <div className="bg-gradient-to-br from-pink-400 to-red-500 p-3 rounded-full border-4 border-white shadow-lg">
                    <Heart className="w-8 h-8 text-white fill-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center py-12 space-y-8 relative z-10">
                  {/* Main message - Magazine headline style */}
                  <motion.div
                    initial={{ scale: 0, rotate: -5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                  >
                    <div className="inline-block bg-gradient-to-br from-red-500 via-pink-500 to-red-600 p-1 rounded-2xl mb-6 transform -rotate-1 shadow-xl">
                      <div className="bg-white px-8 py-6 rounded-xl">
                        <h3 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
                          Aguarde Novidades!
                        </h3>
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
                          <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                          <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text content - Teen magazine style */}
                  <div className="max-w-2xl mx-auto space-y-6">
                    <p className="text-xl md:text-2xl text-gray-800 font-bold leading-relaxed">
                      <span className="text-4xl">✨</span> Estamos preparando uma experiência ÉPICA para você! <span className="text-4xl">✨</span>
                    </p>
                    
                    <div className="bg-gradient-to-r from-pink-100 via-white to-pink-100 p-6 rounded-2xl border-2 border-pink-300">
                      <p className="text-lg md:text-xl text-gray-700 font-semibold">
                        Fique ligado no nosso
                        {" "}<span className="text-pink-600 font-black text-2xl">INSTAGRAM</span>{" "}
                        para não perder nenhuma novidade sobre a próxima edição do FERVO!
                      </p>
                    </div>

                    {/* Rebelde-style callout stickers */}
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                      <motion.div
                        animate={{ rotate: [-3, 3, -3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block bg-gradient-to-br from-red-500 to-pink-600 px-6 py-3 rounded-full border-4 border-white shadow-lg transform -rotate-2"
                      >
                        <span className="text-white font-black text-xl" style={{ fontFamily: 'Impact, sans-serif' }}>
                          🎪 VAI SER ÉPICO!
                        </span>
                      </motion.div>
                      
                      <motion.div
                        animate={{ rotate: [3, -3, 3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block bg-gradient-to-br from-yellow-400 to-orange-500 px-6 py-3 rounded-full border-4 border-white shadow-lg transform rotate-2"
                      >
                        <span className="text-white font-black text-xl" style={{ fontFamily: 'Impact, sans-serif' }}>
                          🔥 NÃO PERCA!
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* CTA - Rebelde inspired button */}
                  <div className="pt-6">
                    <motion.a
                      href="https://www.instagram.com/fervoficial?avpt=MWsxMDh5aXZmazMy"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block relative group"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Button */}
                      <div className="relative bg-gradient-to-r from-red-600 via-pink-600 to-red-600 px-10 py-5 rounded-2xl border-4 border-white shadow-2xl">
                        <div className="flex items-center gap-3">
                          <InstagramIcon className="w-7 h-7 text-white" />
                          <span className="text-white font-black text-xl md:text-2xl tracking-wide" style={{ fontFamily: 'Impact, sans-serif' }}>
                            SEGUIR @FERVOFICIAL
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  </div>

                  {/* Final note - Handwritten style */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 p-6 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl shadow-lg transform rotate-1"
                  >
                    <p className="text-lg text-gray-700 italic font-medium">
                      💛 A melhor festa de Salvador está sendo preparada com muito carinho.
                      <br />
                      <strong className="text-red-600 not-italic">Você não vai querer ficar de fora!</strong>
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Magazine edge shine effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            </div>

            {/* 3D shadow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-red-900/20 rounded-3xl transform translate-y-3 translate-x-3 -z-10" />
          </motion.div>

          {/* Collage decorations - 2000s aesthetic */}
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            {[...Array(7)].map((_, i) => {
              const shapes = ['rounded-lg', 'rounded-full', 'rounded-xl'];
              const gradients = [
                'from-red-500 to-pink-600',
                'from-pink-500 to-rose-500',
                'from-yellow-400 to-orange-500',
                'from-purple-500 to-pink-500',
                'from-red-600 to-rose-600',
              ];
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{ 
                    opacity: 0.6, 
                    scale: 1, 
                    rotate: (Math.random() - 0.5) * 30 
                  }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${gradients[i % gradients.length]} ${shapes[i % shapes.length]} border-2 border-white shadow-lg`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
