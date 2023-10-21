import { VidControl } from "./VidControls"
import { RemotVideo } from "./RemotVideo"
import { Video } from "./Video"
import { useMemo } from "react"
import {io} from "socket.io-client"
import { useState } from "react"
import { PostContext } from "./postContext"
import { useQuery } from "@tanstack/react-query";
import { getMsg } from "../../services/callApi"
import { Chat } from "./Chat"

function VideoCall(){

 
   const [rightPopUp,setRightPopUp] = useState(false); 
   
    const socket = useMemo(() =>io("localhost:80"),[]);
 
    return(
        <PostContext.Provider value={{ rightPopUp, setRightPopUp }}>

        <div className="bg-gray-900	h-screen w-screen box-border overflow-hidden ">
            <div className="flex h-full w-full">
            <div className="grid grid-cols-[2fr,1fr] text-white h-full w-full ">
                <div className="flex justify-center mt-20 ">
                   <RemotVideo/>
                </div>
                <div className="pt-6 ">
                    <Video/>
                </div>

            </div>
            {
             rightPopUp&&   
        <div className=" bg-black h-full w-1/3 transition duration-500 ease-in-out	translate-x-1	 ">
            <Chat/>
        </div>
            }
          </div>
   
            </div>
        <VidControl/>
        
        </PostContext.Provider>
    )
}

export {VideoCall}

/**
 * 
 *           
 */