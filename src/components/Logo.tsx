export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Microphone icon */}
      <rect x="14" y="4" width="12" height="18" rx="6" fill="white" />
      <path
        d="M8 20C8 27.732 13.373 34 20 34C26.627 34 32 27.732 32 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <line x1="20" y1="34" x2="20" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="38" x2="27" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
