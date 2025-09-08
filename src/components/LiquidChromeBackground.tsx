'use client';

import React from 'react';

const LiquidChromeBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Liquid Chrome Background */}
      <div className="liquid-chrome-bg">
        <div className="chrome-blob blob-1"></div>
        <div className="chrome-blob blob-2"></div>
        <div className="chrome-blob blob-3"></div>
        <div className="chrome-blob blob-4"></div>
        <div className="chrome-blob blob-5"></div>
      </div>
      
      <style jsx>{`
        .liquid-chrome-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            #f0f0f0 0%,
            #ffffff 25%,
            #f8f9fa 50%,
            #e9ecef 75%,
            #f0f0f0 100%
          );
          overflow: hidden;
        }

        .chrome-blob {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(240, 240, 240, 0.7) 25%,
            rgba(220, 220, 220, 0.6) 50%,
            rgba(200, 200, 200, 0.5) 75%,
            rgba(180, 180, 180, 0.4) 100%
          );
          filter: blur(40px);
          opacity: 0.6;
          animation: liquidFloat 20s ease-in-out infinite;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          top: -200px;
          left: -200px;
          animation-delay: 0s;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(147, 197, 253, 0.08) 50%,
            rgba(219, 234, 254, 0.06) 100%
          );
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          top: 20%;
          right: -150px;
          animation-delay: -5s;
          background: linear-gradient(
            135deg,
            rgba(107, 114, 128, 0.08) 0%,
            rgba(156, 163, 175, 0.06) 50%,
            rgba(209, 213, 219, 0.04) 100%
          );
        }

        .blob-3 {
          width: 500px;
          height: 500px;
          bottom: -250px;
          left: 30%;
          animation-delay: -10s;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.06) 0%,
            rgba(99, 102, 241, 0.04) 50%,
            rgba(139, 92, 246, 0.03) 100%
          );
        }

        .blob-4 {
          width: 350px;
          height: 350px;
          top: 60%;
          right: 20%;
          animation-delay: -15s;
          background: linear-gradient(
            135deg,
            rgba(168, 162, 158, 0.05) 0%,
            rgba(231, 229, 228, 0.03) 50%,
            rgba(245, 245, 244, 0.02) 100%
          );
        }

        .blob-5 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 60%;
          animation-delay: -7s;
          background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.04) 0%,
            rgba(74, 222, 128, 0.03) 50%,
            rgba(134, 239, 172, 0.02) 100%
          );
        }

        @keyframes liquidFloat {
          0%, 100% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            transform: translate(50px, -50px) scale(1.1) rotate(90deg);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            transform: translate(-30px, 30px) scale(0.9) rotate(180deg);
            border-radius: 70% 30% 40% 60% / 40% 70% 60% 30%;
          }
          75% {
            transform: translate(-50px, -30px) scale(1.05) rotate(270deg);
            border-radius: 40% 70% 60% 30% / 70% 40% 50% 60%;
          }
        }

        /* Chrome-like metallic gradient overlay */
        .liquid-chrome-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            125deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(240, 240, 240, 0.6) 20%,
            rgba(220, 220, 220, 0.4) 40%,
            rgba(200, 200, 200, 0.3) 60%,
            rgba(180, 180, 180, 0.2) 80%,
            rgba(160, 160, 160, 0.1) 100%
          );
          pointer-events: none;
          animation: chromeShimmer 8s ease-in-out infinite;
        }

        @keyframes chromeShimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        /* Subtle noise texture for chrome effect */
        .liquid-chrome-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 4px 4px, 6px 6px;
          opacity: 0.3;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default LiquidChromeBackground;
