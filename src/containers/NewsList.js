import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import PropTypes from 'prop-types';


import './NewsList.scss';



class NewsList extends Component {

constructor(){
	super()
	this.state = {
		news: []
	}
}


componentWillMount() {
fetch('http://example.com/wp-json/wp/v2/posts', {
headers: { 'Content-Type': 'application/json'},
method: 'GET',
mode: 'cors'
})
  .then(response => response.json())
  .then(json => { 
  	console.log(json)

this.setState({
  news: json

})

    })
}




onLink(event){
  let sds = event.target.id
//alert(sds);
this.context.router.history.push(`/news/${sds}`)
}




render(){

	let { news } = this.state;

	 let newsli = this.props.newsl


 let newslist = newsli.concat(news)
	

return (
	<div className='news'>
<h1>Articles</h1>

{newslist.map(nw => {
	let nws = nw.content.rendered.substr(0, 100)
	let nwsd = nws + '...' 
return <div key={nw.id} className='news__element'>
<h2 id={nw.id} className='newsl__title' onClick={this.onLink.bind(this)}>{nw.title.rendered}</h2>
<p className='news__date'>{nw.date}</p>
<p className='news__text'>{nwsd}</p>
</div>
})

}


</div>
)	

}	





}







const mapStateProps = (state) => {
return{
newsl: state.newslistReducer,
}	
}
const mapDispatchProps = (dispatch) =>{
return {
	dispatch
	}
}



NewsList.contextTypes = {
    router: PropTypes.object.isRequired 
};


export default connect(mapStateProps, mapDispatchProps)(NewsList)
