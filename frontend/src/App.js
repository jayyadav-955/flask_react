
import './App.css';
import {useState,useEffect} from 'react'
import { Articalslist } from './components/articalslist';
import { Form } from './components/form';
function App() {
  const [articles,setArtricles]=useState([])
  const [editedArticle,setEditedaricles]=useState(null)
  useEffect(()=>{
    fetch('http://127.0.0.1:5000/get',{
      'method':'GET',
      headers:{ 'content-Type':'application/json'}
    })
    .then(res=>res.json())
    .then(res=>setArtricles(res))
    .catch(error=>console.log(error))

  },[])
  const editArticle=(article)=>{

    setEditedaricles(article)
  }
const updateData=(article)=>{
  const new_article=articles.map(my_article=>{
    if(my_article.id===article.id){
      return article
    } else{
      return my_article
    }
  })
  setArtricles(new_article)
}
const openForm=()=>{
  setEditedaricles({title:'',body:''})
}
const insertArticle=(article)=>{
  const new_articles=[...articles,article]
  setArtricles(new_articles)
}
const deleteArticale=(article)=>{
  const newarticles=articles.filter(myarticle=>{
    if(myarticle.id===article.id){
      return false
    }
    return true
  })
  setArtricles(newarticles);
}
  return (
    <div className="App">
      <div className='row'>
        <div className='col'>
        <h1>Flask and Reactjs Crude </h1>

        </div>
        <div className='col'>
          <button className='btn btn-success'
          onClick={openForm}
          >Insert Article</button>

        </div>
       
      </div>
    
   <Articalslist articles= {articles} editArticle={editArticle} deleteArticale={deleteArticale}/>
   {editedArticle ? <Form article={editedArticle} updateData={updateData} insertArticle={insertArticle} />:null}
  
    </div>
  );
}

export default App;
