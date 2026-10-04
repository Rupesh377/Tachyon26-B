import './PageHeader.css';

type PageHeaderProps = {
  label: string;
  title: string;
  lead?: string;
};

export function PageHeader({ label, title, lead }: PageHeaderProps) {
  return (
    <header className="page-header">
      <p className="section-label">{label}</p>
      <h1 className="page-header__title heading-gradient">{title}</h1>
      {lead ? <p className="page-header__lead">{lead}</p> : null}
    </header>
  );
}
