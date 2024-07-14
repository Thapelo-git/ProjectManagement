import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
const CreateIssueForm = () => {
    const form = useForm({
        defaultValues: {
            Issuename: '',
            Description:''
       
        }
    }

    )

    const onSubmit = (data) => {
        console.log('create project',data)
    }
  return (
    <Form {...form}>
    <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
        control={form.control}
        name="IssueName"
        render={({field})=>(
            <FormItem>
                <FormControl>
                    <Input
                    {...field}
                    type='text'
                    className='border w-full border-gray-700 py-5 px-5'
                    placeholder='IssueName'
                    />
                </FormControl>
                <FormMessage/>
            </FormItem>)
        }
        />
         <FormField
        control={form.control}
        name="Description"
        render={({field})=>(
            <FormItem>
                <FormControl>
                    <Input
                    {...field}
                    type='text'
                    className='border w-full border-gray-700 py-5 px-5'
                    placeholder='Description'
                    />
                </FormControl>
                <FormMessage/>
            </FormItem>)
        }
        />

        <DialogClose>
            <Button type="submit" className="w-full mt-5">
                Create Issue
            </Button>
        </DialogClose>
    </form>
</Form>
  )
}

export default CreateIssueForm