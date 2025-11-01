import { Link } from 'react-router'
import { Badge } from '../../../components/badge'
import { buttonTextVariants, buttonVariants } from '../../../components/button'
import { ImagePreview } from '../../../components/image-preview'
import { Skeleton } from '../../../components/skeleton'
import { Text } from '../../../components/text'
import type { Photo } from '../models/photo'

interface PhotoWidgetProps {
  photo: Photo
  loading?: boolean
}

export function PhotoWidget({ photo, loading = false }: PhotoWidgetProps) {
  return (
    <div className="flex flex-col gap-4">
      {!loading ? (
        <ImagePreview
          src={photo.imageId}
          title={photo.title}
          imageClassName="w-[10.875rem] h-[10.875rem] rounded-lg"
        />
      ) : (
        <Skeleton className="w-[10.875rem] h-[10.875rem] rounded-lg" />
      )}

      <div className="flex flex-col gap-2">
        {!loading ? (
          <Text variant="paragraph-large" className="truncate">
            {photo.title}
          </Text>
        ) : (
          <Skeleton className="w-full h-6" />
        )}

        <div className="flex gap-1 min-h-[1.375rem]">
          {!loading ? (
            <>
              {photo.albuns.slice(0, 1).map((album) => (
                <Badge className="truncate" size="xs" key={album.id}>
                  {album.title}
                </Badge>
              ))}
              {photo.albuns.length > 1 && (
                <Badge size="xs"> +{photo.albuns.length - 1} </Badge>
              )}
            </>
          ) : (
            Array.from({ length: 1 }).map((_, i) => (
              <Skeleton
                key={`album-loading-${i}`}
                className="w-full h-4 rounded-sm"
              />
            ))
          )}
        </div>
      </div>

      {!loading ? (
        <Link
          to={`/photos/${photo.id}`}
          className={buttonVariants({
            variant: 'secondary',
            className: 'px-2 py-2',
          })}
        >
          <Text
            className={buttonTextVariants({ variant: 'secondary', size: 'sm' })}
          >
            Detalhes da imagem
          </Text>
        </Link>
      ) : (
        <Skeleton className="w-full h-10" />
      )}
    </div>
  )
}
