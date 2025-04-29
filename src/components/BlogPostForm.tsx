
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Image, PlusCircle, Tag, X } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

type FormData = {
  title: string;
  description: string;
  content: string;
  category: string;
  imageUrl: string;
};

interface BlogPostFormProps {
  onSubmit: (data: any) => void;
}

const BlogPostForm = ({ onSubmit }: BlogPostFormProps) => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const form = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
      content: '',
      category: '',
      imageUrl: '',
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPreviewImage(event.target.result.toString());
          form.setValue('imageUrl', file.name); // In a real app, this would be a proper URL
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addKeyword = () => {
    if (keywordInput.trim() && !keywords.includes(keywordInput.trim())) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput('');
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setKeywords(keywords.filter(kw => kw !== keywordToRemove));
  };

  const handleSubmitForm = (data: FormData) => {
    const finalData = {
      ...data,
      keywords,
      slug: data.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'),
      readTime: `${Math.max(1, Math.ceil(data.content.length / 1000))} min`,
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
    };
    
    onSubmit(finalData);
    toast({
      title: "Publicado com sucesso!",
      description: "Seu post foi publicado e já está disponível no blog.",
    });
    form.reset();
    setKeywords([]);
    setPreviewImage(null);
  };

  return (
    <Card className="p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Criar Novo Post</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmitForm)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Título do post" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Breve descrição do post" 
                    {...field}
                    rows={3}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Conteúdo</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Conteúdo do post..." 
                    {...field}
                    rows={10}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Metodologia, Doutorado..." {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <FormLabel>Imagem de Capa</FormLabel>
            <div className="flex items-center gap-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                <Image className="mr-2 h-4 w-4" />
                Selecionar Imagem
              </Button>
              <Input 
                id="image-upload" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageChange} 
              />
              {form.watch('imageUrl') && (
                <span className="text-sm text-gray-600">
                  {form.watch('imageUrl')}
                </span>
              )}
            </div>
            {previewImage && (
              <div className="mt-2">
                <img 
                  src={previewImage} 
                  alt="Preview" 
                  className="max-w-xs h-auto rounded-md" 
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <FormLabel>Palavras-chave</FormLabel>
            <div className="flex items-center gap-2">
              <Input 
                value={keywordInput} 
                onChange={(e) => setKeywordInput(e.target.value)}
                placeholder="Adicione palavras-chave"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
              />
              <Button type="button" onClick={addKeyword} variant="outline">
                <Tag className="mr-2 h-4 w-4" />
                Adicionar
              </Button>
            </div>
            {keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {keywords.map((keyword, index) => (
                  <div 
                    key={index} 
                    className="bg-science-blue text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm"
                  >
                    {keyword}
                    <X
                      className="h-4 w-4 cursor-pointer hover:text-gray-200"
                      onClick={() => removeKeyword(keyword)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button type="submit" className="bg-science-blue hover:bg-science-blue/90">
            <PlusCircle className="mr-2 h-5 w-5" />
            Publicar Post
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default BlogPostForm;
