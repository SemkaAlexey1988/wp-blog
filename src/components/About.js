import React, { Component } from 'react' 
import { Link } from 'react-router-dom';  
import PropTypes from 'prop-types';


export default class About extends Component {


componentDidMount() {

 this.setState({
newsm: [],
isLoaded: false
})



fetch('http://example.com/wp-json/wp/v2/posts', {
headers: { 'Content-Type': 'application/json'},
method: 'GET',
mode: 'cors'
})
  .then(response => response.json())
  .then(json => { 

this.setState({
  newsm: json,
  isLoaded: true

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
let { newsm, isLoaded } = this.state;

if(isLoaded){

document.title = 'About';


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
<h1 className='news__title'>About</h1>
<div className='show-after-load'>The blog Mirosvit is a site about the world. 
The main subject of the web resource: countries, regions and cities of the world, as well as travel and tourism.</div>
</div>

</div>
</div>
</div>
    	)
} else {
	 return(
<div>Loading...</div>
    	)
}


}

} 	


About.contextTypes = {
    router: PropTypes.object.isRequired 
};