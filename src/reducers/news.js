import constants from '../keymirror/index.js'


//import { messages } from '../containers/MessagesList.js'



/*

const messages  = [
	{ 
		id: 1,
		text: 'Hello!',
		time: 1786912946322,
		author: 'Alexey',
		color: 'green' 
	},
	{ 
		id: 2,
		text: 'Hello, John', 
		time: 17869129963232,
		author: 'Igor',
		color: 'blue'  
	},
]
*/



//console.log(messages)


const messages  = []


  







const messagesReducer = (state = messages, action) =>{




if(action.type === constants.ADD_NEW_MESSAGE){
	let newMes = {
		text: action.text,
author: action.author,
time: action.time,
color: action.color
	}
	return state.concat(newMes)
}	



if(action.type === constants.RECIVE_MESSAGE){

	return state.concat(action.dv)
}	





if(action.type === constants.DELETE_MESSAGE){
return state.filter(mes => {
		return mes.id == action.id
	})
}




return state	
}


export default messagesReducer
