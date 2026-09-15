import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  const heights = {
    sm: 28,
    md: 34,
    lg: 40,
  };

  const height = heights[size];
  // 140 / 40 = 3.5 ratio
  const width = Math.round(height * 3.5);

  const filterId = `yglow_${size}_${theme}`;
  const gradId = `ygrad_${size}_${theme}`;
  const amberId = `yamber_${size}_${theme}`;
  const silverId = `ysilver_${size}_${theme}`;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 140 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200 group-hover:scale-[1.02]"
        role="img"
        aria-label="Yousef Logo"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1c1917" />
            <stop offset="100%" stopColor="#0c0a09" />
          </linearGradient>
          <linearGradient id={amberId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id={silverId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fafaf9" />
            <stop offset="100%" stopColor="#d6d3d1" />
          </linearGradient>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#f59e0b" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Modern Developer Emblem Shield */}
        <rect
          x="2"
          y="2"
          width="36"
          height="36"
          rx="10"
          fill={`url(#${gradId})`}
          stroke={isDark ? '#44403c' : '#292524'}
          strokeWidth="1.5"
        />
        <rect
          x="4.5"
          y="4.5"
          width="31"
          height="31"
          rx="8"
          fill="none"
          stroke="#44403c"
          strokeWidth="0.8"
          strokeDasharray="2.5 2.5"
          opacity="0.5"
        />

        {/* Stylized 'Y' glyph */}
        <path
          d="M12 12 L20 22"
          stroke={`url(#${silverId})`}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 12 L20 22"
          stroke={`url(#${amberId})`}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${filterId})`}
        />
        <path
          d="M20 22 L20 30"
          stroke={`url(#${silverId})`}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="28" cy="12" r="2.2" fill="#f59e0b" />

        {/* Vector Text: "Yousef" Only */}
        <text
          x="47"
          y="27"
          fill={isDark ? '#ffffff' : '#1c1917'}
          fontFamily="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', 'Segoe UI', Roboto, sans-serif"
          fontSize="22"
          fontWeight="800"
          letterSpacing="-0.6px"
        >
          Yousef
        </text>

        {/* Signature .NET / Terminal Amber Dot */}
        <circle cx="127" cy="24" r="3.2" fill="#f59e0b" filter={`url(#${filterId})`} />
      </svg>
    </div>
  );
};
export default Logo;
