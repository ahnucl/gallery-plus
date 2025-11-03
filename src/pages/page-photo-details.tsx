import { Container } from '../components/container'
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
    </Container>
  )
}
