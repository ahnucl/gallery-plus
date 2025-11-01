import { Container } from '../components/container'
import { PhotosList } from '../contexts/photos/components/photos-list'

export function PageHome() {
  return (
    <Container>
      <PhotosList photos={[]} />
    </Container>
  )
}
