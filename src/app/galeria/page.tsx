"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Camera, Image as ImageIcon } from "lucide-react";
import { Sparks } from "@/components/Sparks";
import { Lightbox } from "@/components/Lightbox";
import { fervoPhotos, totalPhotos } from "@/data/photos";

export default function GaleriaPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      const newIndex = (selectedPhotoIndex - 1 + fervoPhotos.length) % fervoPhotos.length;
      setSelectedPhotoIndex(newIndex);
    }
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      const newIndex = (selectedPhotoIndex + 1) % fervoPhotos.length;
      setSelectedPhotoIndex(newIndex);
    }
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5E81AC] via-[#81A1C1] to-[#88C0D0] relative">
      {/* Sparks Animation */}
      <Sparks count={15} />

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
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
                  FERVO — Galeria de Fotos
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-b-xl border-x-2 border-b-2 border-[#2E3440] shadow-2xl p-8 md:p-12"
          >
            {/* Title Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-[#2E3440] mb-4 font-serif">
                GALERIA DA FESTA
              </h1>
              <p className="text-lg text-[#4C566A] mb-2">
                Reviva os melhores momentos de cada edição do FERVO
              </p>
              <div className="flex items-center justify-center gap-3 mt-4 mb-6">
                <ImageIcon className="w-5 h-5 text-[#5E81AC]" />
                <span className="text-[#4C566A] font-medium">
                  {totalPhotos} fotografias
                </span>
              </div>
              <div className="mt-6 h-1 w-32 bg-gradient-to-r from-[#5E81AC] to-[#88C0D0] mx-auto rounded-full" />
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {fervoPhotos.map((photo, index) => (
                <motion.button
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: Math.min(index * 0.02, 1) }}
                  onClick={() => handleOpenLightbox(index)}
                  className="relative aspect-square bg-[#ECEFF4] rounded-lg border-2 border-[#D8DEE9] hover:border-[#5E81AC] transition-all hover:scale-105 overflow-hidden group"
                >
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-8 h-8 text-[#5E81AC] animate-pulse" />
                    </div>
                  )}
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                      <ImageIcon className="w-4 h-4 text-[#5E81AC]" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Decorative footer */}
            <div className="mt-12 pt-8 border-t-2 border-[#ECEFF4] text-center">
              <p className="text-[#4C566A] text-sm">
                💙 Estilo Orkut • Nostalgia dos Anos 2000
              </p>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="mt-8 text-center">
            <p className="text-white/80 text-sm drop-shadow-lg">
              🔥 Festa FERVO — Salvador, Bahia
            </p>
          </div>
        </div>
      </div>

      {/* Photo Viewer Modal */}
      {selectedPhotoIndex !== null && (
        <Lightbox
          photos={fervoPhotos}
          currentIndex={selectedPhotoIndex}
          onClose={handleCloseLightbox}
          onPrevious={handlePrevPhoto}
          onNext={handleNextPhoto}
        />
      )}
    </div>
  );
}
