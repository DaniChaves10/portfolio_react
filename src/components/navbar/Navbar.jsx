import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#inicio" className={styles.logo}>
          Daniel<span>.</span>
        </a>

        <div className={styles.links}>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar