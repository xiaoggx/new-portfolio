// placeholder for resume download section
'use client';

import { motion } from 'framer-motion';
import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
  EyeIcon,
  PrinterIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function ResumeDownload() {
  const [downloadCount, setDownloadCount] = useState(1247);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    // Simulate download delay
    setTimeout(() => {
      // Create a link and trigger download
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'G_A_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadCount(prev => prev + 1);
      setIsDownloading(false);
    }, 1000);
  };

  const handleView = () => {
    window.open('/resume.pdf', '_blank');
  };

  const handlePrint = () => {
    const printWindow = window.open('/resume.pdf', '_blank');
    printWindow?.addEventListener('load', () => {
      printWindow.print();
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-lime-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-lime-500 to-emerald-600 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon/Visual */}
              <motion.div
                className="flex-shrink-0"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <DocumentTextIcon className="w-20 h-20 text-white" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Download My Resume
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  Get a comprehensive overview of my skills, experience, and achievements in PDF format.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <motion.button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-lime-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isDownloading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <ArrowDownTrayIcon className="w-5 h-5" />
                        Download Resume
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    onClick={handleView}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all"
                  >
                    <EyeIcon className="w-5 h-5" />
                    View Online
                  </motion.button>

                  <motion.button
                    onClick={handlePrint}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all"
                  >
                    <PrinterIcon className="w-5 h-5" />
                    Print
                  </motion.button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    <span className="text-sm">{downloadCount.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5" />
                    <span className="text-sm">Last updated: January 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">What's included:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Professional summary',
                  'Work experience',
                  'Technical skills',
                  'Education & certifications',
                  'Notable projects',
                  'Contact information',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2 text-white/90"
                  >
                    <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
