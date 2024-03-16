import { Button } from '@app/ui/components/button'
import { useFormStatus } from 'react-dom'

export const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()

  return (
    <Button isLoading={pending} type="submit">
      Submit
    </Button>
  )
}
