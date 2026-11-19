"use client";

import { motion } from "framer-motion";
import { Instagram as InstagramIcon, ExternalLink, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

export default function InstagramPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] relative overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(131, 58, 180, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(253, 29, 29, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(252, 175, 69, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(131, 58, 180, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="relative inline-block mb-6"
            >
              {/* Instagram icon with gradient */}
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-50" />
                <div className="relative bg-white rounded-2xl p-6 shadow-2xl">
                  <InstagramIcon className="w-20 h-20 text-[#E1306C]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Floating hearts */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 80}px`,
                    top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 80}px`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Heart className="w-4 h-4 text-white fill-white" />
                </motion.div>
              ))}
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bebas tracking-wider text-white mb-4">
              SIGA O MOVIMENTO
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Fique por dentro das novidades, próximas edições, fotos e bastidores do Fervo.
            </p>
          </motion.div>

          {/* Instagram Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8"
          >
            {/* Profile Header */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                {/* Profile Picture */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-fervo-red to-fervo-orange flex items-center justify-center">
                        <span className="text-4xl font-bebas tracking-wider text-white">
                          F
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#E1306C] rounded-full flex items-center justify-center border-4 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </motion.div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    @fervoficial
                  </h2>
                  <p className="text-gray-600 mb-4">
                    🔥 A festa que contagia<br />
                    📍 Salvador, Bahia<br />
                    💃🕺 Desde [ano de fundação]
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-center md:justify-start gap-6 mb-6 text-center">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">—</p>
                      <p className="text-sm text-gray-600">publicações</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">—</p>
                      <p className="text-sm text-gray-600">seguidores</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">—</p>
                      <p className="text-sm text-gray-600">seguindo</p>
                    </div>
                  </div>

                  {/* Follow Button */}
                  <motion.a
                    href="https://www.instagram.com/fervoficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <InstagramIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    SEGUIR @FERVOFICIAL
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Highlights */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Destaques
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {["Fotos", "Vídeos", "Festas", "Bastidores", "Novidades", "Ingressos"].map(
                    (highlight, index) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-4 border-white shadow-md flex items-center justify-center">
                          <span className="text-2xl">
                            {["📸", "🎥", "🎉", "🎭", "🔥", "🎫"][index]}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 font-medium">
                          {highlight}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Instagram Feed Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Publicações Recentes
            </h3>

            {/* Mock Instagram Posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[1, 2, 3].map((post) => (
                <motion.div
                  key={post}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: post * 0.1 }}
                  className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2 text-white">
                      <Heart className="w-6 h-6 fill-white" />
                      <span className="font-bold">—</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <MessageCircle className="w-6 h-6 fill-white" />
                      <span className="font-bold">—</span>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <InstagramIcon className="w-16 h-16 text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-gray-600 mb-6">
              Siga-nos no Instagram para ver todas as publicações, stories e novidades em primeira mão!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.instagram.com/fervoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white rounded-lg font-bold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <InstagramIcon className="w-5 h-5" />
                Ver no Instagram
              </motion.a>

              <motion.a
                href="https://www.instagram.com/fervoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-lg font-bold hover:border-gray-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </motion.a>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl md:text-4xl font-bebas tracking-wider text-white mb-4">
                NÃO PERCA NENHUMA NOVIDADE
              </h3>
              <p className="text-white/90 mb-6">
                Stories diários, anúncios de próximas festas, fotos exclusivas e muito mais!
              </p>
              <motion.a
                href="https://www.instagram.com/fervoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E1306C] rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-6 h-6 fill-current" />
                SEGUIR AGORA
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
