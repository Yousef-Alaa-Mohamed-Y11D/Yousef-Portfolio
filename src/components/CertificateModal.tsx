import React from 'react';
import { Certificate } from '../types';
import { X, ExternalLink, Calendar, Award, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white rounded-lg border border-stone-200 max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-stone-900 text-base">Certificate Preview</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image Preview */}
        <div className="p-5 bg-stone-900 flex items-center justify-center max-h-[380px] overflow-hidden">
          <img
            src={certificate.image}
            alt={`${certificate.title} credential`}
            className="max-h-[340px] w-auto rounded object-contain shadow-md border border-stone-800"
          />
        </div>

        {/* Metadata Details */}
        <div className="p-5 space-y-3">
          <h4 className="font-bold text-lg text-stone-900">
            {certificate.title}
          </h4>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-stone-600">
            <div className="flex items-center gap-1.5">
              <span className="text-stone-400">Issuer:</span>
              <span className="font-medium text-stone-800">{certificate.issuer}</span>
            </div>
            {certificate.date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                <span>{certificate.date}</span>
              </div>
            )}
          </div>

          {certificate.skills && certificate.skills.length > 0 && (
            <div className="pt-2">
              <span className="text-xs font-mono text-stone-400 block mb-1.5">Validated Competencies:</span>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-amber-800 text-xs font-mono border border-amber-200/60"
                  >
                    <CheckCircle2 className="w-3 h-3 text-amber-600" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action links */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-end gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
            >
              Close
            </button>
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 rounded-md transition-colors"
              >
                <span>Verify on LinkedIn / Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
