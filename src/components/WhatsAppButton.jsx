import React from 'react';

export default function WhatsappButton() {
  return (
    <a 
      href="https://wa.me/573134623762" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-neutral-950 text-white border border-neutral-800 p-3.5 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    >
      <svg className="w-5 h-5 fill-current group-hover:text-amber-500 transition-colors" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.412 1.451 5.428 0 9.85-4.417 9.854-9.842.002-2.628-1.022-5.1-2.885-6.964C17.16 1.832 14.695.806 12.01.806c-5.438 0-9.86 4.417-9.863 9.848-.001 1.93.501 3.81 1.456 5.416l-.991 3.613 3.7-.971z"/>
      </svg>
    </a>
  );
}