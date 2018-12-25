




import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Redirect, HashRouter, Switch} from 'react-router-dom';

import ws from './api/ws.js'

import { Provider } from 'react-redux'



import store from './store/index.js'


window.ws = ws


import App from './components/App.js'
import About from './components/About.js'
import NewsOne from './containers/NewsOne.js'

import './components/Index.scss'

import logo from './public/images/logo.png'

render(
	<div className="site">
	<div className="wrapper">
	<header>
	<div className="container">
<div className="row">
<div className="col-md-6"><img src={logo}/></div>
<div className="col-md-6">
<div className="contact">
<span>E-mail: </span><a href='mailto:vorzelski@gmail.com'>vorzelski@gmail.com</a>
</div>
</div>
</div>
	</div>
    </header>

	<Provider store={store}>
<HashRouter>
<Switch>
 <Route exact path='/' component={App}/>
 <Route path='/about' component={About}/>
 <Route path='/news/:id' component={NewsOne}/>
 </Switch>
	</HashRouter>
</Provider>
	</div>

<footer className="site-footer"><span>Copyright© 2018. All rights reserved.</span> </footer>
	</div>,
	document.getElementById('main')
)