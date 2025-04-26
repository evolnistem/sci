
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import { Testimonial } from './types';
import { VideoPlayer } from './VideoPlayer';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isPlaying: boolean;
  isMuted: boolean;
  onVideoClick: () => void;
  onMuteToggle: (e: React.MouseEvent) => void;
  onEdit?: () => void;
  videoRef: (element: HTMLVideoElement) => void;
  isDevelopment?: boolean;
}

export const TestimonialCard = ({
  testimonial,
  isPlaying,
  isMuted,
  onVideoClick,
  onMuteToggle,
  onEdit,
  videoRef,
  isDevelopment = false,
}: TestimonialCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 relative flex flex-col">
      <VideoPlayer
        videoUrl={testimonial.videoUrl}
        thumbnail={testimonial.thumbnail}
        isPlaying={isPlaying}
        isMuted={isMuted}
        onVideoClick={onVideoClick}
        onMuteToggle={onMuteToggle}
        videoRef={videoRef}
      />
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg mb-2">{testimonial.clientName}</h3>
          <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
          <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
        </div>
      </div>
      {isDevelopment && onEdit && (
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={onEdit}
        >
          <Edit className="h-4 w-4" />
        </Button>
      )}
    </Card>
  );
};
