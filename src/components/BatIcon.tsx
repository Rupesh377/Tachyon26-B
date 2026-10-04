type BatIconProps = {
  className?: string;
  flip?: boolean;
};

export function BatIcon({ className, flip }: BatIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 32"
      fill="currentColor"
      aria-hidden
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M32 4c-2 0-4 1.5-5 3.5-1.5-2.5-4-4-7-4-1 0-2 .2-3 .5 1.5 2 2 4.5 1.5 7-3 1-5.5 3.5-6.5 7 2.5-.5 5 0 7 1.5 1 3 3.5 5.5 6.5 6.5-.5 2-.5 4 0 5.5 2-.5 4-1.5 5.5-3 1.5 1.5 3.5 2.5 5.5 3-.5-1.5-.5-3.5 0-5.5 3-1 5.5-3.5 6.5-6.5 2-1.5 4.5-2 7-1.5-1-3.5-3.5-6-6.5-7 .5-2.5 0-5-1.5-7-1-.3-2-.5-3-.5-3 0-5.5 1.5-7 4C36 5.5 34 4 32 4z" />
    </svg>
  );
}
