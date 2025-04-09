
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, GraduationCap } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

// We'll use the first 6 blog posts for the home page
const featuredBlogPosts = blogPosts.slice(0, 6);

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog & <span className="text-gradient">Recursos</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Artigos, dicas e recursos para ajudar você em sua jornada na pós-graduação em ciências exatas e experimentais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogPosts.map((post, index) => (
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
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-science-blue hover:underline">
                    Ler artigo completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/blog" className="inline-flex items-center justify-center bg-science-blue text-white hover:bg-science-blue/90 transition-colors duration-300 px-6 py-3 rounded-md font-medium">
            <GraduationCap className="mr-2 h-5 w-5" />
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
