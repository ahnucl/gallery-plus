import { useForm } from 'react-hook-form'
import ChevronLeftIcon from './assets/icons/chevron-left.svg?react'
import ChevronRightIcon from './assets/icons/chevron-right.svg?react'
import SearchIcon from './assets/icons/search.svg?react' // vite svgr -> transforma svgs em components react
import { Alert } from './components/alert'
import { Badge } from './components/badge'
import { Button } from './components/button'
import { ButtonIcon } from './components/button-icon'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from './components/dialog'
import { Divider } from './components/divider'
import { ImagefilePreview } from './components/image-file-preview'
import { InputCheckbox } from './components/input-checkbox'
import { InputSingleFile } from './components/input-single-file'
import { InputText } from './components/input-text'
import { Text } from './components/text'

export function App() {
  const testForm = useForm()
  const file = testForm.watch('file')
  const fileSource = file?.[0] ? URL.createObjectURL(file[0]) : undefined

  return (
    <div className="grid gap-7 p-6">
      <div className="flex gap-3">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button disabled>Button</Button>
        <Button handling>Loading</Button>
        <Button icon={ChevronRightIcon}>Próxima Imagem</Button>
        <Button variant="ghost" size="sm">
          Button
        </Button>
        <Button variant="primary" size="sm">
          Button
        </Button>
      </div>

      <div className="flex gap-3">
        <ButtonIcon icon={ChevronLeftIcon} />
        <ButtonIcon icon={ChevronRightIcon} variant="secondary" />
      </div>

      <div className="flex gap-3">
        <Badge>Todos</Badge>
        <Badge>Natureza</Badge>
        <Badge>Viagem</Badge>
        <Badge loading>Viagem</Badge>
        <Badge loading>Viagem</Badge>
        <Badge loading>Viagem</Badge>
      </div>

      <div>
        <Alert>
          Tamanho máximo: 50MB
          <br />
          Você pode selecionar arquivos em PNG, JPG, JPEG ou WEBP
        </Alert>
      </div>

      <div>
        <Divider />
      </div>

      <div className="space-y-2">
        <InputText placeholder="Buscar foto" icon={SearchIcon} />
        <InputText placeholder="Buscar foto" icon={SearchIcon} disabled />
      </div>

      <div className="space-x-2">
        <InputCheckbox />
        <InputCheckbox size="sm" />
        <InputCheckbox disabled />
      </div>

      <div>
        <InputSingleFile
          form={testForm}
          allowedExtensions={['png', 'jpg', 'jpeg', 'webp']}
          maxFileSizeInMB={50}
          replaceBy={<ImagefilePreview src={fileSource} alt="Imagem" />}
          {...testForm.register('file')}
        />
      </div>

      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Abrir Modal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Teste dialog header</DialogHeader>
            <DialogBody>
              <Text as="div" className="mb-4">
                Teste conteúdo do dialog
              </Text>
              <InputSingleFile
                form={testForm}
                allowedExtensions={['png', 'jpg', 'jpeg', 'webp']}
                maxFileSizeInMB={50}
                replaceBy={<ImagefilePreview src={fileSource} alt="Imagem" />}
                {...testForm.register('file')}
              />
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Cancelar</Button>
              </DialogClose>
              <Button>Adicionar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
