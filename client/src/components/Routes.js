import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

const routes = () => (
	<div>
		<Switch>
			<Route exact path={"/home"} render={() => <Home/> } />
			<Route exact path={"/login"} render={()=> <Login/> } />
			<Route exact path={"/sign_up"} render={()=><Signup/>} />
		</Switch>
	</div>
	)

export default routes;