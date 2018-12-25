/*

onChcol(event){
let elementw = document.getElementById('rsr'); 
elementw.style.color = 'red';
}

//to rener
<div id='rsr'>No text</div>
</div>

<li onClick={this.onChcol.bind(this)}>Change</li>

*/





import React, { Component } from 'react'

import PropTypes from 'prop-types';




import NewsList from '../containers/NewsList.js'
import NewsOne from '../containers/NewsOne.js'

import { Link } from 'react-router-dom';  









 export default class App extends Component {



constructor(props) {
    super(props);
    this.state = {
      messages: {},

    newsm: [],
  //  router

    };
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
  newsm: json

})

    })
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

let { newsm } = this.state;

    return(
    	    	
<div className='container'>
    	<div className='chat'>
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
<NewsList />
</div>





</div>
</div>

</div>

     )

}

}

App.contextTypes = {
    router: PropTypes.object.isRequired 
};




