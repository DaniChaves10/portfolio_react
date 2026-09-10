import styles from './Sobre.module.css'

function Sobre({ perfil, carregando }) {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Conheça um pouco</span>
          <h2>Sobre mim</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.photoArea}>
            <div className={styles.photoPlaceholder}>
              {carregando ? (
                <span>DA</span>
              ) : perfil?.avatar_url ? (
                <img
                  src={perfil.avatar_url}
                  alt="Daniel Araujo"
                />
              ) : (
                <span>DA</span>
              )}
            </div>
          </div>

          <div className={styles.text}>
            <h3>
              Desenvolvedor apaixonado por tecnologia e aprendizado.
            </h3>

            <p>
              Olá! Meu nome é Daniel Araujo. Sou formado em Análise e
              Desenvolvimento de Sistemas e atuo no desenvolvimento de
              aplicações web utilizando tecnologias de Front-end e Back-end.
            </p>

            <p>
              Tenho experiência com React, JavaScript, TypeScript, Java,
              Spring Boot e desenvolvimento de APIs REST. Durante minha
              formação, desenvolvi projetos individuais e em equipe,
              trabalhando desde a criação da interface até a integração
              com APIs e bancos de dados.
            </p>

            <p>
              Busco minha primeira oportunidade profissional na área de
              tecnologia, onde possa aplicar meus conhecimentos, continuar
              evoluindo e contribuir com soluções de qualidade.
            </p>

            <div className={styles.info}>
              <div>
                <span>Formação</span>
                <strong>
                  Análise e Desenvolvimento de Sistemas
                </strong>
              </div>

              <div>
                <span>Área</span>
                <strong>
                  Desenvolvimento Full Stack
                </strong>
              </div>

              <div>
                <span>Localização</span>
                <strong>São Paulo - SP</strong>
              </div>

              <div>
                <span>GitHub</span>

                <strong>
                  {perfil?.public_repos ?? '--'} repositórios
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre