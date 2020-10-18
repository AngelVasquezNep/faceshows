import React from 'react'
import { useRouter } from 'next/router'
import API from 'Hooks/useApi'
import Home from 'components/Layouts/Home'

const Character = (props) => {
  const router = useRouter()
  const { data, isLoading, isError } = API.useCharacter(router.query.id)

  if (isLoading) {
    return (
      <Home>
        <p>Cargando...</p>
      </Home>
    )
  }

  const { name, image } = data

  return (
    <Home>
      <div style={{ maxWidth: '30rem', margin: '0 auto', textAlign: 'center' }}>
        <h1>{name}</h1>
        <img src={image} alt={name} />
      </div>
    </Home>
  )
}

export default Character
