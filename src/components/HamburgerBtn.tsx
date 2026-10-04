import './HamburgerBtn.css';

type HamburgerBtnProps = {
  onClick: () => void;
};

export function HamburgerBtn({ onClick }: HamburgerBtnProps) {
  return (
    <button className="hamburger" onClick={onClick} aria-label="Open menu" type="button">
      <span />
      <span />
      <span />
    </button>
  );
}
