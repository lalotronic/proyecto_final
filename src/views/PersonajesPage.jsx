import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PersonajesPage = () => {
  const {id} = useParams()
  const [personaje, setPersonaje] = useState(null)
  const [error, setError] = useState(null)

  //useEffect
  useEffect(() => {
    const fetchPersonaje = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        if (!response.ok) {
          throw new Error("Personaje no encontrado")
        }
        const data = await response.json()
        setPersonaje(data)
      } catch (err) {
        setError(err.message)
      } 
    }

    fetchPersonaje()
  }, [id])

  if (error) return <p>{error}</p>
  if (!personaje) return <p>No se encontró el personaje</p>
  return (
    <main>
      <h1>{personaje.name}</h1>
      <img src={personaje.image} alt={personaje.name} />
      <p>Especie: {personaje.species}</p>
      <p>Estado: {personaje.status}</p>
    </main>
  )
}

export default PersonajesPage