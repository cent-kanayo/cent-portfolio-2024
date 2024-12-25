"use client";
import {path} from "path"
import { useEffect, useState } from "react";
const usePath = () => {
  const [currentPath, setCurrentPath] = useState(null)
useEffect(()=>{
    if(window.location){
        setCurrentPath(path)
    }
},[])
  return {currentPath}
}

export default usePath