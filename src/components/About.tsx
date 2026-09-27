import '../styles/AboutStyles.css';
import libiaPhoto from '../assets/LIBIA_ZULEMA_FLORES_VALENZUELA.jpg';

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">A Little About Me</h2>

      <div className="about-grid">
        <div className="glass-card about-text">
          <p>
           I'm a Computer Science student at Tecnológico de Monterrey with a strong interest in technology and software development. I enjoy building software, exploring new technologies, and working with different teams while learning from each experience.
          </p>

          <p>
           I've had the opportunity to work with web and mobile technologies, explore generative AI through research, and take on leadership and mentoring roles. Outside of coding, I enjoy being involved in student organizations and creating spaces where others can learn and connect.
          </p>
        </div>

        <div className="glass-card about-image">
          <img src={libiaPhoto} alt="Libia Flores" />
        </div>
      </div>
    </section>
  );
}