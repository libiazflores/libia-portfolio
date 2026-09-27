import '../styles/ProjectCardStyles.css';

export type ProjectCardProps = {
  title: string;
  period: string;
  description: string;
  tags: readonly string[];
  imageUrl?: string;      
  cardImageUrl?: string;  
  onClick: () => void;
};

export default function ProjectCard({
  title,
  period,
  description,
  tags,
  onClick,
}: ProjectCardProps) {
  return (
    <div className="project-card typography-card" onClick={onClick} role="button" tabIndex={0}>
      
      <div className="project-meta-header">
        <span className="period-badge">{period}</span>
        <span className="decorative-dot"></span>
      </div>

      <div className="project-main-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tags">
          {tags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="project-action-footer">
        <span className="action-text">Explore Project</span>
        <div className="action-icon-wrapper">
          <svg 
            className="arrow-icon" 
            width="18" height="18" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" strokeWidth="2.5" 
            strokeLinecap="round" strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
      
    </div>
  );
}