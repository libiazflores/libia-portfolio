import '../styles/ExperienceStyles.css';

const TIMELINE = [
  {
    year: 'Jul 2026 — Present',
    title: 'Mitacs Globalink Research Intern @ McGill',
    category: 'Research',
    desc: 'Working with the CREATE Lab at McGill University on a platform that uses generative AI to support secondary math teachers with content creation.',
  },
  {
    year: 'Aug 2023 — Jun 2026',
    title: '6-Time Academic Excellence Awardee',
    category: 'Award',
    desc: 'Received the Academic Excellence recognition in all six semesters where the award has been granted during my B.S. in Computer Science and Technology at Tec de Monterrey, with a 4.0/4.0 GPA.',
  },
  {
    year: 'Feb 2025 — Dec 2025',
    title: 'Double Award Winner @ Expo Ingenierías',
    category: 'Award',
    desc: 'Received Best Software Prototype for MotionLab, an interactive physics simulator, and Best Software Project for an Employee Records Management System.',
  },
  {
    year: 'May 2024 & Jun 2025',
    title: 'Beautiful Patterns Facilitator w/ MIT',
    category: 'Mentorship',
    desc: 'Facilitated a programming summer camp in collaboration with the MIT Geospatial Lab, introducing middle and high school girls to coding and computational thinking for two consecutive years.',
  },
  {
    year: 'Aug 2024 — Jul 2025',
    title: 'Eugenio Garza Sada Global Leadership Program',
    category: 'Leadership',
    desc: 'Participated in a leadership program focused on social impact, where I worked with other students on technology-based projects addressing community needs.',
  },
  {
    year: 'Aug 2023 — Jun 2026',
    title: 'Logistics Manager @ Women For The Future',
    category: 'Leadership',
    desc: 'Supported event logistics and organization for a women-in-engineering group, helping coordinate STEM outreach and student activities.',
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="journey">
      <h2 className="section-title">Along the way</h2>

      <div className="timeline">
        {TIMELINE.map((item, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-year">{item.year}</div>

            <div className="glass-card timeline-content">
              <span className="chip category-chip">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}