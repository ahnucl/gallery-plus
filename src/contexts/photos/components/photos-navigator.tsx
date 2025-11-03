import { useNavigate } from 'react-router'
import ArrowLeftIcon from '../../../assets/icons/chevron-left.svg?react'
import ArrowRightIcon from '../../../assets/icons/chevron-right.svg?react'
import { Button } from '../../../components/button'
import { ButtonIcon } from '../../../components/button-icon'
import { Skeleton } from '../../../components/skeleton'
import cx from 'classnames'

interface PhotosNavigatorProps extends React.ComponentProps<'div'> {
  previousPhotoId?: string
  nextPhotoId?: string
  loading?: boolean
}

export function PhotosNavigator({
  previousPhotoId,
  nextPhotoId,
  loading,
  className,
  ...props
}: PhotosNavigatorProps) {
  const navigate = useNavigate()

  return (
    <div className={cx('flex gap-2', className)} {...props}>
      {!loading ? (
        <>
          <ButtonIcon
            icon={ArrowLeftIcon}
            variant="secondary"
            disabled={!previousPhotoId}
            onClick={() => {
              navigate(`/photos/${previousPhotoId}`)
            }}
          />
          <Button
            icon={ArrowRightIcon}
            variant="secondary"
            disabled={!nextPhotoId}
            onClick={() => {
              navigate(`/photos/${nextPhotoId}`)
            }}
          >
            Próxima imagem
          </Button>
        </>
      ) : (
        <>
          <Skeleton className="w-10 h-10" />
          <Skeleton className="w-40 h-10" />
        </>
      )}
    </div>
  )
}
