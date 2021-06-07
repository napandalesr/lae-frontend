import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { IsLoggedIn } from "../utils/helpers";
import Home from '@pages-Project/Home/index';
import Task from '@pages-Project/Task/index';
import Users from '@pages-Project/Users/index';
import { ROUTES_INTERNAL } from "../const/internal";

const Routes = () => {
  const [auth] = React.useState(IsLoggedIn());

	return (
		<div className=''>
				<Switch>
					{
						auth && <>
							<Route exact path={`${ROUTES_INTERNAL.HOME}`} component={Home} />
              <Route exact path={`${ROUTES_INTERNAL.USUARIOS}`} component={Users} />
              <Route exact path={`${ROUTES_INTERNAL.TASK}`} component={Task} />
						</>
					}
				</Switch>
		</div>
	);
};

export default Routes;