import { Link } from 'react-router-dom';
import { ChevronLeft, Music, User as UserIcon } from 'lucide-react';

export default function BibliotecaPage() {
  const artists = [
    { name: 'Herederos del Río', genre: 'Tradicional', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Sonido Amazonas', genre: 'Cumbia Selvática', image: 'https://images.unsplash.com/photo-1514525253344-f814d0729586?q=80&w=400&auto=format&fit=crop' },
    { name: 'Nostalgia Vallenata', genre: 'Vallenato', image: 'https://images.unsplash.com/photo-1415201375671-ec85368682e8?q=80&w=400&auto=format&fit=crop' },
  ];

  const albums = [
    { title: 'Sinfonía Amazónica', artist: 'Red Territorial', category: 'Ancestral', color: 'bg-amazon-leaf' },
    { title: 'Voces del Río', artist: 'Colectivo Selva', category: 'Popular', color: 'bg-amazon-earth' },
    { title: 'Clásicos del Valle', artist: 'Nostalgia Vallenata', category: 'Vallenato', color: 'bg-amazon-clay' },
  ];

  return (
    <div className="space-y-16 text-amazon-dark">
      <header className="flex justify-between items-end border-b-4 border-amazon-dark pb-6">
        <div>
           <Link to="/" className="flex items-center gap-2 font-display text-amazon-clay font-bold mb-4">
            <ChevronLeft size={16} /> Volver
          </Link>
          <h2 className="text-5xl md:text-6xl uppercase font-bold tracking-tighter">Biblioteca</h2>
        </div>
      </header>

      {/* Información de Artistas */}
      <section className="space-y-8">
        <h3 className="text-3xl font-bold uppercase tracking-tighter flex items-center gap-3">
          <UserIcon size={28} className="text-amazon-clay" /> Información de Artistas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, idx) => (
            <div key={idx} className="zine-paper group cursor-pointer bg-amazon-pulp">
              <div className="aspect-square relative overflow-hidden bg-amazon-dark border-b-2 border-amazon-dark">
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <h4 className="font-bold uppercase tracking-tight text-xl">{artist.name}</h4>
                <p className="font-serif italic text-amazon-clay">{artist.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Álbumes Musicales */}
      <section className="space-y-8">
        <h3 className="text-3xl font-bold uppercase tracking-tighter flex items-center gap-3">
          <Music size={28} className="text-amazon-green" /> Álbumes Musicales
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, idx) => (
            <div key={idx} className="zine-paper p-6 space-y-4 hover:shadow-[8px_8px_0_0_#1a2f23] transition-all bg-amazon-pulp">
              <div className={`aspect-square ${album.color} border-2 border-amazon-dark flex items-center justify-center`}>
                <Music size={48} className="text-amazon-pulp/40" />
              </div>
              <div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-amazon-clay">{album.category}</span>
                <h4 className="font-bold uppercase tracking-tight text-xl leading-none mt-1">{album.title}</h4>
                <p className="font-serif italic text-amazon-earth">{album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
