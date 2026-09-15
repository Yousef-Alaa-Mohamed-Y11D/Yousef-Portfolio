import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Youtube, 
  MessageCircle, 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  Terminal,
  Calendar,
  FileText
} from 'lucide-react';

interface ContactPageProps {
  onOpenCv?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenCv }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  const emailAddress = 'yousefalaamohammed4@gmail.com';
  const phoneNumber = '01286536360';
  const whatsappUrl = `https://wa.me/201286536360?text=${encodeURIComponent(
    'Hello Yousef, I found your portfolio and would like to discuss a project.'
  )}`;

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setFormFeedback('Please provide your name and a short message.');
      return;
    }

    // Construct mailto link
    const mailtoSubject = encodeURIComponent(
      subject.trim() ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] from ${name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoUrl = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormFeedback('Opening your email client to send your message directly...');
    window.location.href = mailtoUrl;
  };

  const handleWhatsAppDraft = () => {
    if (!message.trim()) {
      window.open(whatsappUrl, '_blank');
      return;
    }
    const fullMsg = `Hello Yousef, my name is ${name || 'a visitor'}. ${message}`;
    const customWhatsAppUrl = `https://wa.me/201286536360?text=${encodeURIComponent(fullMsg)}`;
    window.open(customWhatsAppUrl, '_blank');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider mb-1">
          <Terminal className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          Contact &amp; Connect
        </h1>
        <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-2xl">
          I am currently available for Junior Backend .NET Developer positions, internships, freelance API development, and software collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Contact Details & Links */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-5">
            <h2 className="text-lg font-bold text-stone-900 tracking-tight">
              Direct Contact Information
            </h2>

            {/* Email */}
            <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 flex items-start justify-between gap-3">
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-[11px] font-mono uppercase text-stone-500 block">
                  Email Address
                </span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-stone-900 font-semibold text-sm hover:text-amber-600 transition-colors truncate block"
                >
                  {emailAddress}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(emailAddress, 'email')}
                className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200 rounded transition-colors shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone & WhatsApp */}
            <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 flex items-start justify-between gap-3">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono uppercase text-stone-500 block">
                  Phone / WhatsApp
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-stone-900 font-semibold text-sm hover:text-amber-600 transition-colors font-mono"
                  >
                    {phoneNumber}
                  </a>
                  <span className="text-xs px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded font-mono text-[10px]">
                    WhatsApp Available
                  </span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(phoneNumber, 'phone')}
                className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200 rounded transition-colors shrink-0"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <span className="text-[11px] font-mono uppercase text-stone-500 block">
                  Location
                </span>
                <span className="text-stone-900 font-semibold text-sm">
                  Qena, Egypt
                </span>
                <span className="text-stone-500 text-xs block mt-0.5">
                  Available for local and remote opportunities.
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              id="contact-whatsapp-direct-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Directly on WhatsApp</span>
            </a>

            {onOpenCv && (
              <button
                type="button"
                onClick={onOpenCv}
                className="w-full py-2 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 border border-stone-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                <span>Review / Print Complete CV</span>
              </button>
            )}
          </div>

          {/* Social Profiles */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-3">
            <h3 className="font-bold text-stone-900 text-sm">
              Professional Profiles
            </h3>

            <div className="space-y-2 text-xs">
              <a
                href="https://github.com/Yousef-Alaa-Mohamed-Y11D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-stone-50 hover:bg-stone-100 text-stone-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-stone-700" />
                  <span className="font-mono">GitHub / Yousef-Alaa-Mohamed-Y11D</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/yousef-alaa-mohammed-9b3540326/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-stone-50 hover:bg-stone-100 text-stone-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span className="font-mono">LinkedIn / yousef-alaa-mohammed</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href="https://www.youtube.com/@elshawesh-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-stone-50 hover:bg-stone-100 text-stone-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span className="font-mono">YouTube / TaleNest (@elshawesh-AI)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Composer */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg font-bold text-stone-900 tracking-tight">
                Send a Direct Message
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Fill in the details below to dispatch a message via your default email client or forward directly to WhatsApp.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-stone-700 mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Connor / Recruiter"
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-stone-700 mb-1">
                    YOUR EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-stone-700 mb-1">
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Junior .NET Opportunity / Project Inquiry"
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-stone-700 mb-1">
                  MESSAGE *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Yousef, we reviewed your portfolio and would like to talk about..."
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all resize-y"
                />
              </div>

              {formFeedback && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 font-mono">
                  {formFeedback}
                </div>
              )}

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  id="submit-email-btn"
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold text-xs sm:text-sm rounded-md transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDraft}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs sm:text-sm rounded-md transition-colors cursor-pointer border border-stone-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Send as WhatsApp Message</span>
                </button>
              </div>

              <p className="text-[11px] text-stone-400 font-mono pt-1">
                * Note: Direct mailto &amp; WhatsApp actions ensure instantaneous contact without storing private messages on third-party servers.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
