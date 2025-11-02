'use client';
import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function ImageModal({ isOpen, onClose, image, images = [], currentIndex = 0, onNavigate }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyboard = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && images.length > 0 && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && images.length > 0 && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyboard);
      return () => window.removeEventListener('keydown', handleKeyboard);
    }
  }, [isOpen, onClose, images.length, currentIndex, onNavigate]);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (images.length > 0 && currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (images.length > 0 && currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  if (!isOpen || !image) return null;

  const hasNavigation = images.length > 1;
  const canGoPrev = hasNavigation && currentIndex > 0;
  const canGoNext = hasNavigation && currentIndex < images.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 bg-gray-900/80 hover:bg-gray-800 rounded-full transition-colors border border-gray-700"
        aria-label="Close modal"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Navigation Buttons */}
      {hasNavigation && canGoPrev && (
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-900/80 hover:bg-gray-800 rounded-full transition-colors border border-gray-700"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
      )}

      {hasNavigation && canGoNext && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-900/80 hover:bg-gray-800 rounded-full transition-colors border border-gray-700"
          aria-label="Next image"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      )}

      {/* Image Counter */}
      {hasNavigation && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-gray-900/80 rounded-full border border-gray-700">
          <span className="text-white text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
          <Image
            src={image.src || image}
            alt={image.alt || image.name || 'Image'}
            fill
            className="object-contain"
            unoptimized
            priority
          />
        </div>
      </div>

      {/* Keyboard Hints */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-gray-900/80 rounded-full border border-gray-700">
        <span className="text-gray-400 text-xs">
          Press ESC to close
          {hasNavigation && ' • Use arrow keys to navigate'}
        </span>
      </div>
    </div>
  );
}

