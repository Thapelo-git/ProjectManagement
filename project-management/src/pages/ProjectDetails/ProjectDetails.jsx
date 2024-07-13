import InviteUserForm from '@/pages/ProjectDetails/InviteUserForm'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DotFilledIcon, PlusIcon } from '@radix-ui/react-icons'

import React from 'react'

const ProjectDetails = () => {

    const handleProjectInvitation=()=>{

    }
  return (
    <div className='mt-5 lg:px-10'>
        <div className='lg:flex gap-5 justify-between pb-4'>
        <ScrollArea className='h-screen lg:w-[69%] pr-2'>
            <div className='text-gray-400 pb-10 w-full'>
                <h1 className='text-lg fonts-semibold pb-5'>Create Ecommerce Project</h1>
            </div>
            <div className='space-y-5 pb-10'>
                <p className='w-full md:max-w-lg lg:max-w-xl'>
                    Start the your project with react
                </p>
                <div className='flex'>
                    <p className='w-36'>Project Lead :</p>
                    <p>Leah</p>
                </div>
                <div className='flex'>
                    <p className='w-36'>Members :</p>
                   <div className='flex items-center gap-2'>
                    {[1,1,1,1].map((item)=><Avatar className='cursor-pointer' key={item}>
                        <AvatarFallback>L</AvatarFallback>
                    </Avatar>)}
                   </div>
                   <Dialog>
                        <DialogTrigger>
                            <DialogClose>
                                <Button size="sm"  onClick={(handleProjectInvitation())}
                                variant="outline" className="ml-2">
                                    <span>invite</span>
                                    <PlusIcon className="w-3 h-3"/>
                                </Button>
                            </DialogClose>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>Invite User</DialogHeader>
                            <InviteUserForm/>
                        </DialogContent>
                   </Dialog>
                </div>
                <div className='flex'>
                    <p className='w-36'>Category :</p>
                    <p>Fullstack</p>
                </div>
                <div className='flex'>
                    <p className='w-36'>Project Lead :</p>
                    <Badge>Leah</Badge>
                </div>
                
            </div>
        </ScrollArea>
        </div>
    </div>
  )
}

export default ProjectDetails