import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { api } from '../../../helpers/api'

export function usePhotoAlbums() {
  const queryCliente = useQueryClient()

  async function managePhotoOnAlbum(
    photoId: string,
    albumsIds: string[],
    isCreatingPhoto = false
  ) {
    try {
      await api.put(`/photos/${photoId}/albums`, {
        albumsIds,
      })

      if (!isCreatingPhoto) {
        queryCliente.invalidateQueries({ queryKey: ['photo', photoId] })
        queryCliente.invalidateQueries({ queryKey: ['photos'] })
      }

      toast.success('Álbums atualizados')
    } catch (error) {
      toast.error('Erro ao gerenciar álbums da foto')
      throw error
    }
  }

  return {
    managePhotoOnAlbum,
  }
}
