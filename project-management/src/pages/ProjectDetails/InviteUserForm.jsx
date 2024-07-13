import { Form } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form'

const InviteUserForm = () => {
    const form = useForm({
        defaultValues: {
            email: '',
       
        }
    }

    )

    const onSubmit = (data) => {
        console.log('create project',data)
    }
  return (
    <Form>
        <form>
            
        </form>
    </Form>
  )
}

export default InviteUserForm