import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Sobre from './components/sobre/Sobre'
import Projetos from './components/projetos/Projetos'
import Habilidades from './components/habilidades/Habilidades'
import Contato from './components/contato/Contato'
import Footer from './components/footer/Footer'
import useGitHubProfile from './hooks/useGitHubProfile'

function App() {
  const { perfil, carregando } = useGitHubProfile()

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Sobre
          perfil={perfil}
          carregando={carregando}
        />

        <Projetos />
        <Habilidades />
        <Contato />
      </main>

      <Footer />
    </>
  )
}

export default App