import Link from "next/link";
import { Flame, Instagram, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-fervo-black border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-fervo-red" />
              <span className="text-2xl font-bebas tracking-wider fire-text">
                FERVO
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              A festa que contagia Salvador, Bahia. Reviva os melhores momentos e
              garanta seu ingresso para as próximas edições.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Navegação</h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-white/60 hover:text-fervo-red transition-colors text-sm"
              >
                Início
              </Link>
              <Link
                href="/fotografia"
                className="block text-white/60 hover:text-fervo-red transition-colors text-sm"
              >
                Fotografia
              </Link>
              <Link
                href="/videos"
                className="block text-white/60 hover:text-fervo-red transition-colors text-sm"
              >
                Vídeos
              </Link>
              <Link
                href="/ingressos"
                className="block text-white/60 hover:text-fervo-red transition-colors text-sm"
              >
                Ingressos
              </Link>
              <Link
                href="/instagram"
                className="block text-white/60 hover:text-fervo-red transition-colors text-sm"
              >
                Instagram
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/fervoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-fervo-red transition-colors text-sm group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                @fervoficial
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />
                Salvador, Bahia
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} FERVO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
