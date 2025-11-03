import { Button } from '../components/button'
import { Container } from '../components/container'
import { ImagePreview } from '../components/image-preview'
import { Skeleton } from '../components/skeleton'
import { Text } from '../components/text'
import { PhotosNavigator } from '../contexts/photos/components/photos-navigator'
import type { Photo } from '../contexts/photos/models/photo'

export function PagePhotoDetails() {
  // for Mock test only
  const isLoadingPhoto = false
  const photo = {
    id: '123',
    title: 'Olá mundo',
    imageId: 'portrait-tower.png',
    albuns: [
      { id: '1', title: 'Álbum 1' },
      { id: '2', title: 'Álbum 2' },
    ],
  } as Photo

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator loading={isLoadingPhoto} />
      </header>

      <div className="grid grid-cols-[21rem] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}

          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>
      </div>
    </Container>
  )
}
