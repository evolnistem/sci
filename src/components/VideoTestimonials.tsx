
import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface Testimonial {
  id: number;
  clientName: string;
  role: string;
  quote: string;
  videoUrl: string;
  thumbnail: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: "Dra. Maria Silva",
    role: "Pesquisadora em Química Orgânica",
    quote: "O suporte na análise dos dados espectroscópicos foi fundamental para o sucesso da minha pesquisa.",
    videoUrl: "https://player.vimeo.com/video/824804225",
    thumbnail: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=1470"
  },
  {
    id: 2,
    clientName: "Dr. João Santos",
    role: "Professor de Física Quântica",
    quote: "A análise de dados avançada permitiu insights cruciais para nossa pesquisa em computação quântica.",
    videoUrl: "https://player.vimeo.com/video/824804225",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471"
  },
  {
    id: 3,
    clientName: "Dra. Ana Oliveira",
    role: "Pesquisadora em Nanotecnologia",
    quote: "O suporte técnico e a expertise em análise de dados foram essenciais para nossa publicação.",
    videoUrl: "https://player.vimeo.com/video/824804225",
    thumbnail: "https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?auto=format&fit=crop&q=80&w=1470"
  }
];

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  const handleVideoClick = (id: number) => {
    if (activeVideo === id) {
      const video = videoRefs.current[id];
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    } else {
      if (activeVideo !== null) {
        videoRefs.current[activeVideo]?.pause();
      }
      setActiveVideo(id);
      const video = videoRefs.current[id];
      video.play();
    }
  };

  const toggleMute = (id: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const video = videoRefs.current[id];
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Depoimentos dos <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre nossa consultoria e serviços de análise de dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="relative cursor-pointer aspect-video" 
                onClick={() => handleVideoClick(testimonial.id)}
              >
                <video
                  ref={el => { if (el) videoRefs.current[testimonial.id] = el }}
                  poster={testimonial.thumbnail}
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={testimonial.videoUrl} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/90 hover:bg-white"
                    >
                      {activeVideo === testimonial.id && !videoRefs.current[testimonial.id]?.paused 
                        ? <Pause className="h-4 w-4" /> 
                        : <Play className="h-4 w-4" />
                      }
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/90 hover:bg-white"
                      onClick={(e) => toggleMute(testimonial.id, e)}
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{testimonial.clientName}</h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
