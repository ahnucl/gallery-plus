import { useCallback, useState } from 'react'
import SearchIcon from '../assets/icons/search.svg?react'
import { usePhotos } from '../contexts/photos/hooks/use-photos'
import { debounce } from '../helpers/utils'
import { InputText } from './input-text'

export function PhotosSearch() {
  // Aqui de fato React seria um módulo, seria preciso importar ele no lugar do useState
  const [inputValue, setInputValue] = useState('')
  const { filters } = usePhotos()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetValue = useCallback(
    debounce((value: string) => {
      filters.setQ(value)
    }, 500),
    [filters.setQ]
  )

  // Aqui React é um namespace, só está importanto a tipagem
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value

    setInputValue(value)
    debouncedSetValue(value)
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  )
}
