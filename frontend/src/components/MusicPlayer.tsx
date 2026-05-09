import { motion } from 'motion/react';
import { Play, Pause, SkipForward, Volume2 } from 'lucide-react';
import { useMusic } from '../context/MusicContext';

export default function MusicPlayer() {
  const { currentSong, isPlaying, togglePlay, nextSong } = useMusic();

  if (!currentSong) return null;

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto zine-paper bg-amazon-pulp p-4 pointer-events-auto flex items-center justify-between gap-6 overflow-hidden">
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <div className="w-12 h-12 bg-amazon-dark shrink-0 overflow-hidden border border-amazon-dark">
            <img src={currentSong.image} alt={currentSong.title} className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <p className="font-bold uppercase truncate text-sm tracking-tight text-amazon-dark">{currentSong.title}</p>
            <p className="font-serif italic text-xs text-amazon-earth truncate">{currentSong.artist}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={togglePlay} className="p-2 border-2 border-amazon-dark bg-amazon-sand/20 hover:bg-amazon-sand transition-colors cursor-pointer text-amazon-dark">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button onClick={nextSong} className="p-2 hover:text-amazon-green transition-colors cursor-pointer text-amazon-dark">
            <SkipForward size={20} />
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3 w-32">
          <Volume2 size={16} className="text-amazon-earth" />
          <div className="flex-1 h-1 bg-amazon-dark/10 relative">
            <div className="absolute inset-0 bg-amazon-green w-2/3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
