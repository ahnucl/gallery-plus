import { tv } from 'tailwind-variants'

export const imagePreviewVariants = tv({
  base: `
    rounded-lg overflow-hidden
  `,
})

export const imagelPreviewImageVariants = tv({
  base: `
    w-full h-full object-cover
  `,
})

interface ImagePreviewProps extends React.ComponentProps<'img'> {
  imageClasseName?: string
}

export function ImagePreview({
  className,
  imageClasseName,
  ...props
}: ImagePreviewProps) {
  return (
    <div className={imagePreviewVariants({ className })}>
      <img
        className={imagelPreviewImageVariants({
          className: imageClasseName,
        })}
        {...props}
      />
    </div>
  )
}
