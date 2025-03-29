import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon } from '@heroicons/react/24/solid';

const mockSongs = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Luna Wave",
    cover: "https://picsum.photos/400/400?random=1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    color: "#6366F1"
  },
  {
    id: 2,
    title: "Summer Breeze",
    artist: "Solar Beats",
    cover: "https://picsum.photos/400/400?random=2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    color: "#EC4899"
  }
];

function App() {
  const [currentSong, setCurrentSong] = useState(mockSongs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto"
      >
        <h1 className="font-bold text-4xl text-center mb-8 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Music Wave
        </h1>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative aspect-square rounded-2xl overflow-hidden shadow-xl mb-8"
        >
          <img 
            src={currentSong.cover} 
            alt={currentSong.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="text-center mb-8">
          <h2 className="text-2xl mb-2">{currentSong.title}</h2>
          <p className="text-text/70">{currentSong.artist}</p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-surface hover:bg-surface/80"
          >
            <BackwardIcon className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-primary hover:bg-primary/90"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <PauseIcon className="w-8 h-8" />
            ) : (
              <PlayIcon className="w-8 h-8" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-surface hover:bg-surface/80"
          >
            <ForwardIcon className="w-6 h-6" />
          </motion.button>
        </div>

        <audio
          ref={audioRef}
          src={currentSong.audio}
          onEnded={() => setIsPlaying(false)}
        />
      </motion.div>
    </div>
  );
}

export default App;
