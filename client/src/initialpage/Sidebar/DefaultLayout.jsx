/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

// router service
import routerService from "../../router_service";

import Header from './header.jsx';
import SidebarContent from './sidebar';

class DefaultLayout extends Component {
	render() {
		const { match } = this.props;
		return (
			<div className="main-wrapper">
				<Header/>
				<div>
					{routerService && routerService.map((route,key)=>
						<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
					)}
				</div>				
				<SidebarContent/>
			</div>
		);
	}
}
export default withRouter(DefaultLayout);

// export default withRouter(connect(null)(DefaultLayout));
