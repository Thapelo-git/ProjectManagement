import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import React from 'react'
import { useForm } from 'react-hook-form'
import { tags } from '../Projectlist/ProjectList'
import { Cross1Icon } from '@radix-ui/react-icons'

const ProjectForm = () => {

    const handleTagsChange=(newValue)=>{
        const currentTags=form.getValues("tags");
        const updatedTags =currentTags.includes(newValue)?
        currentTags.filter(tag=>tag!==newValue):[...currentTags,newValue];

        form.setValue('tags',updatedTags);
    }
    
    const form = useForm({
        defaultValues: {
            name: '',
            description: '',
            category: '',
            tags: []
        }
    }

    )

    const onSubmit = (data) => {
        console.log('create project',data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input {...field}
                                type='text'
                                className="border w-full border-gray-700 py-5 py-5"
                                placeName='project name..' />
                            
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                  <FormField control={form.control}
                    name="description"
                    render={({ field }) => (<FormItem>
                        <FormControl>
                            <Input {...field}
                                type='text'
                                className="border w-full border-gray-700 py-5 py-5"
                                placeName='project description..' />
                           
                        </FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                    <FormField control={form.control}
                    name="category"
                    render={({ field }) =>( <FormItem>
                        <FormControl>
                            <Select 
                            defaultValue='fullstack'
                            value={field.value}
                            onValueChange={(value)=>{
                                field.onChange(value)
                            }}
                             
                                className="border w-full border-gray-700 py-5 py-5"
                             >
                                    <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='Category'/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="fullstack">Full Stack</SelectItem>
                                        <SelectItem value="frontend">Frondend</SelectItem>
                                        <SelectItem value="backend">backend</SelectItem>
                                    </SelectContent>
                                </Select>
                            
                        </FormControl>
                        <FormMessage />
                    </FormItem>)}
                />
                 <FormField control={form.control}
                    name="tags"
                    render={({ field }) =>( <FormItem>
                        <FormControl>
                            <Select 
                            // defaultValue='spring boot'
                            // value={field.value}
                            onValueChange={(value)=>{
                               handleTagsChange(value)
                            }}
                             
                                className="border w-full border-gray-700 py-5 py-5"
                             >
                                    <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='Tags'/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {tags.map((item)=>
                                       <SelectItem  key={item} value={item}>{item}</SelectItem> 
                                        )}
                                      
                                    </SelectContent>
                                </Select>
                            
                        </FormControl>
                        <div className='flex gap-1 flex-wrap'>
                            {
                                field.value.map((item)=> <div key={item} onClick={()=>handleTagsChange(item)}
                                className='cursor-pointer flex rounded-full items-center 
                                border gap-2 px-4 py-1'>
                                    <span className='text-sm'>
                                        {item}
                                    </span>
                                    <Cross1Icon className='h-3 w-3'/>
                                </div>
                                )
                            }
                           
                        </div>
                        <FormMessage />
                    </FormItem>)}
                />
                <DialogClose>
                    {false ? (<div>
                        <p>You can create only 3
                            project with free plan</p>
                    </div>) : (<Button type="submit" className="w-full my-5">
                        Create Project
                    </Button>)}
                </DialogClose>
            </form>
        </Form>
    )
}

export default ProjectForm