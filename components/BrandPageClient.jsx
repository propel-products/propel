'use client';
import { useState } from 'react';
import ImageModal from './ImageModal';
import Image from 'next/image';

export default function BrandPageClient({ linkedInBanners = [], marketingExamples = [], type = 'both' }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalImages, setModalImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, images, index) => {
    setModalImage(image);
    setModalImages(images);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
    setModalImages([]);
  };

  const navigateModal = (index) => {
    setCurrentIndex(index);
    setModalImage(modalImages[index]);
  };

  const handleLinkedInClick = (banner, index) => {
    openModal(banner, linkedInBanners, index);
  };

  const handleMarketingClick = (example, index) => {
    const allMarketing = marketingExamples;
    openModal(example, allMarketing, index);
  };

  return (
    <>
      {/* LinkedIn Banners */}
      {(type === 'both' || type === 'linkedin') && linkedInBanners.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8">
          {linkedInBanners.map((banner, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 cursor-pointer hover:border-[#FF5007] transition-colors group"
              onClick={() => handleLinkedInClick(banner, idx)}
            >
              <div className="bg-white rounded-lg p-4 mb-4 overflow-hidden">
                <Image
                  src={banner.src}
                  alt={banner.name}
                  width={banner.dimensions.includes('1128') ? 1128 : 1584}
                  height={banner.dimensions.includes('191') ? 191 : 396}
                  className="w-full h-auto transition-transform group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{banner.name}</h3>
                  <p className="text-sm text-gray-400">{banner.dimensions} pixels</p>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-[#FF5007] transition-colors">
                  Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Marketing Examples */}
      {(type === 'both' || type === 'marketing') && marketingExamples.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingExamples.map((example, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 cursor-pointer hover:border-[#FF5007] transition-colors group"
              onClick={() => handleMarketingClick(example, idx)}
            >
              <div className="bg-white rounded-lg p-4 mb-4 overflow-hidden">
                <Image
                  src={example.src}
                  alt={example.name}
                  width={800}
                  height={800}
                  className="w-full h-auto transition-transform group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{example.name}</h3>
                <span className="text-xs text-gray-500 group-hover:text-[#FF5007] transition-colors">
                  Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        image={modalImage}
        images={modalImages}
        currentIndex={currentIndex}
        onNavigate={navigateModal}
      />
    </>
  );
}

