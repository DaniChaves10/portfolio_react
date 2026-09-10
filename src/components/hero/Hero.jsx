import styles from './Hero.module.css'
import fotoGemini from '../../assets/foto-gemini.png'

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.greeting}>
            Olá, eu sou
          </span>

          <h1>
            Daniel <span>Araujo</span>
          </h1>

          <h2>Desenvolvedor Full Stack</h2>

          <p>
            Desenvolvedor com experiência em Java, Spring Boot,
            React e JavaScript, focado na criação de aplicações web
            modernas, responsivas e integradas a APIs REST.
          </p>

          <div className={styles.technologies}>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>JavaScript</span>
          </div>

          <div className={styles.buttons}>
            <a
              href="#projetos"
              className={styles.primaryButton}
            >
              Ver projetos
            </a>

            <a
              href="https://github.com/DaniChaves10"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.circle}>
            <img
              src={fotoGemini}
              alt="Daniel Araujo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero