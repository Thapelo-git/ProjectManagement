import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

const CreateCommentForm = ({issueId}) => {
    const form = useForm({
        defaultValues: {
            comment: '',
       
        }
    }

    )

    const onSubmit = (data) => {
        console.log('create project',data)
    }
  return (
    <Form {...form}>
        <form className='flex gap-2' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
            control={form.control}
            name='content'
            render={({field})=>(
                <FormItem >
                    <div className='flex gap-2'>
                    <div>
                        <Avatar>
                            <AvatarFallback>L</AvatarFallback>
                        </Avatar>
                    </div>
                    <FormControl>
                        <Input
                        {...field}
                        type='text'
                        className='w-[20rem]'
                        placeholder='type your comment'/>
                    </FormControl>
                    </div>
                 
                </FormItem>
            )}
            />
            <Button type='submit' >
                save
            </Button>
        </form>
    </Form>
  )
}

export default CreateCommentForm