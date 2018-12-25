import constants from '../keymirror/index.js'




const comments  = []


  







const commentsReducer = (state = comments, action) =>{




if(action.type === constants.ADD_NEW_COMMENT){

let dat = new Date();
let year = dat.getFullYear();
let month = dat.getMonth(+1);
let day = dat.getDate();
let hours = dat.getHours();
let minutes = dat.getMinutes();
let seconds = dat.getSeconds();
let date = dat.getDate();
let renderdate = `${year}-${++month}-${day}T${hours}:${minutes}:${seconds}`;


	let newComment= {
		date: renderdate,
		author_name: action.author_name,
author_email: action.author_email,
content: {rendered: action.content},
post: action.post
	}
	return state.concat(newComment)

}	









return state	
}


export default commentsReducer
