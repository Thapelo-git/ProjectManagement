import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import ProjectForm from '../Project/ProjectForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'

const Navbar = () => {
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <p className='cursor-pointer'>Project Management</p>
            <Dialog>
            <DialogTrigger>
                    <Button variant='ghost'>New Project</Button>
            </DialogTrigger>
          
            <DialogContent>
            <DialogHeader>Create New Project</DialogHeader>
                <ProjectForm/>
            </DialogContent>
            </Dialog>
           <Button variant='ghost'>Update</Button>
        </div>
        <div className='flex gap-3 items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant='outline' size='icon' className='rounded-full border-2 border-gray-50'>
                    <PersonIcon/>
                    </Button>
                   
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
  )
}

export default Navbar