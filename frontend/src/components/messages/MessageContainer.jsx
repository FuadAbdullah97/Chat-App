import { TiMessages } from "react-icons/ti";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";

const MessageContainer = () => {
    const noChatSelected = true;
    return (
       <div className='md:min-w-[450px] flex flex-col'>
           {noChatSelected ? (<NoChatSelected />) :(
               <>

                   <div  className='md:min-w-[450px] flex flex-col'>
                       <div className='flex gap-2 bg-gray-400'>
                           <span className='label-text text-gray-900 font-bold'>To:</span> <span className='text-gray-900 font-bold '>John Doe</span>
                       </div>
                       <Messages/>
                       <MessageInput/>
                   </div>

               </>
           )}
       </div>
            )
}

export default MessageContainer;

const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-xl md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome John Doe</p>
                <p>Select a chat to start messaging</p>
                <TiMessages />
            </div>
        </div>
    )
}