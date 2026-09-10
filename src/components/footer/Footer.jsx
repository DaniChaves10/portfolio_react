import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo}>
          Daniel<span>.</span>
        </a>

        <p>
          Desenvolvido por Daniel Araujo © 2026
        </p>

        <a href="#inicio" className={styles.backToTop}>
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer