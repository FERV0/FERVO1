"use client";

import { motion } from "framer-motion";
import { User, Flame, Heart, Star } from "lucide-react";
import { Sparks } from "@/components/Sparks";

export default function MuralCEOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5E81AC] via-[#81A1C1] to-[#88C0D0] relative">
      {/* Sparks Animation */}
      <Sparks count={15} />

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Orkut-style Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-t-xl border-2 border-[#2E3440] shadow-2xl overflow-hidden mb-0"
          >
            <div className="bg-gradient-to-r from-[#5E81AC] to-[#81A1C1] px-6 py-3 border-b-2 border-[#2E3440]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#BF616A]" />
                  <div className="w-3 h-3 rounded-full bg-[#EBCB8B]" />
                  <div className="w-3 h-3 rounded-full bg-[#A3BE8C]" />
                </div>
                <span className="text-white font-bold text-base ml-2">
                  Perfil — Mural do CEO
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-b-xl border-x-2 border-b-2 border-[#2E3440] shadow-2xl overflow-hidden"
          >
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-[#5E81AC]/10 to-[#88C0D0]/10 p-8 md:p-12 border-b-2 border-[#ECEFF4]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Picture */}
                <div className="relative flex-shrink-0">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl bg-gradient-to-br from-[#5E81AC] to-[#81A1C1] p-1 shadow-xl">
                    <div className="w-full h-full rounded-lg bg-white flex items-center justify-center overflow-hidden">
                      {/* Placeholder - Ready for CEO photo */}
                      <div className="w-full h-full bg-gradient-to-br from-[#5E81AC]/20 to-[#88C0D0]/20 flex items-center justify-center">
                        <User className="w-20 h-20 text-[#5E81AC]" />
                      </div>
                    </div>
                  </div>

                  {/* Online indicator */}
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#A3BE8C] rounded-full border-4 border-white flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Flame className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#2E3440] mb-3">
                    CEO - Festa FERVO
                  </h1>
                  <p className="text-lg text-[#5E81AC] font-semibold mb-4">
                    Fundador & Organizador
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center md:justify-start gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#2E3440]">🔥</p>
                      <p className="text-sm text-[#4C566A]">Criador</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#2E3440]">🎉</p>
                      <p className="text-sm text-[#4C566A]">Salvador, BA</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#2E3440]">💯</p>
                      <p className="text-sm text-[#4C566A]">Confiável</p>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5E81AC]/10 rounded-lg border border-[#5E81AC]/20">
                    <Star className="w-4 h-4 text-[#EBCB8B] fill-[#EBCB8B]" />
                    <span className="text-sm text-[#2E3440] font-medium">
                      Responsável pela Festa FERVO
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-8 md:p-12">
              {/* About Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5E81AC] to-[#81A1C1] flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2E3440]">Sobre</h2>
                </div>

                <div className="bg-[#ECEFF4] rounded-lg p-6 border-l-4 border-[#5E81AC]">
                  <p className="text-[#4C566A] leading-relaxed mb-4">
                    Fundador e responsável pela criação da Festa FERVO, um dos eventos
                    mais aguardados de Salvador, Bahia.
                  </p>
                  <p className="text-[#4C566A] leading-relaxed">
                    Com paixão por música, entretenimento e experiências inesquecíveis,
                    trabalha para criar momentos únicos que contagiam a todos.
                  </p>
                </div>
              </div>

              {/* Mission Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#A3BE8C] to-[#8FBCBB] flex items-center justify-center">
                    <Flame className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2E3440]">Missão</h2>
                </div>

                <div className="bg-gradient-to-r from-[#A3BE8C]/10 to-[#8FBCBB]/10 rounded-lg p-6 border border-[#A3BE8C]/30">
                  <p className="text-[#2E3440] font-semibold text-lg mb-2">
                    "Criar experiências que contagiam"
                  </p>
                  <p className="text-[#4C566A] leading-relaxed">
                    A Festa FERVO nasceu com o propósito de reunir pessoas, celebrar a
                    vida e criar memórias que duram para sempre.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#EBCB8B] to-[#D08770] flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2E3440]">Destaques</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: "🎯", title: "Visão", text: "Fazer do FERVO referência em festas" },
                    { icon: "🎵", title: "Paixão", text: "Música e entretenimento de qualidade" },
                    { icon: "🤝", title: "Compromisso", text: "Experiências inesquecíveis" },
                    { icon: "💜", title: "Propósito", text: "Alegria e conexão entre pessoas" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 border-2 border-[#ECEFF4] hover:border-[#5E81AC] transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-[#2E3440] mb-1">{item.title}</h3>
                          <p className="text-sm text-[#4C566A]">{item.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t-2 border-[#ECEFF4] text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-[#BF616A] fill-[#BF616A]" />
                  <p className="text-[#4C566A]">
                    Obrigado por fazer parte da história do FERVO!
                  </p>
                  <Heart className="w-5 h-5 text-[#BF616A] fill-[#BF616A]" />
                </div>
                <p className="text-sm text-[#4C566A]/70">
                  💙 Estilo Orkut • Perfil Nostálgico
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="mt-8 text-center">
            <p className="text-white/80 text-sm drop-shadow-lg">
              🔥 Festa FERVO — A festa que contagia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
