
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, Filter, Search, PlusCircle, X, Trash2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { blogPosts as initialBlogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import BlogPostForm from '@/components/BlogPostForm';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";

// Categories for filter
const categories = Array.from(new Set(initialBlogPosts.map(post => post.category)));

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [showOnlyUserPosts, setShowOnlyUserPosts] = useState(true);

  // Load posts from localStorage on component mount
  useEffect(() => {
    const userPosts = JSON.parse(localStorage.getItem('userBlogPosts') || '[]');
    setBlogPosts(userPosts);
  }, []);

  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNewPost = (postData: any) => {
    // Add the new post to the state
    const updatedPosts = [postData, ...blogPosts];
    setBlogPosts(updatedPosts);
    
    // Save to localStorage
    localStorage.setItem('userBlogPosts', JSON.stringify(updatedPosts));
    
    setShowNewPostForm(false);
    toast({
      title: "Post criado com sucesso",
      description: "Seu post foi adicionado à lista."
    });
  };

  const handleDeletePost = (slug: string) => {
    const updatedPosts = blogPosts.filter(post => post.slug !== slug);
    setBlogPosts(updatedPosts);
    
    // Update localStorage
    localStorage.setItem('userBlogPosts', JSON.stringify(updatedPosts));
    
    toast({
      title: "Post excluído",
      description: "O post foi excluído com sucesso."
    });
  };

  return <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main>
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-science-dark mb-6 animate-slide-up">
                Blog <span className="text-gradient"></span>
              </h1>
              
              <p className="text-gray-600 max-w-2xl mx-auto">
                Seus artigos criados
              </p>
            </div>
            
            {/* Create New Post Button */}
            <div className="mb-8 flex justify-center">
              <Button onClick={() => setShowNewPostForm(!showNewPostForm)} className="bg-science-blue hover:bg-science-blue/90 flex items-center gap-2">
                {showNewPostForm ? <>
                    <X className="h-5 w-5" />
                    Cancelar
                  </> : <>
                    <PlusCircle className="h-5 w-5" />
                    Novo Post
                  </>}
              </Button>
            </div>

            {/* New Post Form */}
            {showNewPostForm && <div className="mb-12">
                <BlogPostForm onSubmit={handleNewPost} />
              </div>}
            
            {/* Search and Filter */}
            <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-1/2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" placeholder="Buscar artigos..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-science-blue focus:border-transparent" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
              
              <div className="flex items-center space-x-2 w-full md:w-auto">
                <Filter className="h-5 w-5 text-gray-500" />
                <select className="border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-science-blue focus:border-transparent" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                  <option value="">Todas as categorias</option>
                  {Array.from(new Set(blogPosts.map(post => post.category))).map(category => <option key={category} value={category}>{category}</option>)}
                </select>
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? filteredPosts.map((post, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                    <Badge className="absolute top-3 right-3 bg-science-blue/90">{post.category}</Badge>
                    
                    {/* Delete Button */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="icon" className="absolute top-3 left-3 h-8 w-8 rounded-full">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Esta ação não pode ser desfeita. Isso excluirá permanentemente o artigo "{post.title}".
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDeletePost(post.slug)} className="bg-red-500 hover:bg-red-600">
                            Excluir
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">{post.description}</p>
                    
                    {post.keywords && post.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2 mb-4">
                        {post.keywords.map((tag: string, i: number) => (
                          <Badge key={i} variant="outline" className="bg-gray-100 text-gray-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-science-blue hover:underline mt-2">
                      Ler artigo <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>) : <div className="col-span-full text-center py-12">
                  <p className="text-gray-600">
                    {blogPosts.length === 0 
                      ? "Você ainda não criou nenhum post. Que tal criar o primeiro?" 
                      : "Nenhum artigo encontrado para os filtros selecionados."}
                  </p>
                </div>}
            </div>
            
            {/* Pagination (only show if there are multiple posts) */}
            {filteredPosts.length > 6 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationLink href="#" aria-disabled={true} className="text-gray-400 pointer-events-none">
                        Anterior
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">Próxima</PaginationLink>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Decorative Chemistry Icon */}
      <img src="/lovable-uploads/ef4383e1-a7b3-4b9b-a6c6-efcc680f41b6.png" alt="Chemistry Icon" className="fixed bottom-32 right-32 w-32 h-32 opacity-20 pointer-events-none" />
    </div>;
};
export default Blog;
