import Parser from 'html-react-parser';

import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';  

import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'


import { addNewComment } from '../actions/index.js'


import './NewsOne.scss';



//import Comments from '../containers/Comments.js'


class NewsOne extends Component {

	constructor() {
	super()
	



}

componentWillMount() {
  this.setState({
newsoneTitle: [],
newsoneContent: [],
newsoneWrap: [],
newsm: [],
comments: [],
isLoaded: false,
isLoadeds: false  
})



let ds = this.props.match.params.id;
	console.log(ds);


 fetch(`http://example.com/wp-json/wp/v2/posts/${ds}`, {
headers: { 'Content-Type': 'application/json'},
method: 'GET',
mode: 'cors'
})
  .then(response => response.json())
  .then(json => { 
  	console.log(json)

this.setState({
  newsoneTitle: json.title,
  newsoneContent: json.content,
  newsoneWrap: json,
  isLoaded: true 


})

    })	



	}

componentDidMount() {

fetch('http://herba.mirosvit.com/wp-json/wp/v2/posts', {
headers: { 'Content-Type': 'application/json'},
method: 'GET',
mode: 'cors'
})
  .then(response => response.json())
  .then(json => { 

this.setState({
  newsm: json

})

    })


fetch(`http://example.com/wp-json/wp/v2/comments?post=${this.props.match.params.id}`, {
headers: { 'Content-Type': 'application/json'},
method: 'GET',
mode: 'cors'
})
  .then(response => response.json())
  .then(json => { 
  	console.log(json)

this.setState({
  comments: json,
  isLoadeds: true 

})


    })  








}	



componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.match.params.id !== prevProps.match.params.id) {
  	let dsn = this.props.match.params.id;
	console.log(this.props.match.params.id);
fetch(`http://example.com/wp-json/wp/v2/posts/${dsn}`, {
headers: { 'Content-Type': 'application/json'},
method: 'GET',
mode: 'cors'
})
  .then(response => response.json())
  .then(json => { 
  	console.log(json)

this.setState({
  newsoneTitle: json.title,
  newsoneContent: json.content,
  newsoneWrap: json

})

    })


    fetch(`http://example.com/wp-json/wp/v2/comments?post=${this.props.match.params.id}`, {
headers: { 'Content-Type': 'application/json'},
method: 'GET',
mode: 'cors'
})
  .then(response => response.json())
  .then(json => { 
  	console.log(json)

this.setState({
  comments: json,
  isLoadeds: true 

})


    })  	



  }
}


submitForm(e){

	e.preventDefault();

  var okMess = document.getElementById('email-mess-ok')
  var successComment = document.getElementById('success-comment')
  


	this.props.addNewComment(this.input1.value, this.input2.value, this.input.value, this.props.match.params.id)

    


this.input.value=''
this.input1.value=''
this.input2.value=''
okMess.style.display = 'none'
successComment.style.display = 'block'


setTimeout(function() {
   successComment.style.display = 'none'
}, 4000); 

submiter.disabled = true; 
this.input2.style.border = '1px solid #c6c6c6';

}


changeOne(e){

var patternemail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i;

if(patternemail.test(this.input2.value) == false){
var corectemail = false;
}else{
var corectemail = true;
}


let submiter = document.getElementById('submiter')
  if(this.input1.value !='' && this.input2.value !='' && this.input.value !='' && corectemail == true){
submiter.disabled = false;
}else{
 submiter.disabled = true; 
}

}


changeTwo(e){

var patternemail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i;

var okMess = document.getElementById('email-mess-ok')
var errorMess = document.getElementById('email-mess-error')

if(patternemail.test(this.input2.value) == false){
var corectemail = false;
this.input2.style.border = '1px solid red';
okMess.style.display = 'none';
errorMess.style.display = 'block';
}else{
var corectemail = true;
this.input2.style.border = '1px solid green';
okMess.style.display = 'block';
errorMess.style.display = 'none';
}

let submiter = document.getElementById('submiter')
  if(this.input1.value !='' && this.input2.value !='' && this.input.value !='' && corectemail == true){
submiter.disabled = false;
}else{
 submiter.disabled = true; 
}

}



changeThree(e){

var patternemail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/i;
if(patternemail.test(this.input2.value) == false){
var corectemail = false;
}else{
var corectemail = true;
}

let submiter = document.getElementById('submiter')
  if(this.input1.value !='' && this.input2.value !='' && this.input.value !='' && corectemail == true){
submiter.disabled = false;
}else{
 submiter.disabled = true; 
}

}




removeInput1(e){
 this.input1.removeAttribute('placeholder');
}
removeInput2(e){
 this.input2.removeAttribute('placeholder');
}
removeInput(e){
 this.input.removeAttribute('placeholder');
}

onLinkshow(event){
 let ulMenu = document.getElementById('menu-ul');
 ulMenu.classList.toggle('open');
}

onLink(event){
  let sds = event.target.id
//alert(sds);
this.context.router.history.push(`/news/${sds}`)
}



	

render(){

let { newsoneTitle, newsoneContent, newsoneWrap, newsm, isLoaded, isLoadeds, comments } = this.state;







if(isLoaded && isLoadeds){



//let submiter = document.getElementById('submiter')
//alert(submiter.id)
//this.submiter.setAttribute('disabled', true)



 let commentary = this.props.commentary



 let com = commentary.concat(comments)


document.title = newsoneTitle.rendered;


    return(

<div className='container'>
    	<div className='news'>
    	<div className='row'>

<div className='col-md-3'>
    	<div className='menu-block'>
      <p className='media-nav' onClick={this.onLinkshow.bind(this)}><i className="fas fa-bars"></i>   MENU</p>
<ul className='menu-list' id='menu-ul'>
<li><Link to='/' className='newsm__element'>Main</Link></li>
<li><Link to='/about' className='newsm__element'>About</Link></li>
{newsm.map(nw => {	
return <li key={nw.id}><a id={nw.id} className='newsm__element' onClick={this.onLink.bind(this)} >{nw.title.rendered}</a></li>
})

}

</ul>

</div>
</div>

<div className='col-md-9'>

 <h1 className='news__title'>{newsoneTitle.rendered}</h1>
 <span>{newsoneWrap.date}</span>
 <div id='cont' className='news__content'>{Parser(String(newsoneContent.rendered))}</div>


 <div className='news_comments'>
 <h4>List of comments</h4>
{com.map(comment => {	

if(comment.post==this.props.match.params.id){
return <div className='news_comments_elem'> <p className='news_comments__date'>{comment.date}</p>
<p className='news_comments__author'>{comment.author_name}</p>
<div className='news_comments__content'>{Parser(String(comment.content.rendered))}</div>
</div>
}else {

}

})

}

 <form onSubmit={this.submitForm.bind(this)} action="#" className='comment-form'>
 <h4>Add Comment</h4>
 <p id='success-comment'>Your comment has been successfully added.</p>
  <label>Name</label>
 <p><input ref={(input1) => this.input1 = input1 } onChange={this.changeOne.bind(this)} onFocus={this.removeInput1.bind(this)} placeholder="Your name"   type="text" className="comment__content"/></p>
 <label>E-mail</label>
 <p><span id='email-mess-ok'>Сorrect format of Email</span><span id='email-mess-error'>Wrong format of e-mail</span></p>
 <p><input ref={(input2) => this.input2 = input2 } onChange={this.changeTwo.bind(this)} onFocus={this.removeInput2.bind(this)} placeholder="Your e-mail"   type="text" className="comment__content"/></p>
 <label>Comment</label>
 <p><textarea ref={(input) => this.input = input } onChange={this.changeThree.bind(this)} onFocus={this.removeInput.bind(this)} placeholder="Your message"   type="text" className="comment__author"/></p>



<input id='submiter' disabled value="Add Comment" type="submit" className="comment__submit btn btn-success"/>
</form>
 </div>







</div>




</div>
</div>
</div>
    	)


} else{
	return(
<div>Loading...</div>
	)
}



}

} 	



NewsOne.contextTypes = {
    router: PropTypes.object.isRequired 
};



const mapStateProps = (state) => {
return{
newsone: state.messagesReducer,
commentary: state.commentsReducer
} 
}
const mapDispatchProps = (dispatch) =>{
return {
addNewComment: bindActionCreators (addNewComment, dispatch)
  }
}

export default connect(mapStateProps, mapDispatchProps)(NewsOne)





