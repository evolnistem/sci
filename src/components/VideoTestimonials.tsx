
import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Play, Pause, Volume2, VolumeX, Edit } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface Testimonial {
  id: number;
  clientName: string;
  role: string;
  quote: string;
  videoUrl: string;
  thumbnail: string;
}

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

type TestimonialFormValues = Omit<Testimonial, 'id'>;

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
              className="overflow-hidden hover:shadow-lg transition-all duration-300 relative"
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
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                onClick={() => openEditDialog(testimonial)}
              >
                <Edit className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Editar Depoimento</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="clientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Cliente</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do Cliente" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cargo/Função</FormLabel>
                    <FormControl>
                      <Input placeholder="Cargo ou Função" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Depoimento</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="O que o cliente disse sobre nossos serviços" 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="videoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL do Vídeo</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/video.mp4" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL da Miniatura</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/thumbnail.jpg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Salvar Alterações</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoTestimonials;
