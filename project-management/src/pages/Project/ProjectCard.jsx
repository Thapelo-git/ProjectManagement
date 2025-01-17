import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Navigate, useNavigate } from 'react-router-dom'

const ProjectCard = () => {
    const navigate=useNavigate()
  return (
    <Card className="p-5 w-full lg:max-w-3xl">
        <div className='space-y-5'>
            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-5'>
                        <h1 onClick={()=>navigate("/project/3")}
                        className='cursor-poiner font-bond text-lg'>
                            Create Ecommerce Project
                        </h1>
                        <DotFilledIcon/>
                        <p className='text-sm text-gray-400'>Fullstack</p>
                    </div>
                    <div >
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button className="rounded-full" 
                                 variant='ghost' size="icon">
                                    <DotsVerticalIcon/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Update
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <p className='text-gray-500 text-sm'>
                    Learn more about fontend lagaueges like HTML,CSS,JavaScript</p>
                    <div className='flex flex-wrap gap-2 items-center'>
                        {
                            [1,1,1,1].map((item)=><Badge key={item} variant="outline">Fullstack</Badge>)
                        }
                    </div>
            </div>

        </div>
    </Card>
  )
}

export default ProjectCard