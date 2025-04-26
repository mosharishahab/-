import React from 'react'
import './MagicSunAndCloud.css'

export default function MagicSunAndCloud() {
  return (
    <div className="absolute top-0 left-0 w-full h-64 overflow-hidden pointer-events-none">
      {/* Sun */}
      <div className="absolute top-4 left-4 animate-bounce-slow">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <g className="animate-spin-slow" stroke="#FFD700" strokeWidth="2">
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="50" y1="5" x2="50" y2="20"
                transform={`rotate(${i * 45},50,50)`} 
              />
            ))}
          </g>
          <circle cx="50" cy="50" r="25" fill="#FFD700" stroke="#fbbf24" strokeWidth="2" />
          <circle cx="42" cy="45" r="3" fill="#333" className="animate-blink" />
          <circle cx="58" cy="45" r="3" fill="#333" />
          <path d="M40,60 Q50,70 60,60" stroke="#333" strokeWidth="2" fill="none" />
          <rect x="36" y="42" width="10" height="5" fill="#333" />
          <rect x="54" y="42" width="10" height="5" fill="#333" />
          <line x1="46" y1="45" x2="54" y2="45" stroke="#333" strokeWidth="2" />
        </svg>
      </div>
      {/* Cloud */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 animate-cloud-move opacity-90">
        <svg viewBox="0 0 300 120" width="300" height="120">
          <g fill="#fff" stroke="#dbeafe" strokeWidth="3">
            <ellipse cx="80" cy="60" rx="50" ry="30" />
            <ellipse cx="140" cy="50" rx="60" ry="35" />
            <ellipse cx="200" cy="60" rx="55" ry="30" />
            <ellipse cx="140" cy="80" rx="90" ry="40" />
          </g>
        </svg>
      </div>
    </div>
  )
}
