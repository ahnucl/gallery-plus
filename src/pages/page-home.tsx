import { Container } from '../components/container'
import { PhotoWidget } from '../contexts/photos/components/photo-widget'
import type { Photo } from '../contexts/photos/models/photo'

export function PageHome() {
  return (
    <Container>
      <div className="grid grid-cols-5 gap-9">
        <PhotoWidget
          photo={{
            id: '123',
            title: 'Olá mundo',
            imageId: '/images/portrait-tower.png',
            albuns: [
              { id: '123', title: 'Album 1' },
              { id: '124', title: 'Album 2' },
              { id: '125', title: 'Album 3' },
            ],
          }}
        />
        <PhotoWidget
          photo={{
            id: '123',
            title: 'Olá mundo',
            imageId: '/images/portrait-tower.png',
            albuns: [
              { id: '123', title: 'Album 1' },
              { id: '124', title: 'Album 2' },
              { id: '125', title: 'Album 3' },
            ],
          }}
        />
        <PhotoWidget
          photo={{
            id: '123',
            title: 'Olá mundo',
            imageId: '/images/portrait-tower.png',
            albuns: [
              { id: '123', title: 'Album 1' },
              { id: '124', title: 'Album 2' },
              { id: '125', title: 'Album 3' },
            ],
          }}
        />
        <PhotoWidget
          photo={{
            id: '123',
            title: 'Olá mundo',
            imageId: '/images/portrait-tower.png',
            albuns: [
              { id: '123', title: 'Album 1' },
              { id: '124', title: 'Album 2' },
              { id: '125', title: 'Album 3' },
            ],
          }}
        />
        <PhotoWidget photo={{} as Photo} loading />
      </div>
    </Container>
  )
}
