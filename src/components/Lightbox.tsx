"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  photos: Array<{ id: string; url: string; alt: string }>;
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  const currentPhoto = photos[currentIndex];

  // Navegação por teclado
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrevious, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Prevenir scroll do body quando lightbox está aberto
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Botão Fechar */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Fechar"
        >
          <X className="w-6 h-6 text-white" />
        </motion.button>

        {/* Contador de fotos */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
        >
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {photos.length}
          </span>
        </motion.div>

        {/* Botão Anterior */}
        {photos.length > 1 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm hidden md:block"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </motion.button>
        )}

        {/* Botão Próximo */}
        {photos.length > 1 && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm hidden md:block"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </motion.button>
        )}

        {/* Imagem */}
        <motion.div
          key={currentPhoto.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl w-full px-4 md:px-16"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentPhoto.url}
            alt={currentPhoto.alt}
            className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            loading="lazy"
          />
        </motion.div>

        {/* Navegação mobile - Swipe areas */}
        {photos.length > 1 && (
          <>
            <div
              className="absolute left-0 top-0 bottom-0 w-1/3 md:hidden"
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-1/3 md:hidden"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
