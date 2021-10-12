import {useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'

const modalRoot = document.getElementById('modal')

const Modal = ()=>{
  const elRef = useRef(null)
  if(!elRef.current){
    elRef.current=document.createElement('div')
  }
  
  useEffect(()=>{
    modalRoot.appendChild(elRef.current)
    
    return()=> modalRoot.removeChild(elRef.current)
  },[])
}
 
