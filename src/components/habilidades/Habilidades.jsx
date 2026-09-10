import styles from './Habilidades.module.css'

const gruposHabilidades = [
  {
    titulo: 'Front-end',
    habilidades: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
    ],
  },
  {
    titulo: 'Back-end',
    habilidades: [
      'Java',
      'Spring Boot',
      'Node.js',
      'APIs REST',
      'JWT',
    ],
  },
  {
    titulo: 'Banco de Dados',
    habilidades: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    titulo: 'Ferramentas',
    habilidades: [
      'Git',
      'GitHub',
      'Vite',
      'Webpack',
      'Postman',
      'Insomnia',
    ],
  },
]

function Habilidades() {
  return (
    <section
      id="habilidades"
      className={styles.habilidades}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Tecnologias</span>

          <h2>Habilidades</h2>

          <p>
            Tecnologias e ferramentas que utilizo no
            desenvolvimento de aplicações web.
          </p>
        </div>

        <div className={styles.grid}>
          {gruposHabilidades.map((grupo) => (
            <article
              key={grupo.titulo}
              className={styles.card}
            >
              <h3>{grupo.titulo}</h3>

              <div className={styles.skills}>
                {grupo.habilidades.map((habilidade) => (
                  <span key={habilidade}>
                    {habilidade}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Habilidades