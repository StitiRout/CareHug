export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Heart in lavender */}
      <path
        d="M50 85C50 85 20 65 20 45C20 35 25 28 32.5 28C40 28 45 35 50 42C55 35 60 28 67.5 28C75 28 80 35 80 45C80 65 50 85 50 85Z"
        fill="#D4B5F0"
        stroke="#C89EE8"
        strokeWidth="1.5"
      />
      
      {/* Left hand (white) */}
      <path
        d="M15 45C15 45 12 42 12 38C12 34 14 32 16 32C18 32 20 34 20 38L20 50C20 52 18 54 16 54C14 54 12 52 12 50L12 40"
        fill="white"
        stroke="#E5D4F5"
        strokeWidth="1.5"
      />
      
      {/* Right hand (white) */}
      <path
        d="M85 45C85 45 88 42 88 38C88 34 86 32 84 32C82 32 80 34 80 38L80 50C80 52 82 54 84 54C86 54 88 52 88 50L88 40"
        fill="white"
        stroke="#E5D4F5"
        strokeWidth="1.5"
      />
      
      {/* Left fingers */}
      <ellipse cx="15" cy="42" rx="6" ry="10" fill="white" stroke="#E5D4F5" strokeWidth="1" />
      
      {/* Right fingers */}
      <ellipse cx="85" cy="42" rx="6" ry="10" fill="white" stroke="#E5D4F5" strokeWidth="1" />
    </svg>
  );
}
