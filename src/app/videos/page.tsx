"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Play, X, Sparkles, Star } from "lucide-react";

// Mock data - pode ser substituído por dados reais
const videos = [
  {
    id: "1",
    title: "FERVO #13 — Aftermovie",
    edition: "13",
    thumbnail: "",
    videoUrl: "",
    duration: "Em breve",
  },
  {
    id: "2",
    title: "FERVO #12 — Aftermovie",
    edition: "12",
    thumbnail: "",
    videoUrl: "",
    duration: "Em breve",
  },
  {
    id: "3",
    title: "FERVO #11 — Aftermovie",
    edition: "11",
    thumbnail: "",
    videoUrl: "",
    duration: "Em breve",
  },
  {
    id: "4",
    title: "FERVO #10 — Aftermovie",
    edition: "10",
    thumbnail: "",
    videoUrl: "",
    duration: "Em breve",
  },
];

const highlights = [
  { id: "h1", title: "Melhores Momentos #13", duration: "Em breve" },
  { id: "h2", title: "Melhores Momentos #12", duration: "Em breve" },
  { id: "h3", title: "Melhores Momentos #11", duration: "Em breve" },
];

interface Video {
  id: string;
  title: string;
  edition: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0a0f] via-[#2d0a15] to-[#1a0a0f] relative overflow-hidden">
      {/* Stage Curtains */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-[#8B0000] to-transparent opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#8B0000] to-transparent opacity-40 pointer-events-none" />

      {/* Spotlights */}
      <div className="absolute top-0 left-1/4 w-32 h-64 bg-[#FFD700] opacity-10 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-0 right-1/4 w-32 h-64 bg-[#FFD700] opacity-10 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Stars decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Star className="w-3 h-3 text-[#FFD700] fill-[#FFD700]" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 relative"
          >
            {/* Marquee lights effect */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#FFD700]"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-bebas tracking-wider mb-4 relative">
              <span
                className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                }}
              >
                LUZ, CÂMERA... FERVO!
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-4">
              Acompanhe como foi a festa da Fervo
            </p>

            <div className="flex items-center justify-center gap-2">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#FFD700]"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: (6 - i) * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative bg-gradient-to-br from-[#8B0000] to-[#4B0000] rounded-2xl p-8 border-4 border-[#FFD700] shadow-2xl overflow-hidden">
              {/* Sparkles */}
              <Sparkles className="absolute top-4 right-4 w-8 h-8 text-[#FFD700] animate-pulse" />
              <Sparkles className="absolute bottom-4 left-4 w-6 h-6 text-[#FFD700] animate-pulse" style={{ animationDelay: "0.5s" }} />

              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-bebas tracking-wider text-[#FFD700] mb-4">
                  🎬 EM DESTAQUE
                </h2>

                {videos[0].videoUrl ? (
                  <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden group cursor-pointer">
                    {videos[0].thumbnail && (
                      <img
                        src={videos[0].thumbnail}
                        alt={videos[0].title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <button className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                      <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-[#8B0000] fill-[#8B0000] ml-1" />
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center border-2 border-dashed border-[#FFD700]/30">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-[#FFD700]/50 mx-auto mb-4" />
                      <p className="text-[#FFD700]/70 text-lg">
                        Próximo aftermovie em breve
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {videos[0].title}
                  </h3>
                  <p className="text-white/70">
                    {videos[0].duration}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* All Aftermovies */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bebas tracking-wider text-[#FFD700] mb-8 text-center"
            >
              ⭐ TODOS OS AFTERMOVIES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.slice(1).map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-[#2d0a15] to-[#1a0a0f] rounded-xl overflow-hidden border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all hover:scale-105 cursor-pointer"
                >
                  {video.videoUrl ? (
                    <>
                      {video.thumbnail && (
                        <div className="aspect-video bg-black/50 overflow-hidden">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-[#8B0000] fill-[#8B0000] ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-[#8B0000]/20 to-[#4B0000]/20 flex items-center justify-center">
                      <Play className="w-12 h-12 text-[#FFD700]/30" />
                    </div>
                  )}

                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1 group-hover:text-[#FFD700] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-white/50 text-sm">
                      {video.duration}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bebas tracking-wider text-[#FFD700] mb-8 text-center">
              ✨ MELHORES MOMENTOS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/5 rounded-xl p-6 border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all hover:scale-105 cursor-pointer text-center"
                >
                  <Star className="w-12 h-12 text-[#FFD700] fill-[#FFD700] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {highlight.duration}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stage Footer */}
          <div className="mt-16 text-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-block"
            >
              <p className="text-[#FFD700] text-lg font-bebas tracking-wider">
                🎭 A FESTA CONTINUA NO PALCO 🎭
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {selectedVideo.videoUrl ? (
                <iframe
                  src={selectedVideo.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-white">Vídeo não disponível</p>
                </div>
              )}
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedVideo.title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
