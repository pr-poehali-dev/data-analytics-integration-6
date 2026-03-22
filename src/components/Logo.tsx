export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Microphone / Stage icon */}
      <rect x="16" y="4" width="8" height="16" rx="4" fill="white" />
      <path
        d="M10 18C10 24.627 14.477 30 20 30C25.523 30 30 24.627 30 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="20" y1="30" x2="20" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="36" x2="26" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round" />

      {/* STAGE text */}
      <text
        x="40"
        y="27"
        fill="white"
        fontFamily="monospace"
        fontSize="18"
        fontWeight="600"
        letterSpacing="2"
      >
        STAGEPRO
      </text>
    </svg>
  );
};
