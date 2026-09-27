import '../styles/ContactStyles.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="glass-card contact-card">
        <h2 className="section-title">Let's Connect!</h2>
        <p>
          I am currently open to new opportunities, internships, collaborations, 
          and projects in software engineering. Whether you have a question 
          or just want to connect, feel free to reach out.
        </p>
        <div className="contact-links">
          <a href="mailto:libiazulema.fv@gmail.com" className="btn btn--primary">Email</a>
          <a href="https://linkedin.com/in/libiazflores" target="_blank" rel="noreferrer" className="btn btn--ghost">LinkedIn</a>
          <a href="https://github.com/libiazflores" target="_blank" rel="noreferrer" className="btn btn--ghost">GitHub</a>
        </div>
      </div>
    </section>
  );
}