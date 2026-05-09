import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, ChevronLeft, Play, Pause, Music, History } from 'lucide-react';
import { useMusic, ALL_SONGS } from '../context/MusicContext';

export default function MusicaPage() {
  const { playSong, currentSong, isPlaying } = useMusic();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  const categories = ['Todas', 'Popular', 'Vallenato', 'Ranchera', 'Reggaetón', 'Cristiana', 'Instrumental', 'Tradicional'];

  const filteredSongs = useMemo(() => {
    return ALL_SONGS.filter(song => {
      const matchesSearch = song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          song.artist.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todas' || song.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-12 text-amazon-dark">
      <header className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-amazon-clay font-bold mb-4">
              <ChevronLeft size={16} /> Volver
            </Link>
            <h2 className="text-5xl md:text-7xl uppercase font-bold tracking-tighter">Música</h2>
          </div>
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amazon-earth" size={20} />
            <input 
              type="text" 
              placeholder="Buscar canción o artista..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 bg-amazon-sand/20 border-2 border-amazon-dark outline-none font-serif italic text-lg focus:bg-white transition-all text-amazon-dark"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pb-4 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 border-2 border-amazon-dark font-display uppercase font-bold text-xs tracking-widest transition-all cursor-pointer ${
                selectedCategory === cat ? 'bg-amazon-dark text-amazon-pulp' : 'hover:bg-amazon-sand text-amazon-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSongs.map((song) => (
          <motion.div 
            layout
            key={song.id} 
            className="zine-paper group overflow-hidden flex flex-col bg-amazon-pulp"
          >
            <div className="aspect-square relative overflow-hidden bg-amazon-dark">
              <img 
                src={song.image} 
                alt={song.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-amazon-dark/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <button 
                  onClick={() => playSong(song)}
                  className="w-20 h-20 bg-amazon-pulp rounded-full flex items-center justify-center border-4 border-amazon-dark shadow-[4px_4px_0_0_#1a2f23] hover:scale-110 transition-transform cursor-pointer text-amazon-dark"
                >
                  {currentSong?.id === song.id && isPlaying ? <Pause size={32} /> : <Play size={32} />}
                </button>
              </div>
            </div>
            <div className="p-6 space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-amazon-clay">{song.category}</span>
                <span className="text-xs font-serif italic text-amazon-earth">{song.duration}</span>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight truncate leading-none">{song.title}</h3>
              <p className="font-serif italic text-amazon-earth">{song.artist}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredSongs.length === 0 && (
        <div className="text-center py-20 zine-paper border-dashed bg-amazon-pulp">
          <p className="text-2xl font-serif italic text-amazon-earth">No encontramos melodías para tu búsqueda...</p>
          <button onClick={() => { setSearchTerm(''); setSelectedCategory('Todas'); }} className="mt-4 zine-btn cursor-pointer">Limpiar filtros</button>
        </div>
      )}

      {/* --- Sección de Solicitudes --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 pt-12 border-t-4 border-amazon-dark">
        <section className="space-y-6">
          <h3 className="font-display uppercase font-bold tracking-widest text-amazon-clay flex items-center gap-2">
            <Music size={18} /> Solicitar una Canción
          </h3>
          <div className="zine-paper p-8 space-y-4 bg-amazon-pulp">
            <div className="space-y-2">
              <label className="font-display uppercase text-[10px] font-bold tracking-widest">Nombre del Tema</label>
              <input 
                type="text" 
                placeholder="Ej. El Canto del Colibrí"
                className="w-full p-4 border-2 border-amazon-dark bg-amazon-sand/10 outline-none font-serif italic text-lg focus:bg-white transition-all text-amazon-dark"
              />
            </div>
            <div className="space-y-2">
              <label className="font-display uppercase text-[10px] font-bold tracking-widest">Artista / Comunidad</label>
              <input 
                type="text" 
                placeholder="Ej. Grupo Raíces"
                className="w-full p-4 border-2 border-amazon-dark bg-amazon-sand/10 outline-none font-serif italic text-lg focus:bg-white transition-all text-amazon-dark"
              />
            </div>
            <button className="zine-btn zine-btn-primary w-full justify-center py-4 cursor-pointer">
              Enviar Solicitud Territorial
            </button>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="font-display uppercase font-bold tracking-widest text-amazon-clay flex items-center gap-2">
            <History size={18} /> Solicitudes Recientes
          </h3>
          <div className="zine-paper p-8 bg-amazon-sand/10 min-h-[300px]">
            <ul className="space-y-6">
              {[
                { title: 'Bambuco Amazónico', artist: 'Trío Selva', status: 'En Proceso' },
                { title: 'Cantos de Curación', artist: 'Abuelo José', status: 'Pendiente' },
              ].map((req, i) => (
                <li key={i} className="flex justify-between items-end border-b-2 border-amazon-dark/10 pb-4">
                  <div>
                    <p className="text-xl font-bold uppercase tracking-tight leading-none mb-1">{req.title}</p>
                    <p className="font-serif italic text-amazon-earth">{req.artist}</p>
                  </div>
                  <span className="zine-paper px-3 py-1 bg-amazon-sand text-[10px] font-display font-bold uppercase">{req.status}</span>
                </li>
              ))}
            </ul>
            <p className="text-center font-serif italic text-sm text-amazon-earth mt-8 opacity-60">
              Las solicitudes ayudan a expandir nuestra memoria sonora colectiva.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
