import React from 'react'
import {useFormik} from "formik"
import "./Add.scss"
import axios from 'axios'
import { Helmet } from 'react-helmet';
const Add = () => {
   const formik=useFormik({
    initialValues:{
      name:"",
      price:""
    },
    onSubmit:values=>{
      axios.post("http://localhost:8080",values)
    }
   })
  return (
  <>
<Helmet>
  <title>Add</title>
</Helmet>
  <div className='myform'>
   <form onSubmit={formik.handleSubmit}>
     <input type="text" placeholder='add name' id='name' onChange={formik.handleChange} value={formik.values.name}/><br />
     <input type="number" placeholder='add price' id='price' onChange={formik.handleChange} value={formik.values.price}/><br />
     <button type='submit'>Submit</button>
   </form>

  </div>
  
  </>
  )
}

export default Add