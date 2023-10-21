import { Outlet } from "react-router"

function Signin(){

    return(
        <div>
        <div className="flex gap-x-4">
            <div>User</div>
            <div>Lawyer</div>
        </div>
        <Outlet/>
        </div>
    )
}

export {Signin}