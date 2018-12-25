import { createStore } from 'redux'
import  chatReducer  from '../reducers/reducers.js'

const chatStore = createStore(
	chatReducer
)

export default chatStore