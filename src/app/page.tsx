"use client";

import { motion } from "framer-motion";
import { Flame, Camera, Ticket, Instagram as InstagramIcon, User, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { FireHero } from "@/components/FireHero";
import { InstagramPreview } from "@/components/InstagramPreview";
import { useState } from "react";

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

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
          {/* SECTION 1: HERO - Impactful opener */}
          <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                >
                  <Flame className="w-20 h-20 md:w-24 md:h-24 text-fervo-red mx-auto mb-6 animate-fire-flicker drop-shadow-2xl" />
                </motion.div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas tracking-wider leading-tight">
                  <span className="fire-text drop-shadow-2xl">A FESTA QUE</span>
                  <br />
                  <span className="fire-text drop-shadow-2xl">CONTAGIA SALVADOR</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
                  Onde cada edição se torna uma memória inesquecível.
                  <br />
                  <strong className="text-fervo-orange">Entre no ritmo, sinta a energia.</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <Link
                    href="/ingressos"
                    className="group relative px-8 py-4 bg-fervo-red hover:bg-fervo-red/90 rounded-lg font-bold text-lg tracking-wide transition-all glow-red hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      GARANTIR MEU INGRESSO
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <a
                    href="https://t.me/+ICMwEufRgmNkNjAx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-bold text-lg tracking-wide transition-all hover:scale-105"
                  >
                    ASSISTIR AFTERMOVIES
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Animated particles background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-fervo-orange rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </section>

          {/* SECTION 2: SOBRE FERVO - Project description */}
          <section className="py-20 px-4 bg-gradient-to-b from-fervo-black via-fervo-red/5 to-fervo-black relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <Sparkles className="w-12 h-12 text-fervo-orange mx-auto" />
                <h2 className="text-4xl md:text-6xl font-bebas tracking-wider">
                  <span className="fire-text">O QUE É O FERVO?</span>
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
                  <p>
                    <strong className="text-white">FERVO</strong> é mais do que uma festa —
                    é uma experiência que transforma Salvador em um palco de energia,
                    música e conexões verdadeiras.
                  </p>
                  <p>
                    Cada edição é cuidadosamente preparada para criar momentos únicos,
                    onde a música eletrônica encontra a alegria baiana em uma celebração
                    que fica marcada na memória de todos que participam.
                  </p>
                  <p className="text-fervo-orange font-medium">
                    🔥 Seja parte dessa história. A próxima edição está chegando! 🔥
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Gradient orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-fervo-red/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-fervo-orange/20 rounded-full blur-3xl" />
          </section>

          {/* SECTION 3: GALERIA PREVIEW - with button */}
          <section className="py-20 px-4 bg-gradient-to-b from-fervo-black to-fervo-red/10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Camera className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h2 className="text-4xl md:text-6xl font-bebas tracking-wider mb-4">
                  <span className="fire-text">REVIVA OS MOMENTOS</span>
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Cada foto conta uma história. Cada história é parte do FERVO.
                </p>
              </motion.div>

              {/* Gallery preview grid - FOTOS REAIS */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
              >
                {[
                  "/FERVO1/fotos/00C39D82-909E-4F44-8A8C-ACBD7CD95576.jpg",
                  "/FERVO1/fotos/16D48244-92ED-485A-806B-1F1F727CCCA5.jpg",
                  "/FERVO1/fotos/1C64BC20-EF77-4F76-9B00-BA56BFEF91B3.jpg",
                  "/FERVO1/fotos/24A14442-6065-4CC2-8E14-A7AC8BE790B2.jpg"
                ].map((photo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-square rounded-lg border border-white/10 hover:border-fervo-red/50 transition-all hover:scale-105 overflow-hidden group"
                  >
                    <img
                      src={photo}
                      alt={`Festa FERVO - Momento ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link
                  href="/galeria"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-bold text-lg tracking-wide transition-all hover:scale-105 glow-purple"
                >
                  VER GALERIA COMPLETA
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </section>

          {/* SECTION 4: INGRESSOS - with button */}
          <section className="py-20 px-4 bg-gradient-to-b from-fervo-red/10 to-fervo-black">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-fervo-red/20 to-fervo-orange/10 border border-fervo-red/30 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm"
              >
                <Ticket className="w-16 h-16 text-fervo-red mx-auto mb-6 animate-pulse" />
                <h2 className="text-4xl md:text-6xl font-bebas tracking-wider fire-text mb-4">
                  PRÓXIMA EDIÇÃO EM BREVE
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Fique ligado nas nossas redes sociais para não perder nenhuma novidade.
                  A próxima festa está sendo preparada com muito carinho.
                </p>
                <Link
                  href="/ingressos"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-fervo-red hover:bg-fervo-red/90 rounded-lg font-bold text-lg tracking-wide transition-all hover:scale-105 glow-red"
                >
                  <Ticket className="w-5 h-5" />
                  GARANTIR MEU INGRESSO
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </section>

          {/* SECTION 5: CEO PREVIEW - with button */}
          <section className="py-20 px-4 bg-gradient-to-b from-fervo-black to-[#2E5090]/20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <User className="w-12 h-12 text-blue-400 mx-auto" />
                <h2 className="text-4xl md:text-6xl font-bebas tracking-wider">
                  <span className="fire-text">CONHEÇA QUEM ESTÁ POR TRÁS</span>
                </h2>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                  <strong className="text-white">Binho Gomes</strong> é o CEO e
                  fundador do FERVO, responsável por criar experiências inesquecíveis que
                  contagiam Salvador com energia e música.
                </p>
                <Link
                  href="/ceo"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-bold text-lg tracking-wide transition-all hover:scale-105"
                >
                  <User className="w-5 h-5" />
                  CONHEÇA O CEO
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </section>

          {/* SECTION 6: REDES SOCIAIS - Instagram integration */}
          <section className="py-20 px-4 bg-gradient-to-b from-[#2E5090]/20 to-fervo-black">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <InstagramIcon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h2 className="text-4xl md:text-6xl font-bebas tracking-wider mb-4">
                  <span className="fire-text">SIGA O FERVO</span>
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Acompanhe nosso dia a dia, fique por dentro das novidades e reviva os melhores momentos
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <InstagramPreview />
              </motion.div>
            </div>
          </section>

          {/* SECTION 7: RODAPÉ - Complete footer */}
          <footer className="py-16 px-4 bg-gradient-to-t from-fervo-black via-fervo-red/10 to-fervo-black border-t border-fervo-red/20">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* About */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Flame className="w-10 h-10 text-fervo-red mb-4" />
                  <h3 className="text-2xl font-bebas tracking-wider text-white mb-3">FERVO</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    A festa que contagia Salvador. Experiências inesquecíveis, música e energia.
                  </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
                  <ul className="space-y-2">
                    {[
                      { label: "Início", href: "/" },
                      { label: "Galeria", href: "/galeria" },
                      { label: "Ingressos", href: "/ingressos" },
                      { label: "CEO", href: "/ceo" },
                      { label: "Redes Sociais", href: "/redes-sociais" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-white/60 hover:text-fervo-red transition-colors text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Social */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
                  <div className="space-y-3">
                    <a
                      href="https://www.instagram.com/fervoficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/60 hover:text-pink-400 transition-colors text-sm"
                    >
                      <InstagramIcon className="w-4 h-4" />
                      @fervoficial
                    </a>
                    <a
                      href="https://t.me/+ICMwEufRgmNkNjAx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/60 hover:text-blue-400 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      Telegram
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Bottom bar */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border-t border-white/10 pt-8 text-center"
              >
                <p className="text-white/40 text-sm">
                  © {new Date().getFullYear()} FERVO. Salvador, Bahia. Todos os direitos reservados.
                </p>
              </motion.div>
            </div>
          </footer>

        </motion.div>
      )}
    </div>
  );
}
