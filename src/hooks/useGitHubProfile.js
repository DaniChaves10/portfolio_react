import { useEffect, useState } from 'react'

function useGitHubProfile() {
  const [perfil, setPerfil] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    async function buscarPerfil() {
      try {
        setCarregando(true)

        const resposta = await fetch(
          'https://api.github.com/users/DaniChaves10'
        )

        if (!resposta.ok) {
          throw new Error('Não foi possível carregar o perfil do GitHub.')
        }

        const dados = await resposta.json()

        setPerfil(dados)
      } catch (error) {
        console.error(error)
        setErro(true)
      } finally {
        setCarregando(false)
      }
    }

    buscarPerfil()
  }, [])

  return {
    perfil,
    carregando,
    erro,
  }
}

export default useGitHubProfile