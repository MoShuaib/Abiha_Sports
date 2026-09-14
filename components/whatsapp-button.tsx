'use client'

import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/products'

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-105 active:scale-95"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="size-7" style={{ animation: 'wiggle 2.5s infinite' }} />
        
        {/* Animated unread indicator */}
        <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
        </span>
      </a>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wiggle {
          0%, 10%, 100% { transform: rotate(0deg); }
          2% { transform: rotate(-10deg); }
          4% { transform: rotate(10deg); }
          6% { transform: rotate(-10deg); }
          8% { transform: rotate(10deg); }
        }
      `}} />
    </div>
  )
}
