import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Space from './Space'
import Podcast from './Podcast'

const routes = () => (
	<div>
		<Switch>
			<Route exact path={"/home"} render={() => <Home/> } />
			<Route exact path={"/login"} render={()=> <Login/> } />
			<Route exact path={"/signup"} render={()=><Signup/>} />
			<Route exact path={"/space"} render={()=> <Space/>} />
			<Route exact path={"/podcast"} rende={()=> <Podcast/>} />
		</Switch>
	</div>
)

export default routes;