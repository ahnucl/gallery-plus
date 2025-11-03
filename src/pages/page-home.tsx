import { Container } from '../components/container'
import { AlbumsFilter } from '../contexts/albums/components/albums-filter'
import { PhotosList } from '../contexts/photos/components/photos-list'

export function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: '1', title: 'asdasdas' },
          { id: '2', title: 'asdasdasasdasdas' },
        ]}
        className="mb-9"
      />
      <PhotosList photos={[]} />
    </Container>
  )
}
