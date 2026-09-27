import '../styles/SkillsStyles.css';

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'Python', 'HTML', 'CSS', 'Java', 'JavaScript', 'TypeScript', 'R', 'MATLAB', 'Kotlin', 'Swift'],
  },
  {
    title: 'Technologies / Developer Tools',
    skills: ['Git', 'GitHub', 'Postman', 'MySQL', 'PostgreSQL', 'Supabase', 'Firebase', 'Unreal Engine'],
  },
  {
    title: 'Frameworks / Libraries',
    skills: ['Django', 'Node.js', 'Express', 'React', 'React Native', 'Tailwind CSS', 'Bootstrap', 'Jetpack Compose', 'SwiftUI'],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-bento">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="glass-card skill-card">
            <h3>{category.title}</h3>
            <div className="glass-card-stack">
              {category.skills.map((skill) => (
                <span className="chip" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}