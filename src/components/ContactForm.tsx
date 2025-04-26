import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contato o mais breve possível."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      service: ''
    });
  };
  return <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em <span className="text-gradient">Contato</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tem dúvidas sobre nossos serviços ou deseja discutir suas necessidades específicas? Entre em contato com nossa equipe de especialistas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          
          
        </div>
      </div>
    </section>;
};
export default ContactForm;