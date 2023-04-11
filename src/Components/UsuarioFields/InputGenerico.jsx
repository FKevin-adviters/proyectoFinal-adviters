import { TextField } from '@mui/material'
import React from 'react'


const InputGenerico = ({id, label, type, name, setUserInfo}) => {

    const handleChange = (event) => {
        setUserInfo ((old)=>{
          return {
            ...old, [event.target.name]: event.target.value
          }
        })
      }


  return (
    <TextField id={id} label={label} type={type} name={name} onChange={handleChange}/>
  )
}

export default InputGenerico