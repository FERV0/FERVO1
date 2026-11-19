"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Sparks } from "@/components/Sparks";

// Estrutura preparada para fotos reais
const albums = [
  {
    id: "1",
    title: "FERVO — Últimas Edições",
    date: "2024",
    photos: [
      // Estrutura preparada para adicionar fotos reais
      // { id: "1", url: "/photos/foto1.jpg", alt: "Festa FERVO" },
    ],
  },
];

interface Photo {
  id: string;
  url: string;
  alt: string;
}

export default function GaleriaPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const album = albums[0];
  const hasPhotos = album.photos.length > 0;

  const handlePrevPhoto = () => {
    if (album && album.photos.length > 0) {
      const newIndex = (photoIndex - 1 + album.photos.length) % album.photos.length;
      setPhotoIndex(newIndex);
      setSelectedPhoto(album.photos[newIndex]);
    }
  };

  const handleNextPhoto = () => {
    if (album && album.photos.length > 0) {
      const newIndex = (photoIndex + 1) % album.photos.length;
      setPhotoIndex(newIndex);
      setSelectedPhoto(album.photos[newIndex]);
    }
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
              <div className="mt-6 h-1 w-32 bg-gradient-to-r from-[#5E81AC] to-[#88C0D0] mx-auto rounded-full" />
            </div>

            {/* Photos Grid or Empty State */}
            {hasPhotos ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {album.photos.map((photo: Photo, index: number) => (
                  <motion.button
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setSelectedPhoto(photo);
                      setPhotoIndex(index);
                    }}
                    className="relative aspect-square bg-[#ECEFF4] rounded-lg border-2 border-[#D8DEE9] hover:border-[#5E81AC] transition-all hover:scale-105 overflow-hidden group"
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </motion.button>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-block mb-6"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#5E81AC] to-[#88C0D0] flex items-center justify-center">
                    <Camera className="w-12 h-12 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2E3440] mb-4">
                  Galeria em Preparação
                </h3>
                <p className="text-lg text-[#4C566A] max-w-md mx-auto mb-6">
                  As fotos das últimas edições serão adicionadas em breve.
                  Acompanhe nossas redes sociais para não perder nada!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://www.instagram.com/fervoficial?avpt=MWsxMDh5aXZmazMy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-[#5E81AC] to-[#81A1C1] text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    Ver no Instagram
                  </a>
                </div>
              </div>
            )}

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
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          {album && album.photos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevPhoto();
                }}
                className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextPhoto();
                }}
                className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </>
          )}

          {/* Photo */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
