
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useState } from "react";
import  {useDispatch} from 'react-redux'
import { sendMessage } from "./chatSlice";
import { useEffect } from "react";
import { getConversationMessages } from "./chatSlice";
function Chat(){
    useEffect(() => {
        
          dispatch(getConversationMessages());
        
      }, []);
    const dispatch = useDispatch()
    const {messages} = useSelector((state)=> state.chat);
    const {id} = useSelector((state)=> state.user)
    console.log(messages)
    const [newMsg,setNewMsg] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
       setNewMsg(value)
      };



    async function handleSend(){
          
            let values = {
                message : newMsg
              }
          
              await dispatch(sendMessage(values));
           setNewMsg("")
    }


    return(
        <div className="h-full">
        <div className="h-4/5">
               {messages &&
             messages.map((msg) => (
             id === msg.sender ? (
             <div className="text-red-200" key={msg.id}>
            {msg.content}
             </div>
                 ) : (
                 <div className="text-white" key={msg.id}>
               {msg.content}
             </div>
              )
         ))
        }
        </div>
        <div className="">
            <div className="flex rounded-full bg-zinc-200 mx-3 cursor-default">
                <input className="outline-none my-2 w-11/12  rounded-full mx-2 px-2  bg-zinc-200" value={newMsg} onChange={handleChange}/>
                 <div className="pt-2" onClick={handleSend}>
                     <span class="material-symbols-outlined pr-1 ">
                    send
                     </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export {Chat};