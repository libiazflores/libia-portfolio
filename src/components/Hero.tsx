import '../styles/HeroStyles.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <h1 className="hero-title">Libia Zulema Flores Valenzuela</h1>

        <p className="hero-subheader">
          Final-Year Computer Science Student | Software Developer
        </p>

        <p className="hero-subtitle">
         I enjoy solving problems through technology, building software across web and mobile while bringing together technical development, collaboration, and leadership.
        </p>

        <div className="hero-cta-row">
          <a className="btn btn--primary" href="#projects">
            See More
          </a>
          <a className="btn btn--ghost" href="#contact">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}

