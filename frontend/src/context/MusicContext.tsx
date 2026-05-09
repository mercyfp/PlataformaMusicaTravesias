import { createContext, useContext, useState, ReactNode } from 'react';
import { Song } from '../types';

export const ALL_SONGS: Song[] = [
  { id: '1', title: 'Cantos de Lanza', artist: 'Herederos del Río', category: 'Tradicional', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop', url: '', duration: '4:20', genre: 'Folk' },
  { id: '2', title: 'Cumbia Selvática', artist: 'Sonido Amazonas', category: 'Popular', image: 'https://images.unsplash.com/photo-1514525253344-f814d0729586?q=80&w=400&auto=format&fit=crop', url: '', duration: '3:45', genre: 'Cumbia' },
  { id: '3', title: 'El Santo de la Selva', artist: 'Voces de Fe', category: 'Cristiana', image: 'https://images.unsplash.com/photo-1544691379-841140efc846?q=80&w=400&auto=format&fit=crop', url: '', duration: '5:12', genre: 'Gospel' },
  { id: '4', title: 'Amanecer Amazónico', artist: 'Eco Instrumental', category: 'Instrumental', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop', url: '', duration: '6:30', genre: 'Ambient' },
  { id: '5', title: 'Rey de Valle', artist: 'Nostalgia Vallenata', category: 'Vallenato', image: 'https://images.unsplash.com/photo-1415201375671-ec85368682e8?q=80&w=400&auto=format&fit=crop', url: '', duration: '4:15', genre: 'Vallenato' },
  { id: '6', title: 'Flor de María', artist: 'Mariachi Sur', category: 'Ranchera', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400&auto=format&fit=crop', url: '', duration: '3:50', genre: 'Rancho' },
  { id: '7', title: 'Bajo el Dosel', artist: 'Rítmico', category: 'Reggaetón', image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=400&auto=format&fit=crop', url: '', duration: '3:10', genre: 'Urbano' },
];

interface MusicContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  nextSong: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextSong = () => {
    if (!currentSong) return;
    const currentIndex = ALL_SONGS.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % ALL_SONGS.length;
    playSong(ALL_SONGS[nextIndex]);
  };

  return (
    <MusicContext.Provider value={{ currentSong, isPlaying, playSong, togglePlay, nextSong }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) throw new Error('useMusic must be used within a MusicProvider');
  return context;
}
