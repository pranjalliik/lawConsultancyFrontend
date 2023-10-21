import { VideoCall } from "./features/videoCall/VideoCall";
import { UserSignin } from "./features/auth/UserSignin";
import {LawyerSignin} from "./features/auth/lawyerSignin"
import { createRoot } from 'react-dom/client';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { UserHome } from "./features/Homepage/UserHome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Signin } from "./features/auth/Signin";
import axios from "axios";


axios.defaults.withCredentials = true;


function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });


  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <Routes>

        <Route  path="/" element={<UserHome/>}>
          
          </Route>


        <Route  path="/call" element={<VideoCall/>}>
          
        </Route>

        <Route path="/signin" element={<Signin/>}>
        <Route index element = {<UserSignin/>}/>
          <Route path="lawyer" element={<LawyerSignin/>}/>

        </Route>
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
     
  );
}



export default App;
