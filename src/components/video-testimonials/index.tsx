import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Testimonial, TestimonialFormValues } from './types';
import { TestimonialCard } from './TestimonialCard';
import { EditDialog } from './EditDialog';

const initialTestimonials: Testimonial[] = [
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
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});
  
  const form = useForm<TestimonialFormValues>({
    defaultValues: {
      clientName: '',
      role: '',
      quote: '',
      videoUrl: '',
      thumbnail: ''
    }
  });

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

  const openEditDialog = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    form.reset({
      clientName: testimonial.clientName,
      role: testimonial.role,
      quote: testimonial.quote,
      videoUrl: testimonial.videoUrl,
      thumbnail: testimonial.thumbnail
    });
    setIsEditDialogOpen(true);
  };

  const onSubmit = (data: TestimonialFormValues) => {
    if (editingTestimonial) {
      const updatedTestimonials = testimonials.map(t => 
        t.id === editingTestimonial.id ? { ...t, ...data } : t
      );
      setTestimonials(updatedTestimonials);
      setIsEditDialogOpen(false);
      setEditingTestimonial(null);
    }
  };

  const isDevelopment = process.env.NODE_ENV === 'development';

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
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isPlaying={activeVideo === testimonial.id && !videoRefs.current[testimonial.id]?.paused}
              isMuted={isMuted}
              onVideoClick={() => handleVideoClick(testimonial.id)}
              onMuteToggle={(e) => toggleMute(testimonial.id, e)}
              onEdit={() => openEditDialog(testimonial)}
              videoRef={(el) => { if (el) videoRefs.current[testimonial.id] = el }}
              isDevelopment={isDevelopment}
            />
          ))}
        </div>
      </div>

      {isDevelopment && (
        <EditDialog
          isOpen={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
          form={form}
          onSubmit={onSubmit}
        />
      )}
    </section>
  );
};

export default VideoTestimonials;
