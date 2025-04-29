import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from '@/data/blogPosts';
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any | undefined>(undefined);
  
  useEffect(() => {
    // First, check user posts from localStorage
    const userPosts = JSON.parse(localStorage.getItem('userBlogPosts') || '[]');
    const foundUserPost = userPosts.find((p: any) => p.slug === slug);
    
    if (foundUserPost) {
      setPost(foundUserPost);
    } else {
      // If not found in user posts, look in fixed blog posts
      const foundFixedPost = blogPosts.find(p => p.slug === slug);
      setPost(foundFixedPost);
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle case where post is not found
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
            <p className="mb-6">O artigo que você está procurando não existe ou foi removido.</p>
            <Link to="/blog" className="text-science-blue hover:underline">
              Voltar para o blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      }).catch(err => {
        console.error('Erro ao compartilhar:', err);
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copiado!",
        description: "O link do artigo foi copiado para a área de transferência.",
      });
    }
  };

  const handleSave = () => {
    toast({
      title: "Artigo salvo!",
      description: "O artigo foi salvo nos seus favoritos.",
    });
  };

  const handleLike = () => {
    toast({
      title: "Obrigado pelo feedback!",
      description: "Você gostou deste artigo.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <article className="py-12">
          {/* Hero section */}
          <div className="bg-gray-50 py-12 mb-12">
            <div className="container-custom">
              <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-science-blue mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para o blog
              </Link>
              
              <Badge className="mb-4 bg-science-blue hover:bg-science-blue/90">
                {post.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center space-x-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime} de leitura</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/lovable-uploads/73627472-8c69-48ea-97f0-eaee4e02fb49.jpg" alt="Dr. Eduardo Volnistem" />
                  <AvatarFallback>EV</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Dr. Eduardo Volnistem</div>
                  <div className="text-sm text-gray-500">Doutor em Física</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="container-custom mb-12">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Article content */}
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Social sharing sidebar */}
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24 flex flex-col items-center space-y-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleShare}
                    className="rounded-full hover:bg-gray-100"
                  >
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleSave}
                    className="rounded-full hover:bg-gray-100"
                  >
                    <Bookmark className="h-5 w-5 text-gray-600" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleLike}
                    className="rounded-full hover:bg-gray-100"
                  >
                    <ThumbsUp className="h-5 w-5 text-gray-600" />
                  </Button>
                </div>
              </aside>
              
              {/* Main content */}
              <div className="lg:col-span-8">
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-xl text-gray-600 mb-8">
                    {post.description}
                  </p>
                  
                  <div className="content">
                    {post.content ? (
                      <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
                    ) : (
                      <>
                        <h2>Introdução</h2>
                        <p>
                          Na comunidade acadêmica atual, especialmente nas áreas de ciências exatas e experimentais, 
                          a publicação de artigos em periódicos renomados é um marco essencial na carreira de qualquer pesquisador. 
                          No entanto, o caminho para uma publicação bem-sucedida é frequentemente repleto de desafios e incertezas.
                        </p>
                        
                        <p>
                          Este artigo explora os principais aspectos relacionados a {post.title.toLowerCase()}, 
                          fornecendo insights valiosos baseados em nossa experiência de mais de uma década na área acadêmica 
                          e na orientação de estudantes de pós-graduação.
                        </p>
                        
                        <h2>Desenvolvimento</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                          Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. 
                          Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
                          Suspendisse dictum feugiat nisl ut dapibus.
                        </p>
                        
                        <h2>Conclusão</h2>
                        <p>
                          Em resumo, o processo de {post.title.toLowerCase()} requer atenção a múltiplos fatores 
                          que influenciam diretamente as chances de aceitação do manuscrito. 
                          Através de uma abordagem metódica e estratégica, pesquisadores podem aumentar significativamente 
                          a probabilidade de ter seus trabalhos aceitos em periódicos de alto impacto, 
                          contribuindo assim para o avanço do conhecimento científico em suas respectivas áreas.
                        </p>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Author bio */}
                <Separator className="my-12" />
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/lovable-uploads/73627472-8c69-48ea-97f0-eaee4e02fb49.jpg" alt="Dr. Eduardo Volnistem" />
                      <AvatarFallback>EV</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Sobre o autor</h3>
                      <p className="text-gray-600 mb-3">
                        Dr. Eduardo Volnistem é Doutor em Física com especialização em física experimental e ciência de materiais. 
                        Com mais de 10 anos de experiência em pesquisa acadêmica e 30+ artigos publicados em periódicos internacionais.
                      </p>
                      <Button variant="outline" className="text-science-blue border-science-blue hover:bg-science-blue/10">
                        Ver perfil completo
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Social actions for mobile */}
                <div className="flex justify-center space-x-4 mt-8 lg:hidden">
                  <Button 
                    variant="outline" 
                    onClick={handleShare}
                    className="rounded-full hover:bg-gray-100"
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Compartilhar
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleSave}
                    className="rounded-full hover:bg-gray-100"
                  >
                    <Bookmark className="h-5 w-5 mr-2" />
                    Salvar
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleLike}
                    className="rounded-full hover:bg-gray-100"
                  >
                    <ThumbsUp className="h-5 w-5 mr-2" />
                    Curtir
                  </Button>
                </div>
              </div>
              
              {/* Related posts sidebar */}
              <aside className="lg:col-span-3">
                <div className="sticky top-24">
                  <h3 className="text-lg font-bold mb-6">Artigos relacionados</h3>
                  <div className="space-y-6">
                    {/* Get user posts from localStorage */}
                    {JSON.parse(localStorage.getItem('userBlogPosts') || '[]')
                      .filter((p: any) => p.slug !== slug && p.category === post.category)
                      .slice(0, 3)
                      .map((relatedPost: any, index: number) => (
                        <div key={index} className="flex space-x-4">
                          <div className="flex-shrink-0 w-24 h-16 bg-gray-200 rounded overflow-hidden">
                            <img 
                              src={relatedPost.imageUrl} 
                              alt={relatedPost.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm line-clamp-2 mb-1">
                              <Link to={`/blog/${relatedPost.slug}`} className="hover:text-science-blue">
                                {relatedPost.title}
                              </Link>
                            </h4>
                            <div className="text-xs text-gray-500">{relatedPost.date}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-bold mb-6">Categorias</h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(JSON.parse(localStorage.getItem('userBlogPosts') || '[]').map((p: any) => p.category)))
                        .filter(Boolean)
                        .map((category, index) => (
                        <Link key={index} to={`/blog?category=${category}`}>
                          <Badge variant="outline" className="bg-gray-50 hover:bg-gray-100">
                            {category}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
