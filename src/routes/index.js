import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { IsLoggedIn } from "../utils/helpers";
import Home from '@pages-Project/Home/index';
import { ROUTES_INTERNAL } from "../const/internal";

const Routes = () => {
  const [auth] = React.useState(IsLoggedIn());

	return (
		<div className=''>
				<Switch>
					             
					{
						auth && <>
							<Route exact path={ROUTES_INTERNAL.HOME} component={Home} />
						</>
					}
				</Switch>
		</div>
	);
};

export default Routes;