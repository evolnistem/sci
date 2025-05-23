
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppButton = ({
  phoneNumber,
  message = "Olá! Gostaria de mais informações sobre seus serviços.",
  className
}: WhatsAppButtonProps) => {
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-5 py-3 shadow-lg z-50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105",
        className
      )}
      aria-label="Contate-nos pelo WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="font-medium text-sm">Fale com um de nossos especialistas</span>
    </a>
  );
};

export default WhatsAppButton;
