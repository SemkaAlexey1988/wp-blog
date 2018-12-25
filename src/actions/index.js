
import constants from '../keymirror/index.js'









export const addNewComment = (author_name, author_email, content, post) => {


fetch('http://example.com/wp-json/wp/v2/comments', {
headers: { 'Content-Type': 'application/json'},
method: 'POST',

 body: JSON.stringify({
   // "id": Date.now(),
      "author_name": author_name,
      "author_email": author_email,
      "content": content,
      "post": post

    }),

mode: 'cors'

})
  .then(response => response.json())
  .then(json => { 
    console.log(json)



    }) 


return {
type: 'ADD_NEW_COMMENT',
author_name, 
author_email, 
content,
post
}


}


export const reciveMessage = () => {

fetch("http://example/messages", {
	headers: {'Access-Control-Allow-Origin': 'http://localhost:3000', 'Content-Type': 'application/json'}, 
	method: 'GET',
      mode: 'cors'
    })
      .then(res => res.json())
      .then(
        (result) => {  
console.log(result)
const dv = result

      }
    
      )
     const dv = []
 return {
type: 'RECIVE_MESSAGE',
dv
}
     

}	