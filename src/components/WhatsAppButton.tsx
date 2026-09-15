import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '201286536360';
  const prefilledMessage = encodeURIComponent(
    'Hello Yousef, I found your portfolio and would like to discuss a project.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Subtle Tooltip on hover/focus */}
      {showTooltip && (
        <div 
          role="tooltip"
          className="hidden sm:flex items-center gap-2 bg-stone-900 text-stone-100 text-xs font-medium py-1.5 px-3 rounded-md shadow-lg border border-stone-800 transition-opacity"
        >
          <span>Chat on WhatsApp</span>
          <span className="text-amber-400 font-mono text-[11px]">(01286536360)</span>
        </div>
      )}

      {/* Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label="Contact Yousef on WhatsApp at 01286536360"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </aside>
  );
};
