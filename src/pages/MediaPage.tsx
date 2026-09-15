import React, { useState } from 'react';
import { Video, Certificate } from '../types';
import { CertificateModal } from '../components/CertificateModal';
import { 
  Youtube, 
  Award, 
  ExternalLink, 
  Play, 
  Calendar, 
  Eye, 
  Clock, 
  CheckCircle2, 
  Share2,
  Tv
} from 'lucide-react';
import videosData from '../assets/data/videos.json';
import certificatesData from '../assets/data/certificates.json';

export const MediaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'videos' | 'certificates'>('all');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const videos: Video[] = videosData;
  const certificates: Certificate[] = certificatesData;

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider mb-1">
          <Tv className="w-3.5 h-3.5" />
          <span>Educational Content &amp; Verified Credentials</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          Videos &amp; Certificates
        </h1>
        <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-2xl">
          Technical breakdowns from my YouTube channel (<strong>TaleNest</strong>) and verified academic &amp; technical training certificates.
        </p>

        {/* Section Filter Tabs */}
        <div className="flex items-center gap-2 mt-6" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-amber-500 text-stone-950 font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            All Media ({videos.length + certificates.length})
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'videos'}
            onClick={() => setActiveTab('videos')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'videos'
                ? 'bg-amber-500 text-stone-950 font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Youtube className="w-3.5 h-3.5" />
            <span>YouTube Videos ({videos.length})</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'certificates'}
            onClick={() => setActiveTab('certificates')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'certificates'
                ? 'bg-amber-500 text-stone-950 font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Certificates ({certificates.length})</span>
          </button>
        </div>
      </div>

      {/* 1. YouTube Videos Section */}
      {(activeTab === 'all' || activeTab === 'videos') && (
        <section id="youtube-videos-section" className="space-y-6">
          {/* Section Header & Channel Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-stone-900 text-stone-200 p-6 rounded-xl border border-stone-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
                  <Youtube className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    TaleNest YouTube Channel
                  </h2>
                  <span className="text-xs font-mono text-amber-400">
                    @elshawesh-AI
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 max-w-xl pt-1">
                Content on backend concepts, C# .NET architecture, SQL Server database design, and algorithmic problem solving.
              </p>
            </div>

            <a
              id="visit-youtube-channel-btn"
              href="https://www.youtube.com/@elshawesh-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors shrink-0"
            >
              <span>Visit TaleNest Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <article
                key={video.id}
                id={`video-card-${video.id}`}
                className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-400/80 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail with overlay watch icon */}
                  <div className="relative aspect-16/9 bg-stone-900 overflow-hidden group">
                    <img
                      src={video.thumbnail}
                      alt={`${video.title} thumbnail`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                    {video.duration && (
                      <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[11px] font-mono px-2 py-0.5 rounded">
                        {video.duration}
                      </span>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="p-5">
                    <h3 className="font-bold text-stone-900 text-base leading-snug mb-2 hover:text-amber-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-500 flex items-center gap-1">
                    <Youtube className="w-3.5 h-3.5 text-red-500" />
                    <span>TaleNest</span>
                  </span>

                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-amber-700 transition-colors"
                  >
                    <span>Watch Video</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* 2. Certificates Section */}
      {(activeTab === 'all' || activeTab === 'certificates') && (
        <section id="certificates-section" className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-600" />
                <span>Verified Certificates</span>
              </h2>
              <p className="text-stone-600 text-sm mt-0.5">
                Technical credentials in .NET development, database administration, and competitive problem solving.
              </p>
            </div>
            <span className="text-xs font-mono text-stone-500">
              Click any certificate to preview
            </span>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                onClick={() => setSelectedCertificate(cert)}
                className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-400 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Certificate Image Frame */}
                  <div className="relative aspect-4/3 bg-stone-900 overflow-hidden border-b border-stone-100">
                    <img
                      src={cert.image}
                      alt={`${cert.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-400 text-stone-950 text-xs font-semibold shadow-md">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-stone-900 text-sm leading-snug mb-1 group-hover:text-amber-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span>{cert.date}</span>
                  <span className="text-amber-700 font-medium group-hover:underline">
                    View &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
};
