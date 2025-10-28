import { tv } from 'tailwind-variants'

export const imageFilePreviewVariants = tv({
  base: `
    rounded-lg overflow-hidden
  `,
})

export const imagelFilePreviewImageVariants = tv({
  base: `
    w-full h-full object-cover
  `,
})

interface ImageFilePreviewProps extends React.ComponentProps<'img'> {
  imageClasseName?: string
}

export function ImagefilePreview({
  className,
  imageClasseName,
  ...props
}: ImageFilePreviewProps) {
  return (
    <div className={imageFilePreviewVariants({ className })}>
      <img
        className={imagelFilePreviewImageVariants({
          className: imageClasseName,
        })}
        {...props}
      />
    </div>
  )
}
