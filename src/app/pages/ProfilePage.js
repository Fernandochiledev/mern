import React from "react";
import { useParams} from 'react-router-dom' 
export default function ProfilePage() { 
   const { username} = useParams();
      return (
         <div> 
            <h1>profile {username}</h1> 
         </div>
      )
   }