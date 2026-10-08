import './HamburgerBtn.css';

type HamburgerBtnProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function HamburgerBtn({ isOpen, onClick }: HamburgerBtnProps) {
  return (
    <button
      className={`hamburger ${isOpen ? 'hamburger--open' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
      aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
      type="button"
      title={isOpen ? 'Close' : 'Menu'}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
