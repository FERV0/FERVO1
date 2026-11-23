"use client";

import { motion } from "framer-motion";
import { User, Music, Heart, Star, Calendar, MapPin, Trophy, Users } from "lucide-react";
import Image from "next/image";

export default function CEOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E5090] via-[#5B7FB8] to-[#2E5090] relative overflow-hidden py-12 px-4">
      {/* Orkut-style background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Orkut-style header banner */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">
            CEO DA FERVO
          </h1>
          <p className="text-white/90 text-lg">👨‍💼 Conheça quem está por trás da festa 🎉</p>
        </motion.div>

        {/* Main profile container - Orkut style white box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Profile header section - Blue gradient like Orkut */}
          <div className="bg-gradient-to-r from-[#4B6DA7] to-[#5B7FB8] p-6 border-b-4 border-[#2E5090]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Profile picture */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                className="relative"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg bg-white p-2 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-500" />
                    {/* Placeholder for CEO photo */}
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white" />
              </motion.div>

              {/* Profile info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Bill Gomes
                </h2>
                <p className="text-xl text-white/90 mb-4 italic">
                  "Binho Gomes"
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                    <Music className="w-4 h-4" />
                    DJ & Produtor
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                    <Trophy className="w-4 h-4" />
                    CEO FERVO
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                    <MapPin className="w-4 h-4" />
                    Salvador, BA
                  </span>
                </div>
              </div>

              {/* Orkut-style stats */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  <Heart className="w-6 h-6 inline text-red-400 fill-red-400" />
                </div>
                <p className="text-white/80 text-sm">Muito confiável</p>
              </div>
            </div>
          </div>

          {/* Profile content - Orkut boxes style */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Sobre mim - Orkut blue box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="border-l-4 border-[#2E5090] bg-gradient-to-r from-blue-50 to-white rounded-r-lg p-6"
            >
              <h3 className="text-2xl font-bold text-[#2E5090] mb-4 flex items-center gap-2">
                <User className="w-6 h-6" />
                Sobre mim
              </h3>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-[#2E5090]">Nome completo:</strong> Bill Gomes (Binho Gomes)
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#2E5090]">Função:</strong> CEO e Fundador do FERVO
                </p>
                <p className="leading-relaxed italic text-gray-600">
                  💡 <em>[Biografia detalhada será adicionada em breve com informações oficiais]</em>
                </p>
              </div>
            </motion.div>

            {/* Paixões - Orkut style */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="border-l-4 border-pink-500 bg-gradient-to-r from-pink-50 to-white rounded-r-lg p-6"
            >
              <h3 className="text-2xl font-bold text-pink-600 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Paixões
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "🎵 Música",
                  "🎉 Festas",
                  "🎧 DJing",
                  "🔥 Eventos",
                  "💃 Dança",
                  "🌴 Salvador",
                  "🎪 Entretenimento",
                  "🤝 Pessoas"
                ].map((passion, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
                  >
                    {passion}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* FERVO History - Orkut orange box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-white rounded-r-lg p-6"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                Trajetória FERVO
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-orange-600">Fundação</p>
                    <p className="text-sm italic text-gray-600">
                      [Data e história da criação do FERVO serão adicionadas]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-orange-600">Visão</p>
                    <p className="text-sm">
                      Criar experiências inesquecíveis e contagiar Salvador com a melhor energia.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-orange-600">Conquistas</p>
                    <p className="text-sm italic text-gray-600">
                      [Marcos importantes e realizações serão adicionados]
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact/Social - Orkut style */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="border-l-4 border-purple-500 bg-gradient-to-r from-purple-50 to-white rounded-r-lg p-6"
            >
              <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                <Music className="w-6 h-6" />
                Redes Sociais
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/fervoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Instagram Oficial</p>
                    <p className="text-sm text-purple-600 group-hover:underline">@fervoficial</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Orkut-style footer note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 text-center"
            >
              <p className="text-sm text-gray-600">
                <Star className="w-4 h-4 inline text-yellow-500 fill-yellow-500" />
                {" "}Esta página foi inspirada no clássico Orkut dos anos 2000{" "}
                <Star className="w-4 h-4 inline text-yellow-500 fill-yellow-500" />
              </p>
              <p className="text-xs text-gray-500 mt-2">
                💙 Informações oficiais e detalhadas sobre Bill Gomes serão adicionadas em breve
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative elements - Orkut vibes */}
        <div className="absolute top-20 left-4 opacity-20 pointer-events-none">
          <Star className="w-16 h-16 text-white fill-white animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-4 opacity-20 pointer-events-none">
          <Heart className="w-16 h-16 text-pink-300 fill-pink-300 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
