import React, { useEffect, useState } from 'react'
import ApiService from './ApiService'

export const Form = (props) => {
    const[title,setTitle]=useState(props.article.title)
    const[body,setBody]=useState(props.article.body)

    useEffect(()=>{
        setTitle(props.article.title)
        setBody(props.article.body)
    },[props.article])

    const updateArticle=()=>{
        ApiService.UpdateArticle(props.article.id,{title,body})
        .then(resp=>props.updateData(resp))
        .catch(error=>console.log(error))

    }
    const insertArticle=()=>{
        ApiService.insertArticle({title,body})
        .then(resp=>props.insertArticle(resp))
        .catch(error=>console.log(error))

    }
    // const deleteArticale=()=>{
    //     ApiService.deleteArticle(props.article.id,{title,body})
    //     .then(resp=>console.log(resp))
    //     .catch(error=>console.log(error))
    // }
  return (
    <div>
        {props.article ?(
            <div className='mb-3'>
            <label htmlFor="title" className='form-label'>Title</label>
            <input type='text' className='form-control' placeholder='please Enter Title'value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            />

            <label htmlFor="body" className='form-label'>Description</label>
            <textarea type='text' className='form-control'rows="5" placeholder='please Enter Description' value={body}
            onChange={(e)=>{setBody(e.target.value)}}/>


{
    props.article.id ? <button  onClick={updateArticle}
    className='btn btn-success mt-3'>Update</button>:
    <button 
    onClick={() => {
        insertArticle(); 
        setTitle("")
        setBody("")
    }} 
    className='btn btn-success mt-3'>
    Insert
</button>

}
           
            </div>
            
        ):null}
    </div>
  )
}
