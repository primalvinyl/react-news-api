import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../components/utility/ErrorBoundary';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';

const Routes = (): React.ReactElement => (
    <ErrorBoundary>
        <Switch>
            <Route
                exact
                path={'/'}
                component={HomePage}
            />
            <Route
                component={ErrorPage}
            />
        </Switch>
    </ErrorBoundary>
);

export default Routes;
