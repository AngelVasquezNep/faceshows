import useApi from './useApi'

const PATHS = {
  CHARACTERS: '/character'
}

const useCharacters = () => {
  const { data, isLoading, isError } = useApi(PATHS.CHARACTERS)

  const baseData = {
    info: {},
    results: []
  }

  return {
    isLoading,
    isError,
    data: {
      ...baseData,
      ...data
    }
  }
}

const useCharacter = (characterId) => {
  const { data, isLoading, isError } = useApi(`${PATHS.CHARACTERS}/${characterId}`)

  return {
    isLoading,
    isError,
    data,
  }
}


export default {
  useCharacter,
  useCharacters
}
