import styles from './Projetos.module.css'
import projetos from '../../data/Projetos'
import ProjetoCard from './ProjetoCard'

function Projetos() {
  return (
    <section
      id="projetos"
      className={styles.projetos}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Meu trabalho</span>

          <h2>Projetos</h2>

          <p>
            Alguns projetos desenvolvidos durante minha
            evolução como desenvolvedor.
          </p>
        </div>

        <div className={styles.grid}>
          {projetos.map((projeto) => (
            <ProjetoCard
              key={projeto.id}
              projeto={projeto}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos