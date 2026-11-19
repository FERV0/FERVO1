"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Ticket, ExternalLink, Heart, Star as StarIcon } from "lucide-react";

// Mock data - pode ser substituído por dados reais do organizador
const nextEvent = {
  hasEvent: false, // Mudar para true quando houver próxima edição
  name: "FERVO #14",
  date: "A definir",
  time: "A definir",
  location: "Salvador, Bahia",
  description: "A próxima edição está sendo preparada com muito carinho. Fique ligado nas nossas redes sociais para não perder nenhuma novidade!",
  ticketLink: "#", // Link para plataforma de ingressos
  lotes: [
    { name: "1º Lote", price: "A definir", status: "soon" },
    { name: "2º Lote", price: "A definir", status: "soon" },
    { name: "3º Lote", price: "A definir", status: "soon" },
  ],
};

export default function IngressosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0510] via-[#2d0a15] to-[#1a0510] relative overflow-hidden">
      {/* Notebook paper texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 31px,
          #dc2626 31px,
          #dc2626 32px
        )`,
      }} />

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
              <StarIcon className="w-3 h-3 text-[#fbbf24] fill-[#fbbf24]" />
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
                <span className="relative z-10">MINHAS AMIGAS,</span>
                <div className="absolute inset-0 bg-[#dc2626] opacity-10 transform rotate-1" />
              </span>
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 transform rotate-1">
              VAMOS PRO FERVO?
            </h2>

            <p className="text-lg text-white/80 max-w-2xl mx-auto italic">
              "A próxima edição está chegando. Garanta seu lugar nessa história."
            </p>

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
                <StarIcon className="absolute top-4 right-4 w-6 h-6 text-[#fbbf24] fill-[#fbbf24] transform rotate-12" />
                <Heart className="absolute bottom-4 left-4 w-8 h-8 text-[#dc2626]/20 fill-[#dc2626]/20 transform -rotate-12" />

                {nextEvent.hasEvent ? (
                  <div className="space-y-8">
                    {/* Event Title */}
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-[#1a0510] mb-2 font-serif">
                        {nextEvent.name}
                      </h3>
                      <div className="h-1 w-24 bg-[#dc2626] mx-auto rounded-full" />
                    </div>

                    {/* Event Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-[#dc2626]/5 rounded-lg border-2 border-[#dc2626]/20">
                        <Calendar className="w-8 h-8 text-[#dc2626] mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Data</p>
                        <p className="font-bold text-gray-900">{nextEvent.date}</p>
                      </div>
                      <div className="text-center p-4 bg-[#dc2626]/5 rounded-lg border-2 border-[#dc2626]/20">
                        <Clock className="w-8 h-8 text-[#dc2626] mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Horário</p>
                        <p className="font-bold text-gray-900">{nextEvent.time}</p>
                      </div>
                      <div className="text-center p-4 bg-[#dc2626]/5 rounded-lg border-2 border-[#dc2626]/20">
                        <MapPin className="w-8 h-8 text-[#dc2626] mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">Local</p>
                        <p className="font-bold text-gray-900">{nextEvent.location}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="bg-[#fbbf24]/10 border-l-4 border-[#fbbf24] p-6 rounded-r-lg">
                      <p className="text-gray-700 leading-relaxed italic">
                        {nextEvent.description}
                      </p>
                    </div>

                    {/* Ticket Lotes */}
                    <div>
                      <h4 className="text-2xl font-bold text-[#1a0510] mb-4 text-center font-serif">
                        Lotes de Ingressos
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {nextEvent.lotes.map((lote, index) => (
                          <motion.div
                            key={lote.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className={`
                              p-6 rounded-lg text-center border-2
                              ${lote.status === "available"
                                ? "bg-[#a3be8c]/10 border-[#a3be8c] cursor-pointer hover:scale-105"
                                : lote.status === "sold"
                                ? "bg-gray-100 border-gray-300 opacity-60"
                                : "bg-[#dc2626]/5 border-[#dc2626]/30"
                              }
                              transition-all
                            `}
                          >
                            <p className="font-bold text-lg text-gray-900 mb-2">
                              {lote.name}
                            </p>
                            <p className="text-2xl font-bold text-[#dc2626] mb-2">
                              {lote.price}
                            </p>
                            <p className="text-sm text-gray-600">
                              {lote.status === "available" && "Disponível"}
                              {lote.status === "sold" && "Esgotado"}
                              {lote.status === "soon" && "Em breve"}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center pt-6">
                      <motion.a
                        href={nextEvent.ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Ticket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        GARANTIR MEU INGRESSO
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                ) : (
                  // No event scheduled
                  <div className="text-center py-12 space-y-6">
                    <motion.div
                      animate={{
                        rotate: [0, 10, 0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    >
                      <Ticket className="w-20 h-20 text-[#dc2626] mx-auto mb-4" />
                    </motion.div>

                    <h3 className="text-3xl font-bold text-[#1a0510] mb-4 font-serif">
                      Próxima Edição em Breve
                    </h3>

                    <p className="text-gray-700 max-w-lg mx-auto leading-relaxed italic">
                      {nextEvent.description}
                    </p>

                    <div className="pt-6">
                      <a
                        href="https://www.instagram.com/fervoficial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105"
                      >
                        <Heart className="w-5 h-5" />
                        Seguir @fervoficial
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Decorative note */}
                    <div className="mt-8 p-4 bg-[#fbbf24]/10 border-l-4 border-[#fbbf24] rounded-r-lg">
                      <p className="text-sm text-gray-600 italic">
                        💛 Enquanto isso, reviva os momentos das edições anteriores nas nossas seções de Fotografia e Vídeos!
                      </p>
                    </div>
                  </div>
                )}
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
