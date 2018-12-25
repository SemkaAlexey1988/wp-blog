import { combineReducers } from 'redux'


import commentsReducer from './comments.js'
import newslistReducer from './newslist.js'
import newsoneReducer from './newsone.js'


const chatReducer = combineReducers(
{
	commentsReducer,
	newslistReducer,
	newsoneReducer
}
)


export default chatReducer


