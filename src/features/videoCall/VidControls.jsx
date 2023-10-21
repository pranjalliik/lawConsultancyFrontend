import { useState } from "react"
import { useContext } from "react"
import {PostContext } from "./postContext";
function VidControl(){



    const [micStatus,setMicStatus] = useState(true)
    const {rightPopUp , setRightPopUp} = useContext(PostContext);

    return(
        <div className="box-border fixed bottom-0 left-0 w-screen flex bg-black justify-center gap-x-5 items-center h-20 pb-4 pt-2 cursor-default">
            <div>
                <span class="material-symbols-outlined text-white bg-red-900 p-3 rounded-full hover:p-4">
                call
                </span>
            </div>
                {
                    micStatus ?
            <div onClick={()=>setMicStatus(!micStatus)}>
              <span class="material-symbols-outlined text-white bg-zinc-600 opacity-70 p-3 rounded-full hover:bg-zinc-500 ">
              mic
              </span>
            </div> :
                        <div onClick={()=>setMicStatus(!micStatus)}>
                        <span class="material-symbols-outlined text-white bg-zinc-600 opacity-70 p-3 rounded-full hover:bg-zinc-500">
                       mic_off
                        </span>
                      </div>                    

                }
                <div onClick={()=>setRightPopUp(!rightPopUp)}>
                <span class="material-symbols-outlined text-white">
                chat_bubble
                </span>
                </div>
        </div>
    )
}

export {VidControl}