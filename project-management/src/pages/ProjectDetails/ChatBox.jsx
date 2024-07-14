import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import React from 'react'

const ChatBox = () => {
  const [message,setMessage]=useState("")
  const handleSendMessage =()=>{

  }
  const handleMessageChange=(e)=>{
    setMessage(e.target.value);
  }
  return (
    <div className='stricky'>
      <div className='border rounded-lg'>
        <h1 className='border-b p-5'>Chat Bot</h1>
        <ScrollArea className='h-[32rem] w-full p-5 flex gap-3 flex-col'>
          {[1,1,1,1].map((item,index)=>(
          index%2 == 0?( <div className='flex gap-2 mb-2 justify-start' key={item}>
          <Avatar>
            <AvatarFallback>L</AvatarFallback>
          
          </Avatar>
          <div className='space-y-2 py-2 px-5 border rounded-ss-2x1 rounded-e-xl'>
              <p>Leah</p>
              <p className='text-gray-300'>How are you</p>
            </div>
        </div>):( <div className='flex gap-2 mb-2 justify-end' key={item}>
          
            <div className='space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl'>
                <p>Leah</p>
                <p className='text-gray-300'>How are you</p>
              </div>
              <Avatar>
              <AvatarFallback>L</AvatarFallback>
            
            </Avatar>
          </div>)
         
          ))}
        </ScrollArea>
        <div className='relative p-0'>
          <Input
          placeholder="type message..."
          className='py-7 border-t outline-none focus:outline-none
          focus:ring-0 rounded-none border-b-0 border-x-0'
          value={message} onchange={handleMessageChange}
          />
          <Button onClick={handleSendMessage} className='absolute right-2
          top-3 rounded-full' size='icon' variant='ghost'>
              <PaperPlaneIcon/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox