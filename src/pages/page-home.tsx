import { Container } from '../components/container'
import { AlbumsFilter } from '../contexts/albums/components/albums-filter'
import { PhotosList } from '../contexts/photos/components/photos-list'

export function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: '1', title: 'Álbum 1' },
          { id: '2', title: 'Álbum 2' },
        ]}
        className="mb-9"
      />
      <PhotosList
        photos={[
          {
            id: '123',
            title: 'Olá mundo',
            imageId: 'portrait-tower.png',
            albums: [
              { id: '1', title: 'Álbum 1' },
              { id: '2', title: 'Álbum 2' },
            ],
          },
        ]}
      />
    </Container>
  )
}
