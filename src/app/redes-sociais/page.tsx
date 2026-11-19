"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, ExternalLink, Heart, Sparkles } from "lucide-react";
import { Sparks } from "@/components/Sparks";

export default function RedesSociaisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] relative overflow-hidden">
      {/* Sparks Animation */}
      <Sparks count={15} />

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
        <div className="max-w-4xl mx-auto">
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
              <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-white rounded-2xl p-6 shadow-2xl">
                <Instagram className="w-16 h-16 text-[#E1306C]" strokeWidth={1.5} />
              </div>

              {/* Floating hearts */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${50 + Math.cos((i * Math.PI * 2) / 6) * 60}px`,
                    top: `${50 + Math.sin((i * Math.PI * 2) / 6) * 60}px`,
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
                  <Heart className="w-3 h-3 text-white fill-white" />
                </motion.div>
              ))}
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bebas tracking-wider text-white mb-4">
              NOS SIGA NAS REDES SOCIAIS
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Fique por dentro de tudo sobre o FERVO
            </p>
          </motion.div>

          {/* Instagram Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8"
          >
            <div className="p-8 md:p-12">
              {/* Instagram Section */}
              <div className="text-center mb-12">
                <div className="inline-block p-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-2xl mb-6">
                  <Instagram className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  @fervoficial
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Novidades, próximas edições, fotos, bastidores e muito mais!
                </p>

                <motion.a
                  href="https://www.instagram.com/fervoficial?avpt=MWsxMDh5aXZmazMy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Instagram className="w-6 h-6" />
                  ACOMPANHAR NO INSTAGRAM
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Divider */}
              <div className="relative my-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-gray-500 text-sm font-medium">
                    OU
                  </span>
                </div>
              </div>

              {/* WhatsApp Section */}
              <div className="text-center">
                <div className="inline-block p-4 bg-[#25D366] rounded-2xl mb-6">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Dúvidas sobre a Festa FERVO?
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
                  Tem alguma dúvida sobre a festa, informações, horários ou próximas
                  edições? Entre em contato com nossa equipe pelo WhatsApp.
                </p>

                <motion.a
                  href="https://wa.me/5571992501011?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20festa%20fervo%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  FALAR PELO WHATSAPP
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bebas tracking-wider text-white mb-4">
                NÃO PERCA NENHUMA NOVIDADE
              </h3>
              <p className="text-white/90 text-lg">
                Stories diários, anúncios de próximas festas e muito mais! 🔥
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
