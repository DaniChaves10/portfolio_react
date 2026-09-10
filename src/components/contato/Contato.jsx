import styles from './Contato.module.css'

function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Vamos conversar?</span>

          <h2>Contato</h2>

          <p>
            Estou aberto a novas oportunidades, projetos e conexões
            profissionais. Entre em contato comigo pelas redes abaixo.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <h3>Entre em contato</h3>

            <p>
              Se você procura um desenvolvedor comprometido, curioso e
              disposto a aprender continuamente, será um prazer conversar.
            </p>
          </div>

          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/daniel-araujo10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <strong>Daniel Araujo</strong>
            </a>

            <a
              href="https://github.com/DaniChaves10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <strong>DaniChaves10</strong>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=danielaraujo.da789@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>E-mail</span>
              <strong>Enviar mensagem</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato