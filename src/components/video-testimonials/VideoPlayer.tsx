
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  isPlaying: boolean;
  isMuted: boolean;
  onVideoClick: () => void;
  onMuteToggle: (e: React.MouseEvent) => void;
  videoRef: (element: HTMLVideoElement) => void;
}

export const VideoPlayer = ({
  videoUrl,
  thumbnail,
  isPlaying,
  isMuted,
  onVideoClick,
  onMuteToggle,
  videoRef
}: VideoPlayerProps) => {
  return (
    <div 
      className="relative cursor-pointer aspect-[9/16] w-full" 
      onClick={onVideoClick}
    >
      <video
        ref={videoRef}
        poster={thumbnail}
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/90 hover:bg-white"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/90 hover:bg-white"
            onClick={onMuteToggle}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};
