import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText, Microscope } from 'lucide-react';
const serviceExamples = [{
  title: "Análise de Dados Espectroscópicos",
  category: "Análise e Interpretação de Dados",
  icon: <Microscope className="h-8 w-8 text-science-blue" />,
  description: "Apoio na análise e interpretação de dados de espectroscopia Raman, FTIR e UV-Vis para identificação de compostos em pesquisas de química orgânica.",
  imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  result: "A análise resultou em identificação precisa de marcadores químicos relevantes para a pesquisa do aluno."
}, {
  title: "Revisão de Tese em Física Quântica",
  category: "Suporte para Teses e Dissertações",
  icon: <FileText className="h-8 w-8 text-science-blue" />,
  description: "Revisão detalhada e edição de tese de doutorado sobre computação quântica, incluindo verificação de cálculos, formatação e clareza conceitual.",
  imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
  result: "Tese aprovada com distinção pela banca examinadora."
}, {
  title: "Pesquisa Bibliográfica em Catálise",
  category: "Revisão de Literatura e Pesquisa",
  icon: <BookOpen className="h-8 w-8 text-science-blue" />,
  description: "Levantamento bibliográfico abrangente sobre avanços recentes em catalisadores heterogêneos para reações de hidrogenação.",
  imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
  result: "Fornecimento de 45 referências relevantes e um resumo analítico de 25 páginas que auxiliou o direcionamento da pesquisa."
}];
const ServiceExamples = () => {
  return;
};
export default ServiceExamples;