"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, Download, Share2, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import clsx from "clsx";

// Mock data - pode ser substituído por dados reais
const albums = [
  {
    id: "13",
    title: "FERVO #13",
    date: "Em breve",
    photos: [],
  },
  {
    id: "12",
    title: "FERVO #12",
    date: "Em breve",
    photos: [],
  },
  {
    id: "11",
    title: "FERVO #11",
    date: "Em breve",
    photos: [],
  },
  {
    id: "10",
    title: "FERVO #10",
    date: "Em breve",
    photos: [],
  },
];

interface Photo {
  id: string;
  url: string;
  alt: string;
}

export default function FotografiaPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const album = albums.find((a) => a.id === selectedAlbum);

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
    <div className="min-h-screen bg-gradient-to-b from-[#5E81AC] via-[#81A1C1] to-[#88C0D0] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Orkut-style Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-t-lg border-2 border-[#2E3440] shadow-lg overflow-hidden mb-0"
        >
          <div className="bg-gradient-to-r from-[#5E81AC] to-[#81A1C1] px-4 py-2 border-b-2 border-[#2E3440]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-[#BF616A]" />
                <div className="w-3 h-3 rounded-full bg-[#EBCB8B]" />
                <div className="w-3 h-3 rounded-full bg-[#A3BE8C]" />
              </div>
              <span className="text-white font-bold text-sm ml-2">
                FERVO — Álbum de Fotos
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-b-lg border-x-2 border-b-2 border-[#2E3440] shadow-lg p-8"
        >
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[#2E3440] mb-4 font-serif">
              LEMBRA DESSE DIA?
            </h1>
            <p className="text-lg text-[#4C566A]">
              Reviva os melhores momentos de cada edição do Fervo.
            </p>
            <div className="mt-6 h-1 w-32 bg-gradient-to-r from-[#5E81AC] to-[#88C0D0] mx-auto rounded-full" />
          </div>

          {/* Album Grid or Selected Album */}
          {!selectedAlbum ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {albums.map((album, index) => (
                <motion.button
                  key={album.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedAlbum(album.id)}
                  className="group relative bg-gradient-to-br from-[#5E81AC] to-[#81A1C1] rounded-lg p-6 border-2 border-[#2E3440] shadow-md hover:shadow-xl transition-all hover:scale-105 text-left overflow-hidden"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-[#EBCB8B] rounded-full opacity-70" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 bg-[#88C0D0] rounded-full opacity-70" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-white/90 rounded border-2 border-[#2E3440] flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-[#5E81AC]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {album.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {album.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-white/90 text-sm">
                      <span>
                        {album.photos.length === 0
                          ? "Em breve"
                          : `${album.photos.length} fotos`}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>

                  {/* Stickers/decorations */}
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#BF616A] rounded-full opacity-20 group-hover:scale-110 transition-transform" />
                </motion.button>
              ))}
            </div>
          ) : (
            <div>
              {/* Back Button */}
              <button
                onClick={() => {
                  setSelectedAlbum(null);
                  setSelectedPhoto(null);
                }}
                className="mb-6 flex items-center gap-2 text-[#5E81AC] hover:text-[#81A1C1] font-medium transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Voltar para álbuns
              </button>

              {/* Album Title */}
              <div className="mb-8 pb-6 border-b-2 border-[#ECEFF4]">
                <h2 className="text-3xl font-bold text-[#2E3440]">
                  {album?.title}
                </h2>
                <p className="text-[#4C566A] mt-2">{album?.date}</p>
              </div>

              {/* Photos Grid */}
              {album && album.photos.length > 0 ? (
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
                      className="relative aspect-square bg-[#ECEFF4] rounded border-2 border-[#D8DEE9] hover:border-[#5E81AC] transition-all hover:scale-105 overflow-hidden group"
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
                  <ImageIcon className="w-16 h-16 text-[#D8DEE9] mx-auto mb-4" />
                  <p className="text-xl text-[#4C566A] mb-2">
                    As fotos desta edição serão adicionadas em breve
                  </p>
                  <p className="text-[#4C566A]/70">
                    Fique ligado nas nossas redes sociais!
                  </p>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Decorative Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/80 text-sm">
            Uma janela para o passado • Estilo Orkut 2000s
          </p>
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

            {/* Actions */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white">
                <Download className="w-5 h-5" />
                Baixar
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white">
                <Share2 className="w-5 h-5" />
                Compartilhar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
