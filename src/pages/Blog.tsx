
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, Filter, Search, PlusCircle, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { blogPosts as initialBlogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import BlogPostForm from '@/components/BlogPostForm';

// Categories for filter
const categories = Array.from(new Set(initialBlogPosts.map(post => post.category)));

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNewPost = (postData: any) => {
    setBlogPosts(prevPosts => [postData, ...prevPosts]);
    setShowNewPostForm(false);
  };

  return <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main>
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-science-dark mb-6 animate-slide-up">
                Blog <span className="text-gradient">
              </span>
              </h1>
              
              <p className="text-gray-600 max-w-2xl mx-auto">
                Artigos, dicas e recursos para ajudar você em sua jornada na pós-graduação em ciências exatas e experimentais.
              </p>
            </div>
            
            {/* Create New Post Button */}
            <div className="mb-8 flex justify-center">
              <Button 
                onClick={() => setShowNewPostForm(!showNewPostForm)} 
                className="bg-science-blue hover:bg-science-blue/90 flex items-center gap-2"
              >
                {showNewPostForm ? (
                  <>
                    <X className="h-5 w-5" />
                    Cancelar
                  </>
                ) : (
                  <>
                    <PlusCircle className="h-5 w-5" />
                    Novo Post
                  </>
                )}
              </Button>
            </div>

            {/* New Post Form */}
            {showNewPostForm && (
              <div className="mb-12">
                <BlogPostForm onSubmit={handleNewPost} />
              </div>
            )}
            
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
                  {Array.from(new Set(blogPosts.map(post => post.category))).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <Badge className="mb-2 bg-science-blue text-white hover:bg-science-blue/90">{post.category}</Badge>
                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold mb-2 hover:text-science-blue transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-science-blue hover:underline font-medium">
                          Ler mais <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-600">Nenhum artigo encontrado para os filtros selecionados.</p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
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
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Decorative Chemistry Icon */}
      <img src="/lovable-uploads/ef4383e1-a7b3-4b9b-a6c6-efcc680f41b6.png" alt="Chemistry Icon" className="fixed bottom-32 right-32 w-32 h-32 opacity-20 pointer-events-none" />
    </div>;
};

export default Blog;
