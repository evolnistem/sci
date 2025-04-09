
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, Filter, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

// Using the same blog posts from BlogSection
const blogPosts = [
  {
    title: "Como escolher o orientador ideal para sua dissertação",
    category: "Mestrado",
    description: "Dicas práticas para encontrar um orientador que se alinhe com seus objetivos de pesquisa e estilo de trabalho.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min",
    date: "15 Mar 2025"
  },
  {
    title: "Publicação científica: estratégias para aumentar suas chances de aceitação",
    category: "Publicações",
    description: "Aprenda como estruturar seu artigo e responder efetivamente às revisões para maximizar suas chances de publicação.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min",
    date: "02 Abr 2025"
  },
  {
    title: "Equilibrando vida pessoal e acadêmica durante o doutorado",
    category: "Doutorado",
    description: "Estratégias para manter a saúde mental e o bem-estar enquanto gerencia as demandas rigorosas da pesquisa de doutorado.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min",
    date: "28 Mar 2025"
  },
  {
    title: "Bolsas de estudo para pós-graduação: quais existem e como conseguir",
    category: "Financiamento",
    description: "Guia completo sobre as principais oportunidades de bolsas para mestrado e doutorado no Brasil e exterior.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    readTime: "10 min",
    date: "10 Abr 2025"
  },
  {
    title: "Metodologias avançadas de pesquisa em ciências experimentais",
    category: "Metodologia",
    description: "Revisão das mais recentes abordagens metodológicas para pesquisas experimentais em física e química.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    readTime: "7 min",
    date: "05 Abr 2025"
  },
  {
    title: "Do mestrado ao doutorado: quando e por que fazer a transição",
    category: "Carreira Acadêmica",
    description: "Considerações importantes para decidir se e quando seguir do mestrado para o doutorado em sua trajetória acadêmica.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min",
    date: "20 Mar 2025"
  },
  {
    title: "Escrita científica eficiente: dicas para textos claros e concisos",
    category: "Escrita Acadêmica",
    description: "Aprenda a comunicar suas ideias de forma clara e concisa em artigos científicos, dissertações e teses.",
    imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min",
    date: "12 Mar 2025"
  },
  {
    title: "Ferramentas digitais essenciais para pesquisadores em 2025",
    category: "Tecnologia",
    description: "Conheça as ferramentas mais úteis para gerenciamento de referências, análise de dados e escrita colaborativa.",
    imageUrl: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=80&w=800",
    readTime: "9 min",
    date: "25 Mar 2025"
  },
  {
    title: "Networking acadêmico: como construir colaborações internacionais",
    category: "Colaboração",
    description: "Estratégias para expandir sua rede de contatos acadêmicos e estabelecer parcerias de pesquisa produtivas.",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    readTime: "7 min",
    date: "18 Mar 2025"
  }
];

// Categories for filter
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & <span className="text-gradient">Recursos</span></h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Artigos, dicas e recursos para ajudar você em sua jornada na pós-graduação em ciências exatas e experimentais.
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-1/2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-science-blue focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-2 w-full md:w-auto">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  className="border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-science-blue focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Todas as categorias</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card key={index} className="border border-gray-200 hover:border-science-blue/50 transition-all duration-300 card-hover overflow-hidden flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 z-20 bg-science-blue hover:bg-science-blue/90">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime} de leitura</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.description}</p>
                    <div className="mt-auto">
                      <a href="#" className="inline-flex items-center text-science-blue hover:underline">
                        Ler artigo completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
    </div>
  );
};

export default Blog;
