import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, GraduationCap } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

// We'll use the first 6 blog posts for the home page
const featuredBlogPosts = blogPosts.slice(0, 6);
const BlogSection = () => {
  return <section id="blog" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Artigos, dicas e recursos para ajudar você em sua jornada na pós-graduação em ciências exatas e experimentais.
          </p>
        </div>
        
        
        
        <div className="mt-12 text-center">
          <Link to="/blog" className="inline-flex items-center justify-center bg-science-blue text-white hover:bg-science-blue/90 transition-colors duration-300 px-6 py-3 rounded-md font-medium">
            <GraduationCap className="mr-2 h-5 w-5" />
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>;
};
export default BlogSection;