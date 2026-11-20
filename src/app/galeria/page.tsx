"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Camera, Image as ImageIcon, Heart, MessageCircle, Share2 } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative z-10 py-8 md:py-12 px-3 md:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Modern Orkut-inspired Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 md:mb-8"
          >
            <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-4 md:p-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <Camera className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                  <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    GALERIA FERVO
                  </h1>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/5 rounded-lg border border-white/10">
                  <ImageIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-400" />
                  <span className="text-xs md:text-sm font-medium text-white/90">{totalPhotos} fotos</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Album Card with Orkut nostalgia + Apple elegance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden mb-6 md:mb-8"
          >
            {/* Album Header */}
            <div className="bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 border-b border-white/10 p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                    🔥 FESTA FERVO
                  </h2>
                  <p className="text-xs md:text-sm text-white/70">
                    Salvador, Bahia — Os melhores momentos
                  </p>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-orange-400">
                  <Heart className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-bold">{totalPhotos}</span>
                </div>
              </div>
            </div>

            {/* Photos Grid - Optimized with lazy loading */}
            <div className="p-3 md:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3">
                {fervoPhotos.map((photo, index) => (
                  <motion.button
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: Math.min(index * 0.01, 0.5) }}
                    onClick={() => handleOpenLightbox(index)}
                    className="group relative aspect-square bg-slate-700/50 rounded-lg md:rounded-xl overflow-hidden border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
                  >
                    {/* Loading placeholder */}
                    {!loadedImages.has(index) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80">
                        <Camera className="w-6 h-6 md:w-8 md:h-8 text-orange-400/50 animate-pulse" />
                      </div>
                    )}
                    
                    {/* Image */}
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onLoad={() => handleImageLoad(index)}
                    />
                    
                    {/* Hover overlay - Orkut inspired */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                        <div className="flex items-center justify-between text-white text-xs md:text-sm">
                          <div className="flex items-center gap-1 md:gap-1.5">
                            <Heart className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="font-medium">Ver</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-green-400 rounded-full animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Corner badge */}
                    <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-orange-500 rounded-full p-1 md:p-1.5 shadow-lg">
                        <ImageIcon className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Album Footer - Nostalgia touch */}
            <div className="border-t border-white/10 bg-slate-900/50 p-3 md:p-4">
              <div className="flex items-center justify-between text-xs md:text-sm text-white/60">
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <Heart className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Curtir</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Comentar</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Compartilhar</span>
                  </div>
                </div>
                <span className="text-[10px] md:text-xs">💙 Nostalgia 2000s</span>
              </div>
            </div>
          </motion.div>

          {/* Footer info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-white/40 text-xs md:text-sm"
          >
            <p>🔥 Festa FERVO — A festa que contagia Salvador</p>
          </motion.div>
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
