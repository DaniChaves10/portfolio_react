import styles from './Projetos.module.css'

function ProjetoCard({ projeto }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={projeto.imagem}
          alt={`Captura de tela do projeto ${projeto.titulo}`}
        />
      </div>

      <div className={styles.cardContent}>
        <h3>{projeto.titulo}</h3>

        <p>{projeto.descricao}</p>

        <div className={styles.technologies}>
          {projeto.tecnologias.map((tecnologia) => (
            <span key={tecnologia}>
              {tecnologia}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {projeto.github && (
            <a
              href={projeto.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}

          {projeto.demo && (
            <a
              href={projeto.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoButton}
            >
              Ver projeto
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjetoCard