import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Music, Book, Leaf, History } from 'lucide-react';

export default function Home() {
  const popularSongs = [
    { title: 'Ritmo de la Selva', artist: 'Ancestral', views: '2.5k' },
    { title: 'Cantos de Lluvia', artist: 'Herederos', views: '1.8k' },
    { title: 'Voces de Orellana', artist: 'Comunidad', views: '1.2k' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-16"
    >
      {/* Banner Principal */}
      <section className="relative zine-paper p-0 overflow-hidden group" style={{ backgroundColor: 'var(--hero-bg)' }}>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1514525253344-f814d0729586?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
        <div className="relative p-12 md:p-20 flex flex-col items-center text-center space-y-6">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-24 bg-pulp rounded-full flex items-center justify-center text-amazon-green mb-4 shadow-[4px_4px_0_0_#4a7c44]"
            style={{ backgroundColor: 'var(--bg-color)' }}
          >
            <Music size={48} />
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-none" style={{ color: 'var(--hero-heading)' }}>
            Plataforma Musical <span className="text-amazon-clay italic">Travesías</span>
          </h2>
          <p className="max-w-xl mx-auto text-xl font-serif italic" style={{ color: 'var(--hero-text)' }}>
            "Disfruta y escucha tu música favorita desde la comunidad de Travesías."
          </p>
        </div>
      </section>

      {/* Accesos Rápidos */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/musica" className="zine-tab group bg-amazon-green text-amazon-pulp border-amazon-pulp hover:shadow-[8px_8px_0_0_#1a2f23]">
          <div className="flex items-center justify-between p-4">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold uppercase tracking-tight">Escuchar Música</h3>
              <p className="font-serif italic text-amazon-sand/70">Explora los ritmos del territorio</p>
            </div>
            <Music size={56} className="opacity-40 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>
        <Link to="/biblioteca" className="zine-tab group bg-amazon-clay text-amazon-pulp border-amazon-pulp hover:shadow-[8px_8px_0_0_#1a2f23]">
          <div className="flex items-center justify-between p-4">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold uppercase tracking-tight">Explorar Biblioteca</h3>
              <p className="font-serif italic text-amazon-sand/70">Documentación y saberes locales</p>
            </div>
            <Book size={56} className="opacity-40 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>
      </section>

      {/* Música Recomendada */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-amazon-dark">
        {/* Canciones Populares */}
        <section className="lg:col-span-1 space-y-6">
          <h3 className="font-display uppercase font-bold tracking-widest text-amazon-clay flex items-center gap-2">
            <Leaf size={18} /> Canciones Populares
          </h3>
          <div className="zine-paper p-6 space-y-4 bg-amazon-pulp">
            {popularSongs.map((song, i) => (
              <div key={i} className="flex items-center justify-between border-b border-amazon-dark/10 pb-3 group cursor-pointer hover:bg-amazon-sand/10">
                <div className="flex items-center gap-4">
                  <span className="font-display font-bold text-amazon-earth">{i+1}</span>
                  <div>
                    <p className="font-bold uppercase text-sm leading-none">{song.title}</p>
                    <p className="font-serif italic text-xs text-amazon-earth">{song.artist}</p>
                  </div>
                </div>
                <span className="text-[10px] font-display font-bold text-amazon-clay">{song.views}</span>
              </div>
            ))}
            <Link to="/musica" className="block text-center text-xs font-bold uppercase tracking-tighter hover:text-amazon-green py-2 text-amazon-dark">Ver todas</Link>
          </div>
        </section>

        {/* Álbumes Destacados */}
        <section className="lg:col-span-2 space-y-6">
          <h3 className="font-display uppercase font-bold tracking-widest text-amazon-clay flex items-center gap-2">
            <Music size={18} /> Álbumes Destacados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Sinfonía Amazónica', artist: 'Red Territorial', color: 'bg-amazon-leaf' },
              { title: 'Voces del Río', artist: 'Colectivo Selva', color: 'bg-amazon-earth' },
            ].map((album, idx) => (
              <div key={idx} className="zine-paper p-4 group cursor-pointer bg-amazon-pulp">
                <div className={`aspect-square ${album.color} border-2 border-amazon-dark mb-4 flex items-center justify-center group-hover:scale-[1.02] transition-transform`}>
                  <Music size={64} className="text-amazon-pulp/40" />
                </div>
                <h4 className="font-bold uppercase tracking-tight">{album.title}</h4>
                <p className="font-serif italic text-amazon-earth">{album.artist}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Música Reciente */}
      <section className="space-y-6 text-amazon-dark">
        <h3 className="font-display uppercase font-bold tracking-widest text-amazon-clay flex items-center gap-2">
          <History size={18} /> Música Reciente
        </h3>
        <div className="zine-paper p-8 bg-amazon-sand/10 border-dashed">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-amazon-dark shrink-0 flex items-center justify-center text-amazon-pulp font-display font-bold text-4xl">
              NEW
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold uppercase">Mañana en el Territorio</h4>
              <p className="font-serif italic text-amazon-earth">Un viaje sonoro por el despertar de la comunidad de Travesías.</p>
            </div>
            <button className="zine-btn zine-btn-primary">Escuchar ahora</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
