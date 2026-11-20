"use client";

import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import Image from "next/image";

// 6 fotos selecionadas para preview do Instagram
const instagramPhotos = [
  "/photos/5392F8DC-9935-4DE8-B731-4031C03A1B60.jpg",
  "/photos/24A14442-6065-4CC2-8E14-A7AC8BE790B2.jpg",
  "/photos/943CC2B0-A7E6-4F14-B981-87CFF1596D12.jpg",
  "/photos/973225E2-857E-4D01-89AB-20785087E9BD.jpg",
  "/photos/00C39D82-909E-4F44-8A8C-ACBD7CD95576.jpg",
  "/photos/16D48244-92ED-485A-806B-1F1F727CCCA5.jpg",
];

export function InstagramPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto"
    >
      {/* Header do Instagram */}
      <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Profile picture with logo placeholder */}
            <div className="w-16 h-16 rounded-full bg-black p-0.5 shadow-lg">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                {/* TODO: Substituir por logo FERVO oficial quando fornecida */}
                <span 
                  className="text-2xl font-bebas tracking-wider"
                  style={{
                    background: "linear-gradient(180deg, #fbbf24 0%, #f97316 50%, #ef4444 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  FERVO
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">FERVO</h3>
              <p className="text-white/90 text-sm">@fervoficial</p>
            </div>
          </div>
          <Instagram className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <div className="mb-6">
          <h4 className="text-gray-900 font-bold text-xl mb-2">
            A festa que contagia Salvador 🔥
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Acompanhe nossos stories diários, fique por dentro das próximas edições
            e reviva os melhores momentos da festa mais aguardada da Bahia!
          </p>
        </div>

        {/* Real photos preview grid */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {instagramPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-100 hover:border-[#FD1D1D] transition-colors"
            >
              <img
                src={photo}
                alt={`FERVO Festa ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-around py-4 border-t border-gray-100 mb-4">
          <div className="text-center">
            <p className="font-bold text-gray-900">🎉</p>
            <p className="text-xs text-gray-600 mt-1">Posts</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-900">🔥</p>
            <p className="text-xs text-gray-600 mt-1">Stories</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-900">💯</p>
            <p className="text-xs text-gray-600 mt-1">Eventos</p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://www.instagram.com/fervoficial?avpt=MWsxMDh5aXZmazMy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Instagram className="w-5 h-5" />
          VISITAR PERFIL
          <ExternalLink className="w-4 h-4" />
        </motion.a>

        {/* Description */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Clique para ver fotos, vídeos e muito mais no Instagram oficial
        </p>
      </div>
    </motion.div>
  );
}
