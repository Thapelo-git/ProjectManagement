import { Button } from '@/components/ui/button'
import { Card,CardContent } from '@/components/ui/card'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import { ScrollArea } from '@/components/ui/scroll-area'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import ProjectCard from '../Project/ProjectCard'

export const tags=[
    "all","react","nextjs","spring boot","mysql","mongodb",
    "angular","python","django"
]
const ProjectList = () => {
    const [keyword,setKeyword]=useState("")

    const handleFilterChange =(value,section)=>{
        console.log("value",value,section)
    }
    const handleSearchChange =(e)=>{
        setKeyword(e.target.value)
    }

    return (
        <>
            <div className='relative px-5 lg:px-0 lg:flex 
    gap-5 justify-center py-5'>
                <section className='filterSection'>
                    <Card className='p-5 sticky top-10'>
                        <div className='flex justify-between lg:w-[20rem]'>
                            <p className='text-xl -tracking-wider'> filters</p>
                            <Button variant='ghost' size='icon'>
                                <MixerHorizontalIcon />
                            </Button>
                        </div>
                        <CardContent className='mt-5'>
                            <ScrollArea className='space-y-7 h-[70vh]'>
                                    <div>
                                        <h1 className='pb-3 text-gray-400 border-b'>
                                            Category
                                        </h1>
                                        <div className='pt-5'>
                                            <RadioGroup defaultValue="all" 
                                            className='space-y-3 pt-5'
                                            onValueChange={(value)=>handleFilterChange("category",value)}>
                                                <div className='flex items-center gap-2'>
                                                    <RadioGroupItem value='all' id='r1'>
                                                        <Label htmlFor='r1'>All</Label>
                                                        

                                                    </RadioGroupItem>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <RadioGroupItem value='fontend' id='r2'>
                                                        <Label htmlFor='r2'>Fontend</Label>
                                                    </RadioGroupItem>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <RadioGroupItem value='FullStack' id='r3'>
                                                        <Label htmlFor='r3'>FullStack</Label>
                                                    </RadioGroupItem>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <RadioGroupItem value='Backend' id='r4'>
                                                        <Label  htmlFor='r4'>Backend</Label>
                                                    </RadioGroupItem>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                    <div className='pt-9'>
                                        <h1 className='pb-3 text-gray-400 border-b'>
                                            Tag
                                        </h1>
                                        <div className='pt-5'>
                                            <RadioGroup defaultValue="all" 
                                            className='space-y-3 pt-5'
                                            onValueChange={(value)=>handleFilterChange("tag",value)}>
                                                {
                                                    tags.map((item)=>
                                                        <div key={item} className='flex items-center gap-2 '>
                                                    <RadioGroupItem value={item} id={`r1-${item}`}>
                                                        <Label htmlFor={`r1-${item}`}>{item}</Label>
                                                    </RadioGroupItem>
                                                </div>)
                                                }
                                                
                                                
                                                
                                              
                                            </RadioGroup>
                                        </div>
                                    </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </section>
                <section className='projectListSection w-full lg:w-[48rem]'>
                    <div className='flex gap-2 items-center pb-5 justify-between'>
                            <div className='relative p-0 w-full'>
                                <Input 
                                onChange={handleSearchChange}
                                placeholder="Search project"
                                className="40% px-9"/>
                                <MagnifyingGlassIcon className='absolute top-3 left-4'/>
                            </div>
                    </div>
                    <div>
                        <div className='space-y-5 min-h-[74vh]'>
                            {
                                keyword?[1].map((item)=><ProjectCard key={item}/>):
                                [1,1,1,1].map((item)=><ProjectCard key={item}/>)
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProjectList