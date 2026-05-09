import { ReactNode } from 'react';
import Navbar from './Navbar';
import MusicPlayer from './MusicPlayer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 zine-texture relative">
      <Navbar />
      <main className="max-w-5xl mx-auto min-h-[70vh]">
        {children}
      </main>
      <MusicPlayer />
      <footer className="max-w-5xl mx-auto mt-20 pt-12 pb-24 border-t-2 border-amazon-dark flex flex-col md:flex-row justify-between items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
        <div className="space-y-2">
          <h3 className="text-xl font-bold uppercase tracking-widest text-amazon-green">Travesías</h3>
          <p className="font-serif italic text-amazon-dark">Red Territorial Amazonía © 2026</p>
        </div>
        <div className="flex gap-8 font-display text-sm uppercase font-bold tracking-widest text-amazon-dark">
          <a href="#" className="hover:text-amazon-clay">Contacto</a>
          <a href="#" className="hover:text-amazon-clay">Términos</a>
          <a href="#" className="hover:text-amazon-clay">Comunidad</a>
        </div>
        <div className="font-display text-xs text-amazon-earth uppercase font-bold">
          Preservando el saber, cultivando la historia.
        </div>
      </footer>
    </div>
  );
}
