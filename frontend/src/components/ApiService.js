export default class ApiService{
    static UpdateArticle(id,body){
        return fetch(
            `http://127.0.0.1:5000/update/${id}/`,{
                'method':'PUT',
                headers:{ 'content-Type':'application/json'},
                body:JSON.stringify(body)
              })
              .then(resp=>resp.json())
    }


    static insertArticle(body){
        return fetch(
            `http://127.0.0.1:5000/add`,{
                'method':'POST',
                headers:{ 'content-Type':'application/json'},
                body:JSON.stringify(body)
              })
              .then(resp=>resp.json())
    }

    static DeleteArticle(id){
        return fetch(
            `http://127.0.0.1:5000/delete/${id}/`,{
                'method':'DELETE',
                headers:{ 'content-Type':'application/json'},
              
              })
              
    }
}